import { APP_URL } from "../constants";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            Web dashboard + PWA mobile
          </span>
          <h1 className="hero-title">
            Votre argent reste <span className="grad">clair, stable</span> et maîtrisé.
          </h1>
          <p className="hero-sub">
            Gérez Mobile Money, banques, cash et crypto depuis une seule interface premium — responsive sur tout écran et installable comme une app native sur iOS, Android et desktop.
          </p>
          <div className="hero-cta">
            <a href={APP_URL} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              Commencer gratuitement
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#fonctionnalites" className="btn btn-ghost btn-lg">
              Découvrir les fonctionnalités
            </a>
          </div>
          <div className="hero-trust">
            <div><strong>4 637 320</strong><span>MGA gérés</span></div>
            <div><strong>5</strong><span>Wallets centralisés</span></div>
            <div><strong>100 %</strong><span>Mobile-first</span></div>
          </div>
        </div>

        <div className="hero-mock" aria-hidden="true">
          <div className="phone-frame phone-back">
            <img src="/mobile-2.jpg" alt="" />
          </div>
          <div className="phone-frame phone-front">
            <img src="/mobile-1.jpg" alt="Aperçu du dashboard Miarina Wallet" />
          </div>
          <div className="float-card float-card-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            <div><b>+ 15 000 MGA</b><span>Revenu crédité</span></div>
          </div>
          <div className="float-card float-card-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div><b>Real-time</b><span>Sync multi-appareils</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
