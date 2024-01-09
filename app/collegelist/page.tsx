import { AccountForm } from "./account-form"
import { Separator } from "@/components/ui/separator"
import { DisplayForm } from "./display-form"

export default function SettingsAccountPage() {
  return (
    <div className="container mx-auto max-w-4xl py-6 lg:py-10">
      <div className="mb-4">
        <h3 className="text-lg font-medium">College list</h3>
        <p className="text-sm text-muted-foreground">
          Search for colleges based on the criteria
        </p>
      </div>
      <Separator />
      <br/>
      <AccountForm />
      {/* <DisplayForm /> */}
    </div>
  )
}