import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {

  const session = await getServerSession(options)

  return (
    <div>
        <h1>
          Welcome {
            session ? (
              <div>
                <span>{session?.user?.name}</span>
              </div>
            ) : (
              <div>
                <span>
                  Login to continue
                </span>
              </div>
            )
          }
        </h1>
    </div>
  );
}
