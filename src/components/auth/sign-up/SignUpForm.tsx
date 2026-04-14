"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import PasswordInput from "./PasswordInput"
import UsernameInput from "./UsernameInput"
import SocialLogin from "./SocialLogin"
import EmailInput from "./EmailInput"
import PhoneInput from "./PhoneInput"
import { NameInput } from "./NameInput"
import ConfirmPasswordInput from "./ConfirmPasswordInput"

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-xl ">
      <h1 className="text-center py-10 text-4xl font-bold">Đăng ký</h1>
      <FieldGroup className="py-6 ">
        <div className="flex flex-col gap-5 md:flex-row md:gap-20">
          <div className="flex flex-col gap-5 flex-1">
            <NameInput />
            <UsernameInput />
            <EmailInput />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <PhoneInput />
            <PasswordInput
              show={showPassword}
              toggle={() => setShowPassword(!showPassword)}
            />
            <ConfirmPasswordInput />
          </div>
        </div>


      </FieldGroup>
      <div className="flex flex-col justify-center px-30">
        <Field orientation="horizontal" className="flex gap-2 mt-6">
          <Button
            type="submit"
            variant="outline"
            className="w-1/2"
          >
            <Link href="/sign-up/otp-verification">Đăng ký</Link>
          </Button>
          <Button
            type="button"
            className="w-1/2"
            asChild
          >
            <Link href="/login">Đã có tài khoản</Link>
          </Button>
        </Field>
        <div className="flex items-center gap-4 w-full mt-6">
          <div className="flex-1 h-px bg-border"></div>
          <p className="text-sm text-muted-foreground">Hoặc</p>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <SocialLogin />

      </div>


    </div>
  )
}
