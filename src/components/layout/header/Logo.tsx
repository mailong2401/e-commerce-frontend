// components/layout/header/Logo.tsx
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <h1 className="text-xl font-bold  from-primary to-primary/60  ">
        TriLong Official
      </h1>
    </Link>
  );
}
