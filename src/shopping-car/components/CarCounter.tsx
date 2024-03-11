'use client';

import { useAppDispatch, useAppSelector } from "@/sotre";
import { addOne, initializeCounter, substractionOne } from "@/sotre/counter/counterSlice";
import { useEffect } from "react";
interface Props {
  value?: number;
}
export interface CounterResponse{
  method:string;
  count:number
}
const getApiCounter = async ():Promise<CounterResponse> => {
  const response = await fetch('/api/counter');
  const data = await response.json();
  return data;
}
export const CarCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(initializeCounter(value));
  // }, [dispatch, value]);
  useEffect(() => {
    getApiCounter().then(data=>{
      dispatch(initializeCounter(data.count));
    });
  }, [dispatch, value]);
  
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button onClick={() => dispatch(addOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button onClick={() => dispatch(substractionOne())} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>

      </div>
    </>

  )
}
