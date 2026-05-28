import { APP_URL } from "../constants";

const CHECK_ITEMS = [
  "Interface tactile optimisée — bottom nav, gestes, transitions fluides",
  "Installable comme une app native — iOS, Android, Windows, Mac",
  "Aucun téléchargement lourd — moins de 1 Mo en cache",
  "Mise à jour automatique — toujours la dernière version"
];

function CheckIcon() {
  return (
    <span className="check">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export function MobileSection() {
  return (
    <section id="mobile" className="section section-alt">
      <div className="container mobile-grid">
        <div className="mobile-copy">
          <span className="kicker">Mobile-first</span>
          <h2>Pensé pour le mobile, génial sur desktop</h2>
          <p className="lead">
            Miarina Wallet est une <strong>Progressive Web App</strong>. Installez-la en un clic depuis votre navigateur — pas besoin de Play Store ni d'App Store. Elle fonctionne offline et se lance comme une app native.
          </p>

          <ul className="check-list">
            {CHECK_ITEMS.map((item) => (
              <li key={item}>
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Installer maintenant
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>

        <div className="mobile-gallery">
          <div className="phone-frame phone-tilt">
            <img src="/mobile-3.jpg" alt="Statistiques Miarina Wallet sur mobile" />
          </div>
          <div className="phone-frame phone-tilt-2">
            <img src="/mobile-4.jpg" alt="Liste des transactions sur mobile" />
          </div>
          <div className="phone-frame phone-tilt-3">
            <img src="/mobile-5.jpg" alt="Budgets Miarina Wallet sur mobile" />
          </div>
        </div>
      </div>
    </section>
  );
}
