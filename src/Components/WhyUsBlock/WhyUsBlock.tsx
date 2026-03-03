import styles from "./DlaczegoMy.module.css";

export function DlaczegoMy() {
  return (
    <section className={styles.section}>
      <h1 className="mb-10">Wybieraj nas!</h1>

      <div className={styles.wrapper}>
        {/* Top section */}
        <div className={styles.topGrid}>
          {/* Left content */}
          <div>
            <h2 className={styles.title}>
              Dlaczego warto wybrać naszą drukarnię?
            </h2>

            <p className={styles.description}>
              Zapewniamy kompleksową obsługę druku dla firm i klientów
              indywidualnych. Łączymy doświadczenie, nowoczesne technologie
              oraz terminowość realizacji.
            </p>

            <div className={styles.stats}>
              <div>
                <p className={styles.statNumber}>8+</p>
                <p className={styles.statText}>lat doświadczenia</p>
              </div>

              <div>
                <p className={styles.statNumber}>1 000+</p>
                <p className={styles.statText}>zrealizowanych projektów</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageBox}>
              <img
                src="/landing1.jpg"
                alt="Drukarnia"
                className={styles.image}
              />
            </div>

            <div className={styles.decor}></div>
          </div>
        </div>

        {/* Bottom features */}
        <div className={styles.featuresGrid}>
          <Feature
            title="Nowoczesny sprzęt"
            text="Druk cyfrowy najwyższej jakości z dbałością o każdy detal."
          />

          <Feature
            title="Szybka realizacja"
            text="Krótki czas wykonania zamówień bez kompromisów jakościowych."
          />

          <Feature
            title="Indywidualne podejście"
            text="Doradzamy najlepsze rozwiązania dopasowane do potrzeb klienta."
          />

          <Feature
            title="Konkurencyjne ceny"
            text="Optymalne wyceny przy zachowaniu wysokiej jakości druku."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.icon}>✓</div>

      <h3 className={styles.featureTitle}>{title}</h3>

      <p className={styles.featureText}>{text}</p>
    </div>
  );
}