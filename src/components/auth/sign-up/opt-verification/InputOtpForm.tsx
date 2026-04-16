"use client"

import * as React from "react"
import { RefreshCwIcon } from "lucide-react"
import { useRegisterStore } from "@/store/register.store";
import { authApi } from "@/api/auth/auth.api";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRouter } from "next/navigation";

export function InputOTPForm() {
  const [value, setValue] = React.useState("")
  const router = useRouter()
  const registerData = useRegisterStore((state) => state.data)



  const handleResendOtp = async () => {
    try {
      if (!registerData?.email || !registerData?.username) {
        alert("Thiếu email hoặc username")
        return
      }

      const res = await authApi.sendOtp(
        registerData.email,
        registerData.username
      )

      if (res.status !== 200) {
        throw new Error("Gửi OTP thất bại")
      }

      alert("Đã gửi lại OTP")
    } catch (err) {
      console.error(err)
    }
  }

  const handleVerifyOtp = async () => {
    try {
      if (!registerData) {
        alert("Thiếu thông tin đăng ký")
        return
      }

      if (!value || value.length !== 6) {
        alert("OTP không hợp lệ")
        return
      }

      const res = await authApi.register(
        registerData.lastName,
        registerData.firstName,
        registerData.username,
        registerData.email,
        registerData.password,
        registerData.phone,
        value
      )

      alert("Đăng ký thành công")
      router.push("/login")

    } catch (err: any) {
      console.error(err)

      // axios error
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Xác thực thất bại"

      alert(message)
    }
  }


  return (
    <Card className="mx-auto max-w-md">
      <CardHeader className="gap-5">
        <CardTitle className="text-center text-2xl font-bold">Xác minh OTP</CardTitle>
        <CardDescription>
          Chúng tôi đã gửi mã xác thực đến email{" "}
          <span className="font-medium ">
            {registerData?.email || "chưa có email"}
          </span>
          {". "}Vui lòng nhập mã để tiếp tục.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="otp-verification">
              Mã xác thực
            </FieldLabel>
            <Button variant="outline" size="xs" onClick={handleResendOtp}>
              <RefreshCwIcon />
              Gửi lại
            </Button>
          </div>
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-13 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <FieldDescription>
            <a href="#">Tôi không còn truy cập được vào địa chỉ email này nữa.</a>
          </FieldDescription>
        </Field>
      </CardContent>
      <CardFooter>
        <Field>
          <Button type="button" onClick={handleVerifyOtp} className="w-full">
            Xác minh
          </Button>
          <div className="text-sm text-muted-foreground">
            Bạn gặp sự cố khi đăng nhập?{" "}
            <a
              href="#"
              className="underline underline-offset-4 transition-colors hover:text-primary"
            >
              Liên hệ hỗ trợ
            </a>
          </div>
        </Field>
      </CardFooter>
    </Card>
  )
}

