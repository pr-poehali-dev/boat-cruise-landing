import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "О нас", href: "#about" },
  { label: "Маршруты", href: "#routes" },
  { label: "Галерея", href: "#gallery" },
  { label: "Цены", href: "#prices" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

interface ContactsFooterProps {
  scrollTo: (href: string) => void;
}

export default function ContactsFooter({ scrollTo }: ContactsFooterProps) {
  return (
    <>
      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sea-500 text-sm tracking-[0.25em] uppercase font-medium mb-4">Контакты</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-800">
              Как нас найти
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "MapPin", label: "Адрес", value: 'г. Балаклава, катер "Брат"' },
              { icon: "Phone", label: "Телефон", value: "+7 (978) 640-94-93 Евгений" },
              { icon: "Clock", label: "Часы работы", value: "Ежедневно 8:00 – 20:00" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-sea-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={24} className="text-sea-600" fallback="Info" />
                </div>
                <div className="font-medium text-slate-800 mb-1">{item.label}</div>
                <div className="text-slate-500">{item.value}</div>
              </div>
            ))}
          </div>

          <a
            href="https://2gis.ru/crimea/search/Балаклава%20причал?m=33.599937%2C44.501206%2F17.63"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl overflow-hidden h-64 bg-sea-100 flex items-center justify-center group hover:bg-sea-200 transition-colors cursor-pointer block"
          >
            <div className="text-center text-sea-500">
              <Icon name="MapPin" size={40} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-sea-700">г. Балаклава, причал</p>
              <p className="text-sm mt-1 text-sea-500">Открыть на карте 2ГИС →</p>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sea-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-cormorant text-2xl font-bold mb-1">АкваТур</div>
            <div className="text-sea-300 text-sm">Морские прогулки на катере</div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sea-300 hover:text-white text-sm transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="text-sea-400 text-sm">© 2024 АкваТур. Все права защищены.</div>
        </div>
      </footer>
    </>
  );
}
