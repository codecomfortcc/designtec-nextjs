'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Separator } from "../ui/separator";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import logo from "../../assets/newlogofinal.png";
import Link from 'next/link'
import { cn } from "@/lib/utils";
import { useState } from "react";
import { EyeIcon } from "lucide-react";
import background from "../../assets/background.svg";
import { useToast } from "../ui/use-toast";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, {
      message: "password must be at least 6 characters",
    })
    .regex(/[!@#$%^&*()]/, {
      message: "password must contain at least one special character",
    })
    .regex(/[A-Z]/, {
      message: "password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, {
      message: "password must contain at least one number",
    }),
});

const LoginForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const {toast} = useToast();
 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handlePasswordToggle = () => {
    setIsActive((prev) => !prev);
  };
  const onSubmit=async(values: z.infer<typeof formSchema>) =>{
    setIsDisabled(true);
  }
  return (
    <div className="flex min-h-screen">
      <div className="sm:w-[330px] w-full px-2 m-3 flex flex-col justify-center ">
        <Link href="/">
          <div className="flex opacity-65 hover:opacity-100 ease-out duration-200 transition-opacity cursor-pointer h-10 items-center  justify-center p-3 gap-4 mb-10 ">
            <div className="w-10 ">
              <Image src={logo} alt="logo" />
            </div>
            <div className="">
              <h2 className="text-lg font-medium">DesignTec</h2>
              <p className="text-sm text-primary">Pure water, Pure life</p>
            </div>
          </div>
        </Link>
        <div className="mb-4 mt-3 mx-3 space-y-3">
          <h1 className="text-xl font-semibold">
            <span className="text-primary">Welcome Back</span> to DesignTec 👋
          </h1>
          <p className="font-thin text-sm">
            {" "}
            Please Login to <span className="text-primary">DesignTec</span>
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8 p-4 wbg-white rounded-md"
          >
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
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      type={!isActive ? "password" : "text"}
                      className={cn(
                        "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                        form.formState.errors.password &&
                          "border-red-500 focus:border-red-500 "
                      )}
                    />
                  </FormControl>
                  <Button
                    type="button"
             
                    onClick={handlePasswordToggle}
                    className={cn(
                      "absolute right-3  text-gray-400  top-[2px] active:top-0 active:right-[10px] transition-all duration-100  active:text-sky-700 active:w-6 active:h-6 w-5 h-5 p-0 px-0 py-0 inline-block",
                      isActive && "text-primary",
                      !form.formState.dirtyFields.password && "hidden"
                    )}
                  >
                    <EyeIcon className="w-full h-full" />
                  </Button>
                  <FormLabel
                    className={cn(
                      "absolute text-sm text-gray-500  duration-300 transform -translate-y-7 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[18px] peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-7 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
                      form.formState.errors.password &&
                        "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:-translate-y-[32px]"
                    )}
                  >
                    Password
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isDisabled}>Submit</Button>
          </form>
        </Form>
        <Link href="/signup" className="text-center text-primary">
          Don't have an account Yet?
        </Link>
        <div className="flex w-full items-center">
          <Separator className="w-[calc(50%_-_20px)] px-2" />
          <span className="bg-white border  p-1 rounded-full">OR</span>
          <Separator className="w-[calc(50%_-_20px)] px-2" />
        </div>
        <div>
          <Button className="w-full px-4 py-2  flex gap-2 bg-white hover:bg-gray-100 rounded-sm text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google logo"
            />
            <span>Login with Google</span>
          </Button>
        </div>
      </div>

      <div className="grow max-sm:hidden relative">
        <div className="object-cover w-full h-full absolute  bg-primary/20 ">
          <img
            src={background}
            alt=""
            className="object-cover w-full h-full aspect-video"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
