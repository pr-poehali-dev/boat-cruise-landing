import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/5e8d9513-fc0e-40c7-a8ae-a413018af610.png";

const NAV_ITEMS = [
  { label: "О нас", href: "#about" },
  { label: "Маршруты", href: "#routes" },
  { label: "Галерея", href: "#gallery" },
  { label: "Цены", href: "#prices" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

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

const BOAT_IMAGE = "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/fe5e4b73-7078-4341-87be-e153d46d32d0.png";

const GALLERY_IMAGES = [
  { src: BOAT_IMAGE, caption: 'Катер "Брат"' },
  { src: "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/5bb3fb11-48b7-44db-93f4-c0ee651a66eb.jpg", caption: "Подготовка к сезону" },
  { src: "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/3251939e-7dab-453f-b190-6c123411ecf4.png", caption: "Логотип катера" },
  { src: "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/85e66144-ba27-4107-8d33-864e5ded58ec.png", caption: "Борт катера" },
  { src: "https://cdn.poehali.dev/projects/757515da-821f-4e38-bf04-e525364bd9ab/bucket/ca4b34c3-e78d-4bcd-a85d-ed6a86ca34ad.png", caption: "Рубка и приборы" },
];

const PRICES = [
  {
    name: "Прогулка",
    price: "5 000",
    duration: "2 часа",
    features: ["До 6 человек", "Напитки включены", "Опытный капитан", "Маршрут на выбор"],
    highlight: false,
  },
  {
    name: "Полдня",
    price: "9 000",
    duration: "4 часа",
    features: ["До 8 человек", "Напитки и закуски", "Купание в бухтах", "Фото на борту"],
    highlight: true,
  },
  {
    name: "Весь день",
    price: "16 000",
    duration: "8 часов",
    features: ["До 10 человек", "Обед на борту", "Острова и пляжи", "Рыбалка по желанию"],
    highlight: false,
  },
];

const REVIEWS = [
  {
    name: "Анна К.",
    rating: 5,
    text: "Брали катер на день рождения — это было незабываемо! Капитан очень внимательный, маршрут подобрали под нас.",
    date: "Июль 2024",
  },
  {
    name: "Дмитрий П.",
    rating: 5,
    text: "Отличная компания и прекрасный сервис. Были на закатной прогулке — виды просто волшебные. Обязательно вернёмся!",
    date: "Август 2024",
  },
  {
    name: "Семья Соколовых",
    rating: 5,
    text: "Ездили с детьми. Всё безопасно, капитан рассказывал истории о море. Дети в восторге, нашли новую любимую традицию.",
    date: "Сентябрь 2024",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", comment: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-golos text-slate-800 bg-white overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className={`font-cormorant text-2xl font-bold tracking-wide transition-colors ${
              scrolled ? "text-sea-700" : "text-white"
            }`}
          >
            АкваТур
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-sea-500 ${
                    scrolled ? "text-slate-700" : "text-white/90"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo("#booking")}
            className="hidden md:block bg-sea-500 hover:bg-sea-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-sea-200"
          >
            Забронировать
          </button>

          <button
            className={`md:hidden transition-colors ${scrolled ? "text-slate-700" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-slate-700 font-medium py-1"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#booking")}
              className="mt-2 bg-sea-500 text-white py-3 rounded-full font-medium"
            >
              Забронировать
            </button>
          </div>
        )}
      </nav>

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

      {/* PRICES */}
      <section id="prices" className="py-24 px-6 bg-gradient-to-b from-sea-600 to-sea-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sea-200 text-sm tracking-[0.25em] uppercase font-medium mb-4">Цены</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white">
              Выберите программу
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRICES.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                  plan.highlight
                    ? "bg-white text-slate-800 shadow-2xl shadow-sea-900/30 scale-105"
                    : "bg-white/10 text-white border border-white/20"
                }`}
              >
                {plan.highlight && (
                  <div className="text-xs font-medium text-sea-600 bg-sea-100 rounded-full px-3 py-1 inline-block mb-4">
                    Популярный выбор
                  </div>
                )}
                <h3 className={`font-cormorant text-2xl font-semibold mb-1 ${plan.highlight ? "text-slate-800" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.highlight ? "text-slate-500" : "text-white/60"}`}>{plan.duration}</p>
                <div className="mb-6">
                  <span className={`font-cormorant text-5xl font-bold ${plan.highlight ? "text-sea-600" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.highlight ? "text-slate-500" : "text-white/60"}`}>₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className={plan.highlight ? "text-sea-500" : "text-sea-300"}
                      />
                      <span className={plan.highlight ? "text-slate-600" : "text-white/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3 rounded-full font-medium text-sm transition-all ${
                    plan.highlight
                      ? "bg-sea-500 hover:bg-sea-600 text-white shadow-lg hover:shadow-sea-300"
                      : "border border-white/40 hover:bg-white/15 text-white"
                  }`}
                >
                  Забронировать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sea-500 text-sm tracking-[0.25em] uppercase font-medium mb-4">Отзывы</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-800">
              Что говорят гости
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="bg-sea-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="flex text-sand-400 mb-4 gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">«{review.text}»</p>
                <div className="flex items-center justify-between">
                  <div className="font-medium text-slate-800">{review.name}</div>
                  <div className="text-sm text-slate-400">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sea-500 text-sm tracking-[0.25em] uppercase font-medium mb-4">Бронирование</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-slate-800">
              Выйдем в море вместе
            </h2>
            <p className="text-slate-500 mt-4">Оставьте заявку — мы свяжемся в течение часа</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sea-300 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sea-300 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Дата прогулки</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sea-300 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Количество гостей</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sea-300 transition bg-white"
                >
                  <option value="">Выберите...</option>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? "человек" : n < 5 ? "человека" : "человек"}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Пожелания</label>
              <textarea
                placeholder="Напишите, какой маршрут вас интересует, или любые пожелания..."
                rows={3}
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sea-300 transition resize-none"
              />
            </div>
            <button className="w-full bg-sea-500 hover:bg-sea-600 text-white py-4 rounded-full font-medium text-base transition-all hover:shadow-lg hover:shadow-sea-200 hover:-translate-y-0.5">
              Отправить заявку
            </button>
          </div>
        </div>
      </section>

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
    </div>
  );
}