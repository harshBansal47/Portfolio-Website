"use client"
import { cn } from "@/lib/utils";
import { Contact2, Mail, Phone, Smartphone, SmartphoneCharging } from "lucide-react";
import { Poppins, Roboto } from "next/font/google";
import SideSvg from '../../public/side-svg-2.svg';
import Svg1 from '../../public/svg-1.svg';
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
import { z } from 'zod';

const formSchema = z.object({
    userName: z.string().min(2, {
        message: 'Username should be at least 2 characters'
    }).max(50),
    email: z.string().email({
        message: 'Invalid email'
    }),
    message: z.string().min(50, {
        message: 'Message should be at least 50 characters'
    }).max(1000),
})

const resolver = zodResolver(formSchema);


const headingFont = Poppins({
    weight: ["600", "800"],
    subsets: ["latin"]
});

const textFont = Roboto({
    weight: ["400"],
    subsets: ["latin"]
});

export default function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: '',
            email: '',
            message: ''
        }
    })
    function OnSubmit(values: z.infer<typeof formSchema>) {

    }
    return (
        <div id="contact" className="w-full min-h-screen h-full bg-primary/50 border-t-2 border-t-secondary/20 flex flex-col lg:flex-row lg:justify-between gap-6 overflow-hidden text-secondary text-md  px-6 py-10 lg:px-20 lg:py-20">
            <div className="flex flex-col p-10 space-y-5 z-50">
                <div className="flex flex-col gap-4 p-2 lg:items-start ">
                    <h1 className={cn("font-bold text-2xl sm:text-3xl md:text-4xl flex gap-3 items-center", headingFont.className)}>
                        Contact <span className="text-teal-400">? Any Query</span>
                        <Contact2 className="text-orange-500 w-8 h-8  shadow-lg" />
                    </h1>
                </div>
                <div className="flex space-x-4 w-full justify-center gap-5">
                    <Image src={SideSvg} alt="" className="scale-110 transform -rotate-12" />
                    <Image src={Svg1} alt="scale-95 " />
                </div>
            </div>
            <div className="flex flex-col px-10 py-10 lg:py-20">
                <SmartphoneCharging className="my-4 rotate-45 text-emerald-400 w-10 h-10 translate-x-10" />
                <div>
                {/* <Form {...form}>
      <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form> */}
                </div>
                <Mail className="my-4 rotate-45 text-emerald-400 w-10 h-10 translate-x-10" />
            </div>
        </div>
    )
}