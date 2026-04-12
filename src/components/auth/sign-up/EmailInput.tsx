import { Mail } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
export default function EmailInput() {
  return <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

      <Input
        placeholder="Nhập Email"
        className="pl-10 h-11 border border-border"
      />
    </div>
  </Field>
}
