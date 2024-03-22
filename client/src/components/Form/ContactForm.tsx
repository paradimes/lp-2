import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "./contactFormSchema";

import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Errors object
  //   console.log("formErrors: ", JSON.stringify(form.formState.errors, null, 4));
  //   console.log("-----------------------------------------");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(_values: z.infer<typeof contactFormSchema>) {
    // console.log(_values);
    toast({
      title: "Message Received",
      description: "We will be in touch with you soon!",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row gap-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-[50vw]">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Sam" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-[50vw]">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="sam.altman@openai.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Design Consultation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message </FormLabel>
              <FormControl>
                <Input
                  placeholder="Hello, I wanted to speak to the team about..."
                  {...field}
                  className="h-32"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          title="Submit"
          type="submit"
          className="flex bg-black bg-opacity-60 p-[2px] rounded-full"
        >
          <div className="bg-black hover:bg-opacity-60 px-6 py-[3px] rounded-full text-white ">
            Submit
          </div>
        </button>
      </form>
    </Form>
  );
}
