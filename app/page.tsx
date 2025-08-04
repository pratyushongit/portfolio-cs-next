import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import { NAV_ITEMS } from "@/lib/constants";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  const navItemsWithIcons = NAV_ITEMS.map((item) => ({
    ...item,
    icon: item.icon === "FaHome" ? <FaHome /> : undefined,
  }));

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItemsWithIcons} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
