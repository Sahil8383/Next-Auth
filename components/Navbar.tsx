import Link from "next/link"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { Button } from "./ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ModeToggle } from '@/components/mode-toggle'

const Navbar = async () => {

    const session = await getServerSession(options)

    const getInitials = (name: string) => {
        const words = name.split(' ');
        const initials = words.map(word => word.charAt(0));
        return initials.join('');
    }

    return (
        <>
            <div className="flex flex-wrap flex-col md:flex-row justify-between items-center px-4 py-2 md:px-20 md:py-4 w-full h-20">
                <div className="flex justify-between items-center w-full md:w-auto mb-2 md:mb-0">
                    <h1 className='text-2xl font-bold'>HeyGen</h1>
                </div>

                <div className="md:flex md:flex-row md:items-center w-full md:w-auto">
                    <ul className='flex flex-row justify-around items-center md:justify-between md:space-x-4 w-full md:w-auto'>
                        <li className='dark:text-white text-md font-semibold text-gray-700 hover:text-blue-600 cursor-pointer'>Features</li>
                        <li className='dark:text-white text-md font-semibold text-gray-700 hover:text-blue-600 cursor-pointer'>Pricing</li>
                        <li className='dark:text-white text-md font-semibold text-gray-700 hover:text-blue-600 cursor-pointer'>Resources</li>
                        <li className='dark:text-white text-md font-semibold text-gray-700 hover:text-blue-600 cursor-pointer'>Blog</li>
                    </ul>
                </div>

                <div className='flex flex-row justify-around items-center w-full md:w-auto'>
                    {
                        session ? (
                            <div className='flex flex-row justify-around gap-4'>
                                <Avatar>
                                    <AvatarImage
                                        src={session?.user?.image as string}
                                        alt={session.user?.name as string}
                                    />
                                    <AvatarFallback>
                                        {getInitials(session?.user?.name as string)}
                                    </AvatarFallback>
                                </Avatar>

                                <Button
                                    className='hover:text-blue-600'
                                    variant={'ghost'}
                                >
                                    <Link href={`api/auth/signout`}>
                                        Sign Out
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            <div className='flex flex-row justify-around items-center gap-4'>
                                <Link href='api/auth/signin'>
                                    <Button
                                        className='hover:text-blue-600'
                                        variant={'ghost'}
                                    >
                                        Login In
                                    </Button>
                                </Link>
                                <Link href='/signup'>
                                    <Button
                                        className='hover:text-blue-600'
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