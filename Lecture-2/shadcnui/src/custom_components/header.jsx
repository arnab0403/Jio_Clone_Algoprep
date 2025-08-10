import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Crown, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

function Header() {
  return (
    <div className='h-[70px] bg-[#0d0e10]  flex items-center justify-between px-[20px] border-b border-[#464646] absolute w-[100vw] top-0'>
        <div className='flex gap-6 items-center'>
            <Image src={`https://jio-cinema-clone-1.vercel.app/logo.svg`} width={130} height={130} alt='jio cinema'/>
            <Badge variant="outline" className="text-[#ffbd22] border-[#ffbd22] w-[150px] rounded-2xl h-[34px] cursor-pointer">
                <Crown size={100}/> 
                <p className='text-[16px]'>Go Premium</p>
            </Badge>
            <h1 className='text-gray-400 text-[17px] hover:text-white cursor-pointer'>Home</h1>
            <h1 className='text-gray-400 text-[17px] hover:text-white cursor-pointer'>Movies</h1>
            <h1 className='text-gray-400 text-[17px] hover:text-white cursor-pointer'>Tv Shows</h1>
            <h1 className='text-gray-400 text-[17px] hover:text-white cursor-pointer'>Watchlist</h1>
            <h1 className='text-gray-400 text-[17px] hover:text-white cursor-pointer'>Jio+</h1>

        </div>

        <div className='flex gap-6'>
            <div className=' border border-[#676767] w-[230px] flex items-center rounded-[20px] px-3'>
            <Search strokeWidth={1.25} color='white' className='cursor-pointer'/>
            <Input placeholder="Movies" className="text-white border-none focus-visible:border-none focus-visible:ring-0 h-[100%]" />
            </div>
            <Avatar className="h-[40px] w-[40px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
        </div>
        
    </div>
  )
}

export default Header