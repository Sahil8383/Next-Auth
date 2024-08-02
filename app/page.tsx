import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {

  const session = await getServerSession(options)

  return (
    <div
      className="w-full"
    >
      <h1>Test commit 1</h1>
      <div
        className='
      flex flex-col justify-center items-center
      bg-hero-pattern bg-cover bg-center
      text-center h-[550px]       
    '
      >
        <p
          className='
          text-6xl
          font-bold
          mb-4
          flex flex-col
        '
        >
          <span className='text-[#7559ff]' >AI-powered video </span>
          <span className='' >creations at scale</span>
        </p>
        <h3
          className='
          dark:text-white
          text-[#0c062c]
          text-xl
          mb-8
          max-w-[450px]
        '
        >Effortlessly produce studio quality videos with AI-generated avatars and voices.</h3>
        <div>
          <button
            className='
            bg-gradient-to-r from-[#7559ff] to-[#5636f3]
            text-white
            px-6 py-3
            rounded-lg
          '
          >
            <div className=' flex flex-row items-center justify-around' >
              <p className='mr-2 ' >Get Started for Free</p>
              {/* <RightArrow /> */}
            </div>
          </button>
          <p
            className='
            text-xs 
            text-gray-700
            mt-2
            dark:text-gray-300
          '
          >No credit card needed</p>
        </div>
      </div>
    </div>
  );
}
