import { auth } from "@/auth";
import SignInGoogle from '@/app/_components/SignInGoogle';
import SignInGithub from '@/app/_components/SignInGithub';

export default async function Home() {
  let session = await auth();
  let user = session?.user?.name;

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-12">
      <h1 className="text-4xl font-bold">Welcome to Pokedex</h1>


      {user ? <p className="text-lg">Hello, {user}</p> : <>
        <SignInGoogle />
        <SignInGithub />
      </>}
    </main>
  );
}
