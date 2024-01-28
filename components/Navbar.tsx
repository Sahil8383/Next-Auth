import Link from "next/link"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { Button } from "./ui/button"

const Navbar = async () => {

    const session = await getServerSession(options)

    return (
        <div
            className="flex justify-between items-center py-4 px-9 bg-white shadow-md"
        >
            {
                session ? (
                    <Button>
                        <Link href='api/auth/signout?callbackUrl=/'>
                            Sign Out
                        </Link>
                    </Button>
                ) : (
                    <Button>
                        <Link href='api/auth/signin'>
                            Sign In
                        </Link>
                    </Button>
                )
            }
        </div>
    )
}

export default Navbar