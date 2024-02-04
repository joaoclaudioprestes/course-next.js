import { AnyAaaaRecord } from "dns";

// Global
const name: string = "João C. Prestes";
const myJob: string = "Developer";
const myAge: number = 19;

function helloWorld(color: boolean) {
  let textColor: boolean = color;

  return (
    <>
      {!textColor ? (
        <h2 className="text-[30px]">Hello Next</h2>
      ) : (
        <h2 className="text-[30px] text-green-600 bg-stone-100">Hello Next</h2>
      )}
    </>
  );
}

export default function Home() {
  // Local
  function job(): string {
    return myJob;
  }

  function age(): number {
    return myAge;
  }

  return (
    <main>
      <div className="w-full bg-blue-200 flex justify-center h-[50px] items-center">
        <h1 className="font-bold text-[18px]">Curso de Next.JS</h1>
      </div>

      <div>
        <h2>Nome: {name}</h2>
        <h2>Profissão: {job()}</h2>
        <h2>Idade: {age()}</h2>
      </div>

      <div className="w-full text-center my-3">{helloWorld(true)}</div>
      <div className="w-full text-center my-3">{helloWorld(false)}</div>
      <div className="w-full text-center my-3">{helloWorld(true)}</div>
    </main>
  );
}
