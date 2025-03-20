[![Docker Test, Build, and Push](https://github.com/vmandic/rotvar-algo/actions/workflows/docker-build.yml/badge.svg)](https://github.com/vmandic/rotvar-algo/actions/workflows/docker-build.yml)

# 🎉 rotvar-algo

> Caveat: Content is in Croatian language 🇭🇷 for educational purposes of kids.

**rotvar-algo** je jednostavna Deno TypeScript aplikacija koja omogućuje rotaciju teksta za određeni broj mjesta unutar unaprijed definiranog skupa znakova. Projekt koristi Deno izvedbeni okolinu za izvršavanje.

## ✨ Značajke

- 🔄 Rotacija teksta s unaprijed definiranim skupom znakova (uključujući slova, brojeve i specijalne znakove).
- ➕ Podrška za pozitivne i negativne pomake.
- 🔤 Zadržavanje znakova koji nisu u skupu znakova.
- 🖥️ Jednostavno pokretanje putem naredbenog retka.

## 🛠️ Instalacija

1. 📥 Preuzmite i instalirajte [Deno](https://deno.land/).
2. 🌀 Klonirajte ovaj repozitorij:
   ```bash
   git clone https://github.com/vaš-korisnički-račun/rotvar-algo.git
   ```
3. 📂 Uđite u direktorij projekta:
   ```bash
   cd rotvar-algo
   ```

## 🚀 Korištenje

Pokrenite aplikaciju pomoću Deno naredbe:

```bash
deno main.ts <poruka> [pomak]
```

### 📝 Argumenti

- `<poruka>`: Tekst koji želite rotirati.
- `[pomak]`: Opcionalni broj koji određuje za koliko mjesta će se tekst rotirati. Ako nije naveden, koristi se zadani pomak od 3.

### 📚 Primjeri

1. 🔄 Rotacija teksta s defaultnim pomakom:
   ```bash
   deno main.ts "ABC"
   ```
   **Izlaz:**
   ```
   Poruka rotirana za 3:
   DEF
   ```

2. 🔄 Rotacija teksta s prilagođenim pozitivnim pomakom:
   ```bash
   deno main.ts "ABC" 5
   ```
   **Izlaz:**
   ```
   Poruka rotirana za 5:
   FGH
   ```

3. 🔄 Rotacija teksta s negativnim pomakom:
   ```bash
   deno main.ts "DEF" -3
   ```
   **Izlaz:**
   ```
   Poruka rotirana za -3:
   ABC
   ```

### ⚙️ Korištenje kompajlirane verzije

Deno omogućuje kompajliranje aplikacije u izvršnu datoteku. Ovo je korisno ako želite pokrenuti aplikaciju bez instaliranja Deno runtime-a.

1. 🛠️ Kompajlirajte aplikaciju:
   ```bash
   deno compile --allow-read --output rotvar main.ts
   ```

2. ▶️ Pokrenite kompajliranu izvršnu datoteku:
   ```bash
   ./rotvar "ABC" 5
   ```
   **Izlaz:**
   ```
   Poruka rotirana za 5:
   FGH
   ```

3. ▶️ Pokrenite s negativnim pomakom:
   ```bash
   ./rotvar "DEF" -3
   ```
   **Izlaz:**
   ```
   Poruka rotirana za -3:
   ABC
   ```

## ✅ Testiranje

Za pokretanje testova koristite naredbu:

```bash
deno test
```

## 📂 Struktura projekta

- **main.ts**: Glavna datoteka koja sadrži funkciju `rotateText` i logiku za pokretanje aplikacije.
- **main_test.ts**: Testovi za funkciju `rotateText`.

## 📜 Licenca

Ovaj projekt je objavljen pod [MIT licencom](LICENSE).

## 👨‍💻 Autor

Vedran Mandić, 2025.