import { User } from "lucide-react"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
export default function UsernameInput({ placeholder }: { placeholder: string }) {
  return <Field>
    <div className="relative">
      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

      <Input
        placeholder="Nhập tên tài khoản"
        className="pl-10 h-11 border border-border"
      />
    </div>
  </Field>
}
