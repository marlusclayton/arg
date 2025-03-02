Esse é um projeto para gerenciar um ARG (alternate reality game) pessoal

## Começando...

Primeiramente, para executar o servidor:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com o browser.

Esse projeto também foi Deployed na Vercel, para acessar use o endereço https://arg-blond.vercel.app ou https://arg-marlusclaytons-projects.vercel.app

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