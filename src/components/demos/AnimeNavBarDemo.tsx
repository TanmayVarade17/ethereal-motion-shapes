
import React from "react";
import { Home, FileText, CreditCard, Info } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";
import { Button } from "@/components/ui/moving-border";

const items = [
  {
    name: "Home",
    url: "#",
    icon: Home,
  },
  {
    name: "Services",
    url: "#",
    icon: FileText,
  },
  {
    name: "Pricing",
    url: "#",
    icon: CreditCard,
  },
  {
    name: "About",
    url: "#",
    icon: Info,
  },
];

export function AnimeNavBarDemo() {
  return (
    <>
      <AnimeNavBar items={items} defaultActive="Home" />
      <div className="fixed top-5 right-10 z-[9999] pt-6">
        <Button
          borderRadius="1.75rem"
          className="bg-white/10 dark:bg-slate-900/10 text-white border-white/20 hover:bg-white/20 transition-colors"
          containerClassName="w-auto h-10"
        >
          Contact Us
        </Button>
      </div>
    </>
  );
}
