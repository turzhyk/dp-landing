export function OpinieKlientow() {
  return (
    <section className=" py-24 bg-shiron">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">
            Opinie klientów
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Co mówią o nas nasi klienci?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Poniższe opinie pochodzą z naszej wizytówki w Google Maps.
          </p>

          {/* Google rating summary */}
          <div className="flex items-center justify-center gap-4 mt-6 bg-white w-120 m-auto h-20 rounded-2xl">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <div className="text-gray-700 font-semibold">5 / 5</div>
            <div className="text-gray-500 text-sm">
              (na podstawie 6+ opinii w Google)
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReviewCard
            name="Антон Бабенко"
            text="Отличное завидение, мне понравилось, рекомендую👍"
            url={
              "https://lh3.googleusercontent.com/a-/ALV-UjX1Hp2M95nkr4E_hiu30MEYzMqKjkUqJL1qPW7RKr0aunQanFAm=s64-c-rp-mo-br100"
            }
          />
          <ReviewCard
            name="Андрій Повх"
            text="Швидко, якісно та професійно. Сервісом задоволений, приємне обслуговування, документи друкую тільки тут. Рекомендую!
Компанія розширюється, в майбутньому замовлю постер"
            url={
              "https://lh3.googleusercontent.com/a-/ALV-UjX1Hp2M95nkr4E_hiu30MEYzMqKjkUqJL1qPW7RKr0aunQanFAm=s64-c-rp-mo-br100"
            }
          />
          <ReviewCard
            name="Redjina"
            text="Все супер!!! Кваліфіковані працівники, все на вищому рівні. Окрема подяка директору фірми"
            url={
              "https://lh3.googleusercontent.com/a-/ALV-UjX1Hp2M95nkr4E_hiu30MEYzMqKjkUqJL1qPW7RKr0aunQanFAm=s64-c-rp-mo-br100"
            }
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
    <div className="bg-white p-8 rounded-2xl border outline border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
      {/* Rating */}
      <div className="text-yellow-400 mb-4">★★★★★</div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{text}</p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
          {/* <img src={url} /> */}
        </div>

        <div>
          <p className="text-gray-900 font-semibold">{name}</p>
          <p className="text-gray-500 text-xs flex items-center"> Opinia z Google Maps<img src="/svg/google_maps.svg" className="w-10"/></p>
        </div>
      </div>
    </div>
  );
}
