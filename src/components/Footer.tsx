import { APP_URL } from "../constants";
import { Logo } from "./Logo";

const PRODUCT_LINKS = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Application mobile", href: "#mobile" },
  { label: "Comment ça marche", href: "#comment" }
];

const RESOURCES_LINKS = [
  { label: "Pourquoi Miarina", href: "#pourquoi" },
  { label: "Accéder à l'app", href: APP_URL, external: true }
];

const LEGAL_LINKS = [
  { label: "Confidentialité", href: "#" },
  { label: "Conditions d'utilisation", href: "#" }
];

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      {/* Top brand band */}
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo />
          <p>Votre argent reste clair, stable et maîtrisé. Gérez tous vos comptes depuis une seule interface, en toute sérénité.</p>
        </div>

        <nav className="footer-cols" aria-label="Liens du pied de page">
          <div>
            <h4>Produit</h4>
            {PRODUCT_LINKS.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </div>
          <div>
            <h4>Ressources</h4>
            {RESOURCES_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Légal</h4>
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </div>
        </nav>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">
            <span>&copy; {year} <strong>Miarina Wallet</strong></span>
            <span className="footer-dot" aria-hidden="true">·</span>
            <span className="muted">
              Conçu par{" "}
              <a href="https://miarina.org" target="_blank" rel="noopener noreferrer" className="footer-link">
                MIARINA.org
              </a>
            </span>
          </span>

          <button type="button" onClick={scrollToTop} className="back-to-top" aria-label="Retour en haut">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            <span>Haut</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
