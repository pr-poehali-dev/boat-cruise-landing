import { useState } from "react";
import Icon from "@/components/ui/icon";

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

export default function PricesReviews() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", comment: "" });

  return (
    <>
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
    </>
  );
}
