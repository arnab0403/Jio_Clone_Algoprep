import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
function page() {
  return (
    <div className="bg-[#0c0a09] h-[calc(100vh-70px)] flex justify-center items-center mt-[70px]">
        <Card className="sm:h-[550px] sm:w-[400px]  bg-[#1c1917] text-white rounded-[10px] border border-[#2c2c2c]">
            <CardHeader>
                <CardTitle className="text-2xl">Signup</CardTitle>
                <CardDescription>Enter your information to create an  account.</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3 flex-col">
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email">Name</label>
                    <Input type="text" placeholder="Your Name" className="bg-black border-none"/>
                </div>
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email">Email</label>
                    <Input type="text" placeholder="arnab@.com" className="bg-black border-none"/>
                </div>

                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email">Password</label>
                    <Input type="password" placeholder="" className="bg-black border-none "/>
                </div>

                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email">Confirm Password</label>
                    <Input type="password" placeholder="" className="bg-black border-none "/>
                </div>

                <Button variant={"destructive"} className="hover:cursor-pointer">Signup</Button>
            </CardContent>
            <CardFooter className="flex justify-center">
                <p className="text-[16px]">Already have an account? <Link href="/login" className=" underline decoration-1">Login</Link> </p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default page