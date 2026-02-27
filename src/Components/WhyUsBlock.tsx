export function DlaczegoMy() {
  return (
    <section className="relative min-h-[50rem] bg-white ">
      <h1 className="mt-10">Wybieraj nas!</h1>
      <div className=" flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">

        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Dlaczego warto wybrać naszą drukarnię?
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Zapewniamy kompleksową obsługę druku dla firm i klientów
              indywidualnych. Łączymy doświadczenie, nowoczesne technologie
              oraz terminowość realizacji.
            </p>

            <div className="flex gap-6">
              <div>
                <p className="text-3xl font-bold text-blue-600">5+</p>
                <p className="text-gray-500 text-sm">
                  lat doświadczenia
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-blue-600">1 000+</p>
                <p className="text-gray-500 text-sm">
                  zrealizowanych projektów
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="h-[420px] bg-gray-100 flex items-center justify-center text-gray-400">
                <img src="/landing1.jpg"/>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-xl -z-10"></div>
          </div>
        </div>

        {/* Bottom features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

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
      </div></div>
    </section>
  );
}

function Feature({ title, text }:{title:string, text:string}) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300">
      <div className="mb-5 h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold">
        {/* ICON PLACEHOLDER */}
        ✓
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}