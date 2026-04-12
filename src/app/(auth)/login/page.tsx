import LoginForm from '@/components/auth/login/LoginForm'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="relative flex flex-col w-1/3 justify-center items-center bg-background/60 backdrop-blur-xl">
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition border"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </Link>

        <LoginForm />
      </div>
      <div className="w-2/3 bg-foreground/90 "></div>
    </div>
  )
}
