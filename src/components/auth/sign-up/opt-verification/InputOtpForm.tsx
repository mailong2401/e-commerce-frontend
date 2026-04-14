"use client"

import * as React from "react"
import { RefreshCwIcon } from "lucide-react"
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

export function InputOTPForm() {
  const [value, setValue] = React.useState("")
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader className="gap-5">
        <CardTitle className="text-center text-2xl font-bold">Xác minh OTP</CardTitle>
        <CardDescription>
          Chúng tôi đã gửi mã xác thực đến email của bạn. Vui lòng nhập mã để tiếp tục.
          <span className="font-medium">m@example.com</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="otp-verification">
              Mã xác thực
            </FieldLabel>
            <Button variant="outline" size="xs">
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
          <Button type="submit" className="w-full">
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

