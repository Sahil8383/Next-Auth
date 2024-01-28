import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useSession } from "next-auth/react"

const Login = () => {

  const { data: session, status } = useSession()  

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-screen bg-gray-100"
    >
      <form
        className="flex flex-col justify-center items-center bg-white rounded-md shadow-md p-8"
      >
        <Input
          type="text"
          placeholder="Username"
          className="w-64"
        />
        <Input 
          type="password" 
          placeholder="Password" 
          className="w-64 mt-2"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export default Login