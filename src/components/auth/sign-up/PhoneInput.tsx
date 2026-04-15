import { Phone, CircleCheck, Info } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

interface Props {
  phone: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phoneStatus: "idle" | "checking" | "invalid" | "valid";
}

export default function PhoneInput({ phone, onChange, phoneStatus }: Props) {
  return <Field>
    <FieldLabel htmlFor="number-phone">Số điện thoại</FieldLabel>

    <div className="flex flex-col gap-1">

      {/* INPUT + ICON ROW */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Nhập số điện thoại"
            name="phone"
            className="pl-10 h-11 border border-border"
            value={phone}
            onChange={onChange}
          />
        </div>
        {/* ICON THEO STATE */}
        {phoneStatus === "idle" && <div className="w-6 h-6" />}

        {phoneStatus === "checking" && (
          <Spinner className="w-6 h-6 text-gray-500" />
        )}

        {phoneStatus === "valid" && (
          <CircleCheck className="w-6 h-6 text-green-500" />
        )}

        {phoneStatus === "invalid" && (
          <Info className="w-6 h-6 text-yellow-500" />
        )}
      </div>
    </div>
  </Field>
}
