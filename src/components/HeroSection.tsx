import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/5e8d9513-fc0e-40c7-a8ae-a413018af610.png";
const BOAT_IMAGE = "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/fe5e4b73-7078-4341-87be-e153d46d32d0.png";

const ROUTES = [
  {
    icon: "Sunset",
    title: "Закатная прогулка",
    desc: "Плывите навстречу золотому закату. Романтический маршрут вдоль побережья с бокалом вина.",
    duration: "2 часа",
    km: "15 км",
  },
  {
    icon: "Island",
    title: "Острова и бухты",
    desc: "Исследуйте скрытые бухты и живописные острова. Купание в кристально чистой воде.",
    duration: "4 часа",
    km: "35 км",
  },
  {
    icon: "Waves",
    title: "Рыбалка в море",
    desc: "Выход на рыбные места с опытным капитаном. Снасти и наживка в комплекте.",
    duration: "6 часов",
    km: "40 км",
  },
  {
    icon: "Anchor",
    title: "День на катере",
    desc: "Полноценный день на воде: острова, пляжи, обед на борту. Незабываемые впечатления.",
    duration: "8 часов",
    km: "60 км",
  },
];

const GALLERY_IMAGES = [
  { src: BOAT_IMAGE, caption: 'Катер "Брат"' },
  { src: "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/5bb3fb11-48b7-44db-93f4-c0ee651a66eb.jpg", caption: "Подготовка к сезону" },
  { src: "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/3251939e-7dab-453f-b190-6c123411ecf4.png", caption: "Логотип катера" },
  { src: "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/85e66144-ba27-4107-8d33-864e5ded58ec.png", caption: "Борт катера" },
  { src: "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/ca4b34c3-e78d-4bcd-a85d-ed6a86ca34ad.png", caption: "Рубка и приборы" },
];

interface HeroSectionProps {
  scrollTo: (href: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Морская прогулка" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-sea-900/60 via-sea-800/40 to-sea-900/70" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p
            className="text-white font-golos text-base md:text-lg tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in drop-shadow-md"
            style={{ animationDelay: "0.3s" }}
          >
            ☀ Морские прогулки
          </p>
          <h1
            className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Открой море
            <br />
            <em className="font-light italic">с нами</em>
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            Незабываемые прогулки на катере вдоль живописного побережья. Закаты, острова, кристальные бухты.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: "1.1s" }}
          >
            <button
              onClick={() => scrollTo("#booking")}
              className="bg-sea-500 hover:bg-sea-400 text-white px-8 py-4 rounded-full text-base font-medium transition-all hover:shadow-xl hover:shadow-sea-500/30 hover:-translate-y-0.5"
            >
              Забронировать прогулку
            </button>
            <button
              onClick={() => scrollTo("#routes")}
              className="border border-white/50 hover:border-white text-white px-8 py-4 rounded-full text-base font-medium transition-all hover:bg-white/10"
            >
              Смотреть маршруты
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollTo("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <Icon name="ChevronDown" size={28} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sea-500 text-sm tracking-[0.25em] uppercase font-medium mb-4">О нас</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-800 leading-tight mb-6">
                Мы влюблены
                <br />
                <em className="italic text-sea-600">в море</em>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Более 10 лет мы организуем морские прогулки для тех, кто хочет увидеть побережье с воды. Наша команда — опытные капитаны и любящие своё дело люди.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Каждый выход в море — это особенный опыт. Мы подбираем маршруты под ваши желания, заботимся о безопасности и комфорте на борту.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[["10+", "лет опыта"], ["2000+", "довольных гостей"], ["15", "маршрутов"]].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <div className="font-cormorant text-4xl font-bold text-sea-600 leading-none">{num}</div>
                    <div className="text-slate-500 text-sm mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-sea-200">
                <img src={HERO_IMAGE} alt="Наш катер" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sea-500 rounded-2xl p-5 text-white shadow-xl">
                <div className="font-cormorant text-3xl font-bold">⚓</div>
                <div className="text-sm font-medium mt-1">Сертифицированные<br />капитаны</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="py-24 px-6 bg-sea-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sea-500 text-sm tracking-[0.25em] uppercase font-medium mb-4">Маршруты</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-800">
              Куда поплывём?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROUTES.map((route) => (
              <div
                key={route.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-sea-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-sea-500 transition-colors">
                  <Icon name={route.icon} size={22} className="text-sea-600 group-hover:text-white transition-colors" fallback="Anchor" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-slate-800 mb-2">{route.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{route.desc}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={13} /> {route.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Navigation" size={13} /> {route.km}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sea-500 text-sm tracking-[0.25em] uppercase font-medium mb-4">Галерея</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-800">
              Моменты в море
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${i === 0 ? "md:row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${i === 0 ? "h-64 md:h-full" : "h-48 md:h-52"}`}
                />
                <div className="absolute inset-0 bg-sea-900/0 group-hover:bg-sea-900/40 transition-all duration-300 flex items-end">
                  <p className="text-white font-medium px-4 pb-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
