export function rotateText(text: string, shift: number = 3): string {
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZŠĐŽĆČabcdefghijklmnopqrstuvwxyzšđžćč0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

  const length = alphabet.length;

  return text
    .split("")
    .map((char) => {
      const index = alphabet.indexOf(char);
      if (index === -1) return char; // Keep characters not in the alphabet unchanged

      const newIndex = (index + shift) % length;
      return alphabet[newIndex < 0 ? newIndex + length : newIndex]; // Handle negative shifts
    })
    .join("");
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const args = Deno.args;
  if (args.length < 1) {
    console.error("Upotreba: <poruka> [pomak]");
    Deno.exit(1);
  }

  const message = args[0];
  const shift = args.length > 1 && !isNaN(Number(args[1]))
    ? Number(args[1])
    : 3;

  const result = rotateText(message, shift);
  console.log(`Poruka rotirana za ${shift}:\n${result}`);
}
