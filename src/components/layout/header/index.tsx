// components/layout/header/index.tsx
"use client";

import { getNavItems } from "@/config/navigation/index";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Actions } from "./Actions";

interface HeaderProps {
  role?: "public" | "admin";
}

export default function Header({ role = "public" }: HeaderProps) {
  const navItems = getNavItems(role);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left: Logo  */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Center: Navigation (Desktop) */}
        <div className="hidden md:block">
          <Navigation navItems={navItems} />
        </div>

        {/* Right: Actions */}
        <Actions role={role} />
      </div>
    </header>
  );
}
