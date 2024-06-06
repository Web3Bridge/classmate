"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z.string(), // Added lastname field with no minimum length requirement
});

function ProfileForm({ control }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      lastname: "", // Ensure default value for lastname
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (Object.keys(errors).length > 0) {
      console.error("Validation failed:", errors);
      // Handle validation failure, e.g., show error messages
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        control={control}
        name="firstname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First name</FormLabel>
            <FormControl>
              <Controller
                control={control}
                name="username"
                render={({ field }) => (
                  <Input placeholder="shadcn" {...field} />
                )}
              />
            </FormControl>

            <FormLabel>Last name</FormLabel>
            <FormControl>
              <Controller
                control={control}
                name="lastname"
                render={({ field }) => (
                  <Input placeholder="shadcn" {...field} />
                )}
              />
            </FormControl>
            {errors.username && (
              <FormMessage>{errors.username.message}</FormMessage>
            )}
            <FormDescription></FormDescription>
          </FormItem>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default function Settings() {
  const form = useForm();

  return (
    <section className="mx-auto flex flex-wrap justify-center items-center bg-gray-100 p-8">
      <div className="md:w-[60%]">
        <h1 className="font-bold">Assessments</h1>
        <div className="bg-gray-200 border-b border-black shadow-sm rounded-lg my-4 flex justify-center p-8">
          <FormProvider {...form}>
            <ProfileForm control={form.control} /> {/* Pass control prop */}
          </FormProvider>
        </div>
      </div>
    </section>
  );
}
