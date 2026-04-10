// config/navigation/index.ts - Sửa lại
import { publicNavItems } from "./public";
import { adminNavItems } from "./admin";

// Định nghĩa type cho nav items
export interface NavItem {
  label: string;
  href?: string;
  title?: string;
  description?: string;
  children?: NavItem[];
}

// Sửa hàm getNavItems để hỗ trợ đúng type
export const getNavItems = (role: "public" | "admin" | 'user'): NavItem[] => {
  switch (role) {
    case "admin":
      return adminNavItems;
    default:
      return publicNavItems;
  }
};
