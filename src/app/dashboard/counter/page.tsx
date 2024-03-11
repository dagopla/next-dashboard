import { CarCounter } from "@/shopping-car/components/CarCounter";
import { Metadata } from "next";
export const metadata:Metadata={
  title:"Carrito",
  description:"Productos en el carrito"
}
export default function CounterPage() {


  return (
    <div className="flex flex-col items-center text-black justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CarCounter value={20}/>
    </div>
  )
}
