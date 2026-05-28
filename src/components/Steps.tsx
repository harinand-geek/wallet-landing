const STEPS = [
  {
    n: 1,
    title: "Créez votre compte",
    desc: "Inscription en 30 secondes par email. Confirmez votre adresse et vous êtes connecté à votre espace privé sécurisé."
  },
  {
    n: 2,
    title: "Ajoutez vos wallets",
    desc: "MVola, Orange Money, BRED, espèces, crypto… Renseignez le solde de départ de chaque compte que vous utilisez."
  },
  {
    n: 3,
    title: "Suivez en temps réel",
    desc: "Saisissez vos revenus et dépenses, créez des budgets, et visualisez votre santé financière au quotidien."
  }
];

export function Steps() {
  return (
    <section id="comment" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Comment ça marche</span>
          <h2>3 étapes pour reprendre le contrôle</h2>
        </div>

        <div className="steps">
          {STEPS.map((step) => (
            <article key={step.n} className="step">
              <span className="step-num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
