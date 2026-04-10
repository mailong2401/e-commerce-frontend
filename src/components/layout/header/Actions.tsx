// components/layout/header/Actions.tsx
"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface ActionsProps {
  role?: "public" | "admin";
}

export function Actions({ role = "public" }: ActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />

      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
      </Button>

      {role === "public" ? (
        <Link href="/login">
          <Button variant="default" size="sm">
            <User className="h-4 w-4 mr-2" />
            Đăng nhập
          </Button>
        </Link>
      ) : (
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
