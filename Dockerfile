# Stage 1: Build the Deno executable
FROM denoland/deno:2.2.4 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the application files into the container
COPY . .

# Compile the Deno application into a standalone executable
RUN deno compile --allow-read --output rotvar main.ts

# Stage 2: Create a compatible runtime image
FROM debian:bullseye-slim

# Set the working directory inside the container
WORKDIR /app

# Install necessary libraries for the compiled executable
RUN apt-get update && apt-get install -y \
    libstdc++6 \
    && rm -rf /var/lib/apt/lists/*

# Copy the compiled executable from the builder stage
COPY --from=builder /app/rotvar /app/rotvar

# Expose a default command to run the application
ENTRYPOINT ["/app/rotvar"]