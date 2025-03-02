This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Diagrama de Fluxo
```mermaid
graph TD;
    A[Inicio];
    B[Participante entra no site]
    B1{Participante tem cadastro?}
    B2{Participante cria cadastro}
    C[Exibir Saudação]
    D[Participante entra texto]
    E{Texto possui resposta}
    F[Exibir resposta do texto]
    G[Participante clica no botao para voltar]
    H{Randomizar erro}
    I[Exibir Erro convencional]
    J[Exibir Erro especial]
    E1{Texto vai parte do enigma?}
    E2{As partes anteriores já foram respondidas?}
    K[Participante clica em linha do tempo]
    L[Verificar linha do tempo do participante]
    M[Participante clica na linha do tempo no qual ele quer]

    A --> B;
    B --> B1;
    B1 -->|Sim| C;
    B1 -->|Não|B2; 
    B2 --> C;
    C --> D;
    D --> E;
    E -->|Sim| E1;
    E -->|Não| H;
    E1 -->|Sim| E2;
    E1 -->|Não| F;
    E2 -->|Sim| F;
    E2 -->|Não| H;
    F --> G;
    G --> C;
    H -->|Erro convencional| I;
    H -->|Erro especial| J;
    I --> G;
    J --> G;
    C --> K;
    K --> L;
    L --> M;
    M --> F;



```