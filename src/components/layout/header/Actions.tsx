"use client";

import Link from "next/link";
import {
  ShoppingCart,
  User,
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

interface ActionsProps {
  role?: "public" | "user" | "admin";
}

export function Actions({ role = "public" }: ActionsProps) {
  return (
    <div className="flex items-center">
      <Input type="search" placeholder="Tìm kiếm..." />
      <ThemeToggle />

      <Link href="/giohang">
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </Link>

      {role === "public" ? (
        <Link href="/login">
          <Button variant="default">Đăng nhập</Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <User />
              Long
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <UserIcon />
              Hồ sơ
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon />
              Thanh toán
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Cài đặt
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
