// components/layout/header/index.tsx
"use client";

import { getNavItems } from "@/config/navigation/index";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Actions } from "./Actions";

interface HeaderProps {
  role?: "public" | "admin" | "user";
}

export default function Header({ role = "public" }: HeaderProps) {
  const navItems = getNavItems(role);

  return (
    <div className="container mx-auto flex h-16 items-center justify-between ">
      {/* Left  */}
      <Logo />

      {/* Center */}
      <Navigation navItems={navItems} />

      {/* Right */}
      <Actions role={role} />
    </div>
  );
}
