import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface Props {
  firstName: string;
  lastName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function NameInput({ firstName, lastName, onChange }: Props) {
  return (
    <FieldGroup className="grid w-full grid-cols-2 gap-4 pr-8">
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input
          id="first-name"
          name="firstName"
          placeholder="Long"
          className=" h-11 border border-border"
          value={firstName}
          onChange={onChange}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input
          id="last-name"
          name="lastName"
          placeholder="Nguyễn"
          className=" h-11 border border-border"
          onChange={onChange}
          value={lastName}
        />
      </Field>
    </FieldGroup>
  )
}

