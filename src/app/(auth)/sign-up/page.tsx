//src/app/(auth)/sign-up/page.tsx
import HeroSection from "@/components/auth/HeroSection"
import RegisterForm from "@/components/auth/sign-up/SignUpForm"
import { ChevronLeftIcon } from 'lucide-react'
import Link from "next/link"
export default function SignUpPage() {
  return <div className="flex h-screen">

    <HeroSection />
    <div className="relative flex flex-col w-2/5 justify-center items-center bg-background/60 backdrop-blur-xl">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition border"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </Link>

      <RegisterForm />
    </div>
  </div>
}
