# Meu Dia Tranquilo — landing page

React + Vite + Material UI. Pronta para a Vercel.

## Antes de publicar

1. Abra `src/config.js` e troque `CHECKOUT_URL` pelo link de checkout da Cakto.
2. (Opcional) Cole o código do Meta Pixel no `index.html`, no lugar indicado.
   Os botões já disparam `Lead` (download da amostra) e `InitiateCheckout` (compra).

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project →** escolha o repositório.
3. A Vercel detecta o Vite sozinha (Build: `npm run build`, Output: `dist`). Clique em **Deploy**.

## Rodar no computador

```bash
npm install
npm run dev
```

## Onde fica cada coisa

- `public/Meu-Dia-Tranquilo-Amostra.pdf`: PDF grátis baixado pelos botões
- `public/img/`: prévias das páginas (WebP, carregadas com lazy loading)
- `src/sections/`: cada seção da página (as que ficam abaixo da primeira tela carregam sob demanda)
