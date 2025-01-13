"use client";
import { TotalRepeated, TotalState } from "@/types";
import React, { useState } from "react";
import toast from 'react-hot-toast';

const Calculated = () => {
  const [inputs, setInputs] = useState("");
  const [total, setTotal] = useState<TotalState>({
    total: 0,
    numbers: [],
    repeated: {}
  })

  const handleInput = (e: React.KeyboardEvent) => {
    if(e.key === "Enter"){
      if(inputs === "" || /[  ]{2,}/g.test(inputs)) {
        toast.error("uno o mas espacios estan mal")
        return
      }
      if(inputs.trim().includes(" ")){
        const numbersArr = inputs.split(" ").filter(num => num !== '');
        // console.log(numbersArr)
        const numbersArrTotal = numbersArr.reduce((a, b) => Number(a) + Number(b), 0);
        const sumTotal = String(total.total + numbersArrTotal)
        if(isNaN(Number(sumTotal))) {
          toast.error("Uno o mas numeros estan mal")
          return
        }
        const numbersArrRepeatedObj = numbersArr.reduce(
          (acc: TotalRepeated, num) => ({ ...acc, [num]: (acc[num] || 0) + 1 }), total.repeated
        );
        const filteredNumbersArr: string[] = []
        numbersArr.forEach((num) => {                 // 12 12    ---  {12: 2}
          if (numbersArrRepeatedObj[num] === 1) {
            filteredNumbersArr.push(num)
          }else{
            if(!filteredNumbersArr.includes(num) && !total.numbers.includes(num)){
              filteredNumbersArr.push(num)
            }
          }
        })

        setTotal({
          total: Number(sumTotal),
          numbers: [...total.numbers, ...filteredNumbersArr],
          repeated: {
            ...numbersArrRepeatedObj
          }
        })
        toast.success("Numeros agregado")
      }else{
        const sumTotal = Number(inputs) + total.total
        if(isNaN(Number(sumTotal))) {
          toast.error("Uno o mas numeros estan mal")
          return
        }
        const repeatedObj = {
          [inputs]: (total.repeated[inputs] || 0) + 1
        }
        const numberArr = repeatedObj[inputs] === 1 ? [inputs] : []
        setTotal({
          total: sumTotal,
          numbers: [...total.numbers, ...numberArr],
          repeated: {
            ...total.repeated,
            ...repeatedObj
          }
        })
        toast.success("Numero agregado")
      }
      setInputs("")
    }

  }

  const handleClearTable = () => {
    setTotal({
      total: 0,
      numbers: [],
      repeated: {}
    })

    toast.success("Tabla Limpiada")
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center px-2 pt-12 md:px-64">
      <h1 className="text-5xl uppercase pb-6">calculated</h1>
      <section className="w-full flex flex-col gap-2">
        <input
          className="text-gray-800 rounded p-2 w-full text-lg font-semibold placeholder:text-sm"
          placeholder="ejemplo: 0.23 .23 320 22"
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
          type="text"
          onKeyDown={(e) => handleInput(e)}
        />

        {total.numbers.length > 0 && (
          <div className="w-full self-center">
            <button className="w-full bg-gray-200 hover:bg-gray-500 hover:text-gray-100 p-2 text-gray-800 rounded" onClick={handleClearTable}>Limpiar Tabla</button>
          </div>
        )}
      </section>



      {total.numbers.length > 0 && (
        
        <table className="table-auto border w-full text-gray-100">
          <thead className="border">
            <tr className="">
              <th className="">Identificador</th>
              <th className="">Número</th>
              <th className="">Repetido</th>
            </tr>
          </thead>

          <tbody className="">

            {total.numbers && total.numbers.map((num, idx) => (
              <tr key={idx} className="group ">
                <td className="">
                  <input className="w-full group-hover:bg-gray-900 text-gray-50 text-center  hover:text-gray-50 cursor-pointer bg-gray-950 placeholder:text-center palceholder:text-gray-50 outline-none" name="identifier" id="identifier" placeholder="--" />
                </td>
                <td className="text-center text-gray-50 group-hover:bg-gray-900">{num}</td>
                <td className="text-center text-gray-50 group-hover:bg-gray-900">x{total.repeated[num]}</td>
              </tr>  
            ))}

          </tbody>

          <tfoot className="border-t-[1px]">
            <tr className="">
              <th  >
                TOTAL:
              </th>
              <th className="text-center  py-2">{total.total}</th>
            </tr>
          </tfoot>
        </table>
      )
      
      }
    </div>
  );
};

export default Calculated;
