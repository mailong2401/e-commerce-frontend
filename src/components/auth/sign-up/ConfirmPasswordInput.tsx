import { Lock, CircleCheck, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPasswordMatch: boolean | null

}

export default function ConfirmPasswordInput({ value, onChange, isPasswordMatch }: Props) {
  return (
    <Field>
      <FieldLabel>Xác nhận mật khẩu</FieldLabel>

      <div className="flex flex-col gap-1.5">

        <div className="flex items-center gap-2">

          <div className="relative flex-1">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={value}
              onChange={onChange}
              className="pl-10 pr-10 h-11 border border-border"
            />
          </div>
          <div className="flex justify-center items-center h-11"> {/* Fix: thêm h-11 để cùng chiều cao với input */}
            {isPasswordMatch !== null ? (
              isPasswordMatch ? (
                <CircleCheck className="w-6 h-6 text-green-500" />
              ) : (
                <Info className="w-6 h-6 text-red-500" />
              )
            ) : <div className="w-6 h-6" />}
          </div>

        </div>
      </div>
    </Field>
  )
}
