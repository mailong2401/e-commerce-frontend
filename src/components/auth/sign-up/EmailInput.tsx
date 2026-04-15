import { Mail, CircleCheck, Info } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

interface Props {
  email: string;
  emailStatus: "idle" | "checking" | "available" | "taken" | "invalid";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailInput({ email, onChange, emailStatus }: Props) {
  return (
    <Field>
      <FieldLabel>Email</FieldLabel>

      <div className="flex flex-col gap-1">

        {/* INPUT + ICON ROW */}
        <div className="flex items-center gap-2">

          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <Input
              placeholder="Nhập Email"
              className="pl-10 h-11 border border-border"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          {/* ICON THEO STATE */}
          {emailStatus === "idle" && <div className="w-6 h-6" />}

          {emailStatus === "checking" && (
            <Spinner className="w-6 h-6 text-gray-500" />
          )}

          {emailStatus === "available" && (
            <CircleCheck className="w-6 h-6 text-green-500" />
          )}

          {emailStatus === "taken" && (
            <Info className="w-6 h-6 text-red-500" />
          )}

          {emailStatus === "invalid" && (
            <Info className="w-6 h-6 text-yellow-500" />
          )}
        </div>

        {/* DESCRIPTION TEXT (RIÊNG TỪNG STATE) */}
        {emailStatus === "idle" && null}

        {emailStatus === "checking" && (
          <p className="text-xs text-gray-500">
            Đang kiểm tra email...
          </p>
        )}

        {emailStatus === "available" && (
          <p className="text-xs text-green-500">
            Email hợp lệ
          </p>
        )}

        {emailStatus === "taken" && (
          <p className="text-xs text-red-500">
            Email đã tồn tại
          </p>
        )}

        {emailStatus === "invalid" && (
          <p className="text-xs text-yellow-500">
            Email không đúng định dạng
          </p>
        )}

      </div>
    </Field>
  )
}
