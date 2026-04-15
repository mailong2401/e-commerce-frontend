import { User, CircleCheck, Info } from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"

interface Props {
  username: string
  usernameStatus: "idle" | "checking" | "available" | "taken" | "invalid";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function UsernameInput({
  username,
  onChange,
  usernameStatus
}: Props) {
  return (
    <Field>
      <FieldLabel>Tên tài khoản</FieldLabel>

      <div className="flex flex-col gap-1">

        {/* INPUT + ICON */}
        <div className="flex items-center gap-2">

          <div className="relative flex-1">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <Input
              name="username"
              placeholder="Nhập tên tài khoản"
              className="pl-10 h-11 border border-border"
              value={username}
              onChange={onChange}
            />
          </div>

          {/* STATUS ICON */}
          {usernameStatus === "idle" && <div className="w-6 h-6" />
          }

          {usernameStatus === "checking" && (
            <Spinner className="w-5 h-5 text-gray-500" />
          )}

          {usernameStatus === "available" && (
            <CircleCheck className="w-6 h-6 text-green-500" />
          )}

          {usernameStatus === "taken" && (
            <Info className="w-6 h-6 text-red-500" />
          )}

          {usernameStatus === "invalid" && (
            <Info className="w-6 h-6 text-yellow-500" />
          )}
        </div>

        {/* DESCRIPTION */}
        {usernameStatus === "idle" && null}

        {usernameStatus === "checking" && (
          <p className="text-xs text-gray-500">
            Đang kiểm tra username...
          </p>
        )}

        {usernameStatus === "available" && (
          <p className="text-xs text-green-500">
            Username hợp lệ
          </p>
        )}

        {usernameStatus === "taken" && (
          <p className="text-xs text-red-500">
            Username đã tồn tại
          </p>
        )}

        {usernameStatus === "invalid" && (
          <p className="text-xs text-yellow-500">
            Username không đúng định dạng
          </p>
        )}

      </div>
    </Field>
  )
}
