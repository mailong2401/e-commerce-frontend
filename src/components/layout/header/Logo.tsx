// components/layout/header/Logo.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <div className='flex  gap-3 items-center '>
        <div className='  p-2 '>
          <Image
            src="/images/logo/logo_dark.png"
            alt="LongTri Official"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div>
          <h1 className='text-foreground font-bold text-2xl tracking-tight'>LongTri Official</h1>
          <p className='text-foreground/70 text-xs'>Mua sắm cao cấp</p>
        </div>
      </div>
    );
  }
  return (
    <div className='flex  gap-3 items-center '>
      <div className='  p-2 '>
        <Image
          src={theme === "light" ? "/images/logo/logo.png" : "/images/logo/logo_dark.png"}
          alt="LongTri Official"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>
      <div>
        <h1 className='text-foreground font-bold text-2xl tracking-tight'>LongTri Official</h1>
        <p className='text-foreground/70 text-xs'>Mua sắm cao cấp</p>
      </div>
    </div>
  );
}
