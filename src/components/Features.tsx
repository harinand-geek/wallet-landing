import type { ReactNode } from "react";

type Feature = {
  title: string;
  desc: string;
  gradient: string;
  icon: ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Wallets multiples",
    desc: "MVola, Orange Money, Airtel Money, BRED, BFV, espèces, USDT… Tous vos comptes dans un seul tableau de bord en temps réel.",
    gradient: "linear-gradient(135deg,#7cbda8,#126650)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    )
  },
  {
    title: "Revenus & dépenses",
    desc: "Catégorisez chaque transaction. Salaire, business, nourriture, transport — pour comprendre où va votre argent.",
    gradient: "linear-gradient(135deg,#84cc16,#15803d)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
  {
    title: "Budgets intelligents",
    desc: "Définissez des limites hebdo ou mensuelles par catégorie. Recevez une alerte visuelle à 80 % et 100 %.",
    gradient: "linear-gradient(135deg,#249a7c,#0a4f3b)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: "Transferts inter-wallets",
    desc: "Déplacez de l'argent entre vos comptes en un clic. Frais et commission pris en compte automatiquement.",
    gradient: "linear-gradient(135deg,#38bdf8,#2563eb)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    )
  },
  {
    title: "Statistiques visuelles",
    desc: "Courbes d'évolution, répartition par wallet, top catégories de dépense. Comprenez vos habitudes financières en un coup d'œil.",
    gradient: "linear-gradient(135deg,#c89945,#b07c34)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    title: "Sécurité Supabase",
    desc: "Authentification email, Row Level Security au niveau de la base. Vos données sont chiffrées et privées par défaut.",
    gradient: "linear-gradient(135deg,#b85f59,#883b35)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
];

export function Features() {
  return (
    <section id="fonctionnalites" className="section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Tout-en-un</span>
          <h2>Une seule app, tous vos comptes</h2>
          <p>
            Mobile Money malgache, banques, espèces, crypto. Miarina Wallet centralise vos flux pour vous donner une vision claire et précise de votre patrimoine.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon" style={{ background: feature.gradient }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
