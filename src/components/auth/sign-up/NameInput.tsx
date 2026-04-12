import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function NameInput() {
  return (
    <FieldGroup className="grid w-full grid-cols-2 gap-4">
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="Jordan" className=" h-11 border border-border" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Lee" className=" h-11 border border-border" />
      </Field>
    </FieldGroup>
  )
}

