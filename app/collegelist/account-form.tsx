"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// import { Calendar } from "@/registry/new-york/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

const programs = [
    { label: "Arts and Humanities", value: "arts_humanities" },
    { label: "Sciences", value: "sciences" },
    { label: "Social Sciences", value: "social_sciences" },
    { label: "Business", value: "business" },
    { label: "Engineering and Technology", value: "engineering_technology" },
    { label: "Health and Medicine", value: "health_medicine" },
    { label: "Agriculture and Natural Resources", value: "agriculture_resources" },
    { label: "Mathematics and Statistics", value: "math_statistics" },
    { label: "Education", value: "education" },
    { label: "Communication and Journalism", value: "communication_journalism" },
    { label: "Architecture and Design", value: "architecture_design" },
    { label: "Law and Criminal Justice", value: "law_criminal_justice" },
    { label: "Environmental and Sustainability Studies", value: "environmental_sustainability" },
    { label: "Performing Arts", value: "performing_arts" },
    { label: "Visual Arts", value: "visual_arts" },
    { label: "Hospitality and Tourism", value: "hospitality_tourism" }
  ] as const;
  

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

const location = [
    { label: "West Coast", value: "westcoast" },
    { label: "East Coast", value: "eastcoast" },
    { label: "Midwest", value: "midwest" },
    { label: "South", value: "south" },
  ] as const

const size = [
    { label: "Liberal Arts College", value: "liberal_arts_college" },
    { label: "Community College", value: "community_college" },
    { label: "Public University", value: "public_univeristy" },
    { label: "Private University", value: "private_univeristy" },
] as const

const states = [
    { label: "Alabama", value: "alabama" },
    { label: "Alaska", value: "alaska" },
    { label: "Arizona", value: "arizona" },
    { label: "Arkansas", value: "arkansas" },
    { label: "California", value: "california" },
    { label: "Colorado", value: "colorado" },
    { label: "Connecticut", value: "connecticut" },
    { label: "Delaware", value: "delaware" },
    { label: "Florida", value: "florida" },
    { label: "Georgia", value: "georgia" },
    { label: "Hawaii", value: "hawaii" },
    { label: "Idaho", value: "idaho" },
    { label: "Illinois", value: "illinois" },
    { label: "Indiana", value: "indiana" },
    { label: "Iowa", value: "iowa" },
    { label: "Kansas", value: "kansas" },
    { label: "Kentucky", value: "kentucky" },
    { label: "Louisiana", value: "louisiana" },
    { label: "Maine", value: "maine" },
    { label: "Maryland", value: "maryland" },
    { label: "Massachusetts", value: "massachusetts" },
    { label: "Michigan", value: "michigan" },
    { label: "Minnesota", value: "minnesota" },
    { label: "Mississippi", value: "mississippi" },
    { label: "Missouri", value: "missouri" },
    { label: "Montana", value: "montana" },
    { label: "Nebraska", value: "nebraska" },
    { label: "Nevada", value: "nevada" },
    { label: "New Hampshire", value: "new_hampshire" },
    { label: "New Jersey", value: "new_jersey" },
    { label: "New Mexico", value: "new_mexico" },
    { label: "New York", value: "new_york" },
    { label: "North Carolina", value: "north_carolina" },
    { label: "North Dakota", value: "north_dakota" },
    { label: "Ohio", value: "ohio" },
    { label: "Oklahoma", value: "oklahoma" },
    { label: "Oregon", value: "oregon" },
    { label: "Pennsylvania", value: "pennsylvania" },
    { label: "Rhode Island", value: "rhode_island" },
    { label: "South Carolina", value: "south_carolina" },
    { label: "South Dakota", value: "south_dakota" },
    { label: "Tennessee", value: "tennessee" },
    { label: "Texas", value: "texas" },
    { label: "Utah", value: "utah" },
    { label: "Vermont", value: "vermont" },
    { label: "Virginia", value: "virginia" },
    { label: "Washington", value: "washington" },
    { label: "West Virginia", value: "west_virginia" },
    { label: "Wisconsin", value: "wisconsin" },
    { label: "Wyoming", value: "wyoming" },
] as const;


const accountFormSchema = z.object({
  program: z.string({
    required_error: "Please select a program.",
  }),
  size: z.string({
    required_error: "Please select a size.",
  }),
  state: z.string({
    required_error: "Please select a state.",
  }),
})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  function onSubmit(data: AccountFormValues) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program</FormLabel>
              <FormControl>
                <Input placeholder="Program" {...field} />
              </FormControl>
              <FormDescription>
                Enter the program(Field of study) you are looking for
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="program"
          render={({ field }) => (
            <FormItem className="flex flex-col overflow-auto">
              <FormLabel>Program</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[300px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? programs.find(
                            (program) => program.value === field.value
                          )?.label
                        : "Select program"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] max-h-[300px] overflow-auto p-0">
                  <Command>
                    <CommandInput placeholder="Search program..." />
                    <CommandEmpty>No program found.</CommandEmpty>
                    <CommandGroup>
                      {programs.map((program) => (
                        <CommandItem
                          value={program.label}
                          key={program.value}
                          onSelect={() => {
                            form.setValue("program", program.value)
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              "mr-2 h-4 w-4",
                              program.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {program.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                {/* This is the language that will be used in the dashboard. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem className="flex flex-col overflow-auto">
              <FormLabel>Size</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[300px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? size.find(
                            (sz) => sz.value === field.value
                          )?.label
                        : "Select size"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] max-h-[300px] overflow-auto p-0">
                  <Command>
                    <CommandInput placeholder="Search program..." />
                    <CommandEmpty>No size found.</CommandEmpty>
                    <CommandGroup>
                      {size.map((sz) => (
                        <CommandItem
                          value={sz.label}
                          key={sz.value}
                          onSelect={() => {
                            form.setValue("size", sz.value)
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              "mr-2 h-4 w-4",
                              sz.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {sz.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                {/* This is the language that will be used in the dashboard. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="flex flex-col overflow-auto">
              <FormLabel>State</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[300px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? states.find(
                            (state) => state.value === field.value
                          )?.label
                        : "Select state"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] max-h-[300px] overflow-auto p-0">
                  <Command>
                    <CommandInput placeholder="Search state..." />
                    <CommandEmpty>No state found.</CommandEmpty>
                    <CommandGroup>
                      {states.map((state) => (
                        <CommandItem
                          value={state.label}
                          key={state.value}
                          onSelect={() => {
                            form.setValue("state", state.value)
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              "mr-2 h-4 w-4",
                              state.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {state.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                {/* This is the language that will be used in the dashboard. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </form>
    </Form>
  )
}