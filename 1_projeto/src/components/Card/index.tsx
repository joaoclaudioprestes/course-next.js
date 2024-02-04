import Image from "next/image";
import { useState } from "react";

interface CardProps {
  productImage: any;
  productName: string;
  price: number;
  discont?: number; // Consider correcting the spelling to "discount"
}

export default function Card({
  productImage,
  productName,
  price,
  discont,
}: CardProps) {
  const [descont, setDescont] = useState(false);
  let calcule = 0;

  const calculateDiscount = (price: number, discount: number): number => {
    calcule = price - (discount / 100) * price;
    return calcule;
  };

  const calculeValue = (price: number, calcule: number): number => {
    return price - calcule;
  };

  return (
    <div className="p-[16px] rounded bg-white border border-gray-500 flex-grow min-h-[200px] flex flex-col justify-center items-center gap-2">
      <Image
        src={productImage}
        alt="imagem do produto"
        width={150}
        height={20}
      />
      <h2>Produto: {productName}</h2>
      {discont ? (
        <h3 className="line-through">R$ {price}</h3>
      ) : (
        <h3 className="font-bold text-[20px]">R$ {price}</h3>
      )}
      {discont ? <h3>Desconto: {calculateDiscount(price, discont)}</h3> : null}
      {discont ? (
        <h3 className="font-bold text-[20px]">
          Preço de venda: {calculeValue(price, calcule).toFixed(2)}
        </h3>
      ) : null}
    </div>
  );
}
