import { Lock, Eye, EyeOff, CircleCheck, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Field, FieldLabel } from "@/components/ui/field"

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  show: boolean;
  passwordStrength: "idle" | "weak" | "medium" | "good" | "strong";
  isPasswordMatch: boolean | null
  toggle: () => void;
}

export default function PasswordInput({
  value,
  onChange,
  show,
  toggle,
  passwordStrength,
  isPasswordMatch
}: Props) {
  return (
    <Field>
      <FieldLabel>Mật khẩu</FieldLabel>

      <div className="flex gap-2 items-start">
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

              <Input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={value}
                onChange={onChange}
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
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-xl">
            <div
              className={`h-1.5 rounded-xl transition-all ${passwordStrength === "weak"
                ? "w-1/4 bg-red-500"
                : passwordStrength === "medium"
                  ? "w-2/4 bg-yellow-500"
                  : passwordStrength === "good"
                    ? "w-3/4 bg-green-500"
                    : passwordStrength === "strong"
                      ? "w-full bg-cyan-500"
                      : "w-0"
                }`}
            />
          </div>
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
    </Field>
  )
}
