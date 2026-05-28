import type { ReactNode } from "react";

const REASONS: { strong: string; rest: ReactNode }[] = [
  {
    strong: "Read-only, jamais d'accès à vos comptes.",
    rest: " Vous saisissez les transactions vous-même. Aucun risque, aucune intrusion bancaire."
  },
  {
    strong: "Multi-devises.",
    rest: " MGA, EUR, USD, USDT. Idéal pour la diaspora qui envoie de l'argent au pays."
  },
  {
    strong: "100 % gratuit, sans pub.",
    rest: " Pas de freemium piégeux, pas de tracking publicitaire."
  },
  {
    strong: "Dark mode natif.",
    rest: " Confort visuel et économie de batterie sur OLED."
  },
  {
    strong: "Sync temps réel.",
    rest: " Saisi sur mobile, visible sur desktop dans la seconde."
  }
];

function CheckIcon() {
  return (
    <span className="why-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export function Why() {
  return (
    <section id="pourquoi" className="section">
      <div className="container why-grid">
        <div>
          <span className="kicker">Pourquoi Miarina Wallet</span>
          <h2>L'app financière pensée pour Madagascar et la diaspora</h2>
          <p className="lead">
            Banques classiques, Mobile Money, virements internationaux, crypto — votre vie financière est éclatée sur 5 apps différentes. Miarina les unifie sans jamais toucher à votre argent.
          </p>
        </div>

        <div className="why-list">
          {REASONS.map((reason) => (
            <div key={reason.strong} className="why-item">
              <CheckIcon />
              <div>
                <b>{reason.strong}</b>
                {reason.rest}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
