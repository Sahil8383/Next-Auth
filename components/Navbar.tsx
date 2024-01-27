import Link from "next/link"

const Navbar = () => {
  return (
    <div
        className="flex justify-between items-center py-4 px-9 bg-white shadow-md"
    >
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            <Link href="/login">
                Login
            </Link>
        </button>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            <Link href="/signup">
                Signup
            </Link>
        </button>
    </div>
  )
}

export default Navbar