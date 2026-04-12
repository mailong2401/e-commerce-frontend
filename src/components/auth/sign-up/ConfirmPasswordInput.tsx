import { Lock, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"

export default function ConfirmPasswordInput() {
  return (
    <Field>
      <FieldLabel>Xác nhận mật khẩu</FieldLabel>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

        <Input
          type="password"
          placeholder="Nhập mật khẩu"
          className="pl-10 pr-10 h-11 border border-border"
        />
      </div>
    </Field>
  )
}
