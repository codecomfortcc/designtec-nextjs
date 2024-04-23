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

import background from "../../assets/background.svg";
import Image from "next/image";



const LoginForm = () => {
  return (
    <div className="flex min-h-screen">
      <div>

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
