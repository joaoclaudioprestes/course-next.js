// Global
const name: string = "João C. Prestes";
const myJob: string = "Developer";

export default function Home() {
  // Local
  function job(): string {
    return myJob;
  }

  return (
    <main>
      <div className="w-full bg-blue-200 flex justify-center h-[50px] items-center">
        <h1 className="font-bold text-[18px]">Curso de Next.JS</h1>
      </div>

      <div>
        <h2>Nome: {name}</h2>
        <h2>Profissão: {job()}</h2>
      </div>
    </main>
  );
}
