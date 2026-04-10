// components/layout/header/Navigation.tsx
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ListItem from "./ListItem";
import { NavItem } from "@/config/navigation";

interface NavigationProps {
  navItems: NavItem[];
}

export function Navigation({ navItems }: NavigationProps) {
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.href ? (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link
                  href={item.href}
                  className={cn(
                    isActive(item.href) && "bg-accent text-accent-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger>
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent style={{ minWidth: '400px', width: 'auto' }}>
                  <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 p-4">
                    {item.children?.map((child) => (
                      <ListItem
                        key={child.href}
                        title={child.title || child.label}
                        href={child.href!}
                      >
                        {child.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
