import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  // const name = router.query.name
  // const user = router.query.user

  const {name, user} = router.query
  console.log(name, user)

  return (
    <div>
      <h1>Página - Home</h1>
      <div className="w-full flex justify-center items-center p-4 flex-col gap-2">
        <h2 className="text-[20px] font-bold">Trabalhando com Links</h2>
        <nav className="flex flex-col gap-2">
          <Link href={"/"}>Página Inicial</Link>
          <Link href={"/Home"}>Home</Link>
          <Link href={"/Teste/"}>Produtos</Link>
        </nav>
      </div>

      <div>
        <h2>Name: {name}</h2>
        <h2>User: {user}</h2>
      </div>
    </div>
  );
}
