# Miarina Wallet — Landing Page (React + Vite)

Page d'accueil de Miarina Wallet construite en React + Vite + TypeScript.

## Structure

```
landing_wallet/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html                 — Vite root template
├── public/
│   ├── mobile-1.jpg ... mobile-5.jpg
│   └── desktop-1.png ... desktop-3.png
├── src/
│   ├── main.tsx               — entry-point
│   ├── App.tsx                — orchestre les sections
│   ├── styles.css             — design system + responsive
│   ├── constants.ts           — URL de l'app + logo
│   ├── hooks/
│   │   ├── useTheme.ts        — dark/light toggle persistant
│   │   └── useScrollReveal.ts — fade-up au scroll
│   └── components/
│       ├── Logo.tsx
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── MobileSection.tsx
│       ├── DesktopShowcase.tsx
│       ├── Steps.tsx
│       ├── Why.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
└── dist/                      — build output (gitignored)
```

## Développement local

```bash
npm install
npm run dev
```

Ouvre <http://localhost:5173>.

## Build pour production

```bash
npm run build
```

Le résultat est dans `dist/` — c'est ce dossier qu'il faut uploader.

## Déploiement DirectAdmin / cPanel

1. Run `npm run build`
2. Connecte-toi à DirectAdmin → **File Manager**
3. Ouvre `public_html/` (ou un sous-dossier dédié)
4. Upload **le contenu** de `dist/` (pas le dossier lui-même)
5. La landing est accessible à `https://tondomaine.com/`

Aucune config serveur nécessaire — c'est un site statique pur.

## Bouton "Accéder à l'app"

Pointe vers `https://miarina-wallet.netlify.app`. À modifier dans
[src/constants.ts](src/constants.ts) si l'URL change (constante `APP_URL`).
