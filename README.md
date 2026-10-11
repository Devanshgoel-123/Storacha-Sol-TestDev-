# Solana-Storacha

### Test and dev server for Storacha storage paid with Solana

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Express](https://img.shields.io/badge/Express-000?logo=express&logoColor=white) ![Solana](https://img.shields.io/badge/Solana-9945FF?logo=solana&logoColor=white) ![IPFS](https://img.shields.io/badge/IPFS-65C2CB?logo=ipfs&logoColor=white) ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=black) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)

A development backend used while building the [Storacha Solana SDK](https://github.com/seetadev/IPFS-Solana-SDK). It's an Express service that accepts SOL payments and pins files to IPFS/Filecoin through Storacha. Deposit records are kept in Postgres via Drizzle, and admin routes are protected.

```mermaid
flowchart LR
    C["Client / SDK"] -->|upload + SOL payment| API["Express API<br/>/api/admin (auth middleware)"]
    API --> Sol["Solana<br/>@solana/web3.js · Anchor"]
    API --> St["Storacha (w3up)<br/>IPFS + Filecoin"]
    API --> DB[("PostgreSQL<br/>Drizzle ORM")]
```

```bash
cd storacha-solana-pay
npm install && cp .env.example .env
npx drizzle-kit migrate
npx ts-node src/index.ts
```
