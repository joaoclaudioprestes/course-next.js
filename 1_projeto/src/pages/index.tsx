import Card from "@/components/Card";
import Header from "@/components/Header";

// Global
const name: string = "João C. Prestes";
const myJob: string = "Developer";
const myAge: number = 19;

function helloWorld(color: boolean) {
  let textColor: boolean = color;

  return (
    <>
      {!textColor ? (
        <h2 className="text-[30px]">Hello Next - Sem cor!</h2>
      ) : (
        <h2 className="text-[30px] text-green-600 bg-stone-100">
          Hello Next - Com cor!
        </h2>
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

      <div className="w-[50%] h-auto m-auto text-center bg-red-500 p-[20px] mt-2 text-[#fff] rounded">
        <h2>Nome: {name}</h2>
        <h2>Profissão: {job()}</h2>
        <h2>Idade: {age()}</h2>
      </div>

      <div className="w-full text-center my-3">{helloWorld(true)}</div>
      <div className="w-full text-center my-3">{helloWorld(false)}</div>
      <div className="w-full text-center my-3">{helloWorld(true)}</div>

      <div>
        <Header />
        <div className="flex gap-2 p-2 flex-wrap justify-center items-center">
          <Card productImage="/vercel.svg" productName="Tenis" price={243} discont={12}/>
          <Card productImage="/next.svg" productName="Camisa" price={213} discont={23}/>
          <Card productImage="/vercel.svg" productName="Celular" price={3242} />
          <Card productImage="/next.svg" productName="Sapato" price={324} />
          <Card productImage="/vercel.svg" productName="Mesa" price={3423} />
          <Card productImage="/next.svg" productName="Quadro" price={150} />
        </div>
      </div>
    </main>
  );
}
