import styles from "./OpinieKlientow.module.css";

export function OpinieKlientow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.subtitle}>Opinie klientów</p>

          <h2 className={styles.title}>
            Co mówią o nas nasi klienci?
          </h2>

          <p className={styles.description}>
            Poniższe opinie pochodzą z naszej wizytówki w Google Maps.
          </p>

          {/* Google rating summary */}
          <div className={styles.ratingBox}>
            <div className={styles.stars}>★★★★★</div>
            <div className={styles.ratingValue}>5 / 5</div>
            <div className={styles.ratingText}>
              (na podstawie 6+ opinii w Google)
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className={styles.grid}>
          <ReviewCard
            name="Антон Бабенко"
            text="Отличное завидение, мне понравилось, рекомендую👍"
            url="https://lh3.googleusercontent.com/a-/ALV-UjX1Hp2M95nkr4E_hiu30MEYzMqKjkUqJL1qPW7RKr0aunQanFAm=s64-c-rp-mo-br100"
          />

          <ReviewCard
            name="Андрій Повх"
            text={`Швидко, якісно та професійно. Сервісом задоволений, приємне обслуговування, документи друкую тільки тут. Рекомендую!
Компанія розширюється, в майбутньому замовлю постер`}
            url="https://lh3.googleusercontent.com/a/ACg8ocICskMPP-dPck2nA3njbDcYXr9yEKknxKVa3C-E3l05k402sA=s36-c-rp-mo-br100"
          />

          <ReviewCard
            name="Redjina"
            text="Все супер!!! Кваліфіковані працівники, все на вищому рівні. Окрема podяка директору фірми"
            url="https://lh3.googleusercontent.com/a/ACg8ocLQPMWUUlWNCtcDkhLnkW-ZDmOaZkB077H107VUs2jibxw3UA=s36-c-rp-mo-br100"
          />
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  text,
  url,
}: {
  name: string;
  text: string;
  url: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>★★★★★</div>

      <p className={styles.reviewText}>{text}</p>

      <div className={styles.author}>
        <div className={styles.avatar}>
          <img src={url} alt={name} />
        </div>

        <div>
          <p className={styles.authorName}>{name}</p>
          <p className={styles.source}>
            Opinia z Google Maps
            <img src="/svg/google_maps.svg" alt="Google Maps" />
          </p>
        </div>
      </div>
    </div>
  );
}