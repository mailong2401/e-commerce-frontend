import { Phone } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
export default function PhoneInput() {
  return <Field>
    <FieldLabel htmlFor="number-phone">Số điện thoại</FieldLabel>
    <div className="relative">
      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

      <Input
        placeholder="Nhập số điện thoại"
        className="pl-10 h-11 border border-border"
      />
    </div>
  </Field>
}
