// config/navigation/public.ts
import { NavItem } from "./index";

export const publicNavItems: NavItem[] = [
  { label: "Trang chủ", href: "/home" },
  {
    label: "Danh mục",
    children: [
      {
        label: "Đồ điện tử",
        href: "/electronics",
        title: "Đồ điện tử",
        description: "Điện thoại, laptop, máy tính bảng và phụ kiện"
      },
      {
        label: "Đồ gia dụng",
        href: "/home-appliances",
        title: "Đồ gia dụng",
        description: "Máy giặt, tủ lạnh, điều hòa và thiết bị nhà bếp"
      },
      {
        label: "Thời trang",
        href: "/fashion",
        title: "Thời trang",
        description: "Quần áo, giày dép, túi xách thời trang"
      },
      {
        label: "Sách",
        href: "/books",
        title: "Sách",
        description: "Sách giáo khoa, tiểu thuyết, sách kỹ năng"
      },
      {
        label: "Mỹ phẩm",
        href: "/cosmetics",
        title: "Mỹ phẩm",
        description: "Chăm sóc da, trang điểm, nước hoa"
      },
      {
        label: "Thể thao",
        href: "/sports",
        title: "Thể thao",
        description: "Dụng cụ thể thao, máy tập, phụ kiện"
      },
    ],
  },
  { label: "Giỏ hàng", href: "/cart" },
  { label: "Khuyến mãi", href: "/sale" },
  { label: "Liên hệ", href: "/contact" },
];
