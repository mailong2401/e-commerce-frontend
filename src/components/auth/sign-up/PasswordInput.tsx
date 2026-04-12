import { Lock, Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"

export default function PasswordInput({
  show,
  toggle,
}: {
  show: boolean
  toggle: () => void
}) {
  return (
    <Field>
      <FieldLabel>Mật khẩu</FieldLabel>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

        <Input
          type={show ? "text" : "password"}
          placeholder="Nhập mật khẩu"
          className="pl-10 pr-10 h-11 border border-border"
        />

        <button
          type="button"
          onClick={toggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
        >
          {show ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
        </button>
      </div>
    </Field>
  )
}
