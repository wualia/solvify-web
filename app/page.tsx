import HeroHome from "@/components/home/hero";
import HomeServices from "@/components/home/services";
import HomeWhy from "@/components/home/why";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <HeroHome />
      <HomeServices />
      <HomeWhy />
    </div>
  );
}
