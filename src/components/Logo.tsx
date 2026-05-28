export function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a href={href} className="logo-lockup" aria-label="Miarina Wallet">
      <span className="logo-text">
        <span className="logo-name">Miarina</span>
        <span className="logo-sub">Wallet</span>
      </span>
    </a>
  );
}
