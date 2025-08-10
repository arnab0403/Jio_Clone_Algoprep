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
function page() {
  return (
    <div className="bg-[#0c0a09] h-[100vh] flex justify-center items-center">
        <Card className="sm:h-[400px] sm:w-[400px]  bg-[#1c1917] text-white rounded-[10px] border border-[#2c2c2c]">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your email below to login to your account.</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-3 flex-col">
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email">Email</label>
                    <Input type="text" placeholder="arnab@.com" className="bg-black border-none"/>
                </div>

                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email">Password</label>
                    <Input type="password" placeholder="" className="bg-black border-none "/>
                </div>

                <Button variant={"destructive"} className="hover:cursor-pointer">Login</Button>
            </CardContent>
            <CardFooter className="flex justify-between">
                <p className="text-[12px]">Forgot Password?</p>
                <p className="text-[12px]">Need an account? Sign Up</p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default page