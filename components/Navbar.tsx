import Link from "next/link"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { Button } from "./ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const Navbar = async () => {

    const session = await getServerSession(options)
    console.log(session?.user?.image)
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 md:px-20 md:py-4 w-full h-20">
                <div className="flex flex-row justify-center items-center">
                    <h1 className='text-2xl font-bold'>HeyGen</h1>
                </div>

                <div className={`md:flex md:flex-row md:items-center `}>
                    <ul className='flex flex-row justify-between items-center md:space-x-4'>
                        <li className='text-md font-semibold text-gray-700 hover:text-blue-600 cursor-pointer'>Features</li>
                        <li className='text-md font-semibold text-gray-700 hover:text-blue-600 cursor-pointer'>Pricing</li>
                        <li className='text-md font-semibold text-gray-700 hover:text-blue-600 cursor-pointer'>Resources</li>
                        <li className='text-md font-semibold text-gray-700 hover:text-blue-600 cursor-pointer'>Blog</li>
                    </ul>
                </div>

                <div className='flex flex-row justify-around items-center'>
                    {
                        session ? (
                            <div
                                className='flex flex-row justify-around items-center'
                            >
                                <Avatar>
                                    <AvatarImage
                                        src={session?.user?.image as string}
                                        alt={session.user?.name as string}
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        ) : (
                            <div
                                className='flex flex-row justify-around items-center'
                            >
                                <Link href='api/auth/signin'>
                                    <Button
                                        className='w-[120px] h-10 hover:text-blue-600'
                                        variant={'ghost'}
                                    >
                                        Login In
                                    </Button>
                                </Link>
                                <Link href='/signup'>
                                    <Button
                                        className='w-[120px] h-10 hover:text-blue-600'
                                        variant={'outline'}
                                    >
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar