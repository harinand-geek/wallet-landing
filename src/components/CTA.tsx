import { APP_URL } from "../constants";

export function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div>
            <h2>Prêt à reprendre le contrôle de vos finances&nbsp;?</h2>
            <p>
              Rejoignez les utilisateurs qui ont clarifié leur situation financière avec Miarina Wallet. Gratuit et sans engagement.
            </p>
          </div>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-xl">
            Accéder à Miarina Wallet
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
