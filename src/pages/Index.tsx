import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PricesReviews from "@/components/PricesReviews";
import ContactsFooter from "@/components/ContactsFooter";

export default function Index() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-golos text-slate-800 bg-white overflow-x-hidden">
      <NavBar scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <PricesReviews />
      <ContactsFooter scrollTo={scrollTo} />
    </div>
  );
}
