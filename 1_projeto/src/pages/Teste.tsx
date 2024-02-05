import Link from "next/link";

export default function Teste() {
  return (
    <div>
      <h1>Página - Produtos</h1>
      <div className="w-full flex justify-center items-center p-4 flex-col gap-2">
        <h2 className="text-[20px] font-bold">Trabalhando com Links</h2>
        <nav className="flex flex-col gap-2">
          <Link href={"/"}>Página Inicial</Link>
          <Link href={"/Home"}>Home</Link>
          <Link href={"/Teste"}>Produtos</Link>
        </nav>
      </div>
    </div>
  );
}
