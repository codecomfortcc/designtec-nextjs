import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import {  WithinForm } from "./selectCombo";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  problem: z.enum(["leak", "pressure", "other"]),
  model: z.enum(["model1", "model2", "model3"]),
});
function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}
const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      problem: "leak",
      model: "model1",
    },
  });

  return (
    <div className="max-w-[500px]  lg:min-w-[500px] md:min-w-[400px] w-full bg-slate-50 shadow-xl p-3 py-6 rounded-lg">
      <h1 className="text-center font-bold text-3xl mb-10">Contact US</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 px-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl
                  className={cn(
                    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    form.formState.errors.email &&
                      "border-red-500 focus:border-red-500 "
                  )}
                >
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormLabel
                  className={cn(
                    "absolute text-sm text-gray-500  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[18px] peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
                    form.formState.errors.email &&
                      "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:-translate-y-[32px]"
                  )}
                >
                  Name
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl
                  className={cn(
                    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    form.formState.errors.email &&
                      "border-red-500 focus:border-red-500 "
                  )}
                >
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormLabel
                  className={cn(
                    "absolute text-sm text-gray-500  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[18px] peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
                    form.formState.errors.email &&
                      "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:-translate-y-[32px]"
                  )}
                >
                  Email
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem className="relative">
                  <WithinForm />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl
                  className={cn(
                    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    form.formState.errors.email &&
                      "border-red-500 focus:border-red-500 "
                  )}
                >
                  <Textarea placeholder="" {...field} className="resize-none" />
                </FormControl>
                <FormLabel
                  className={cn(
                    "absolute text-sm text-gray-500  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[40px] peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
                    form.formState.errors.email &&
                      "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:-translate-y-[56px]"
                  )}
                >
                  Message
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
