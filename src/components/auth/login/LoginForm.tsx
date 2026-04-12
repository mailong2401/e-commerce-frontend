"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import PasswordInput from "./PasswordInput"
import UsernameInput from "./UsernameInput"
import { useRouter } from "next/navigation"
import SocialLogin from "./SocialLogin"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-4xl font-bold text-center mb-6 font-playwrite">
        Đăng nhập
      </h1>

      <FieldGroup className="space-y-4 py-20">
        <Field>
          <UsernameInput placeholder="Nhập tên tài khoản" />
        </Field>

        <Field>
          <PasswordInput
            show={showPassword}
            toggle={() => setShowPassword(!showPassword)}
          />
          <Link
            href="/forgot-password"
            className="text-sm text-end text-primary hover:underline hover:opacity-80 transition block"
          >
            Quên mật khẩu
          </Link>
        </Field>


        <Field orientation="horizontal" className="flex gap-2">
          <Button type="submit" className="w-1/2">
            Đăng nhập
          </Button>
          <Button variant="outline" className="w-1/2" onClick={() => router.push('/sign-up')}>
            Tạo tài khoản
          </Button>
        </Field>

      </FieldGroup>
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-px bg-border"></div>
        <p className="text-sm text-muted-foreground">Hoặc</p>
        <div className="flex-1 h-px bg-border"></div>
      </div>
      <SocialLogin />
    </div>
  )
}
