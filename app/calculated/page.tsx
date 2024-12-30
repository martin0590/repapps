"use client";
import React, { useState } from "react";

const Calculated = () => {
  const [inputs, setInputs] = useState("");
  const [error, setError] = useState("")
  const [total, setTotal] = useState<{ total: number; numbers: string[], repeated?: {[number: string]: number} }>({
    total: 0,
    numbers: [],
  })

  const handleInput = (e: React.KeyboardEvent) => {
    if(e.key === "Enter"){
      if(inputs.trim().includes(" ")){
        const numbersArr = inputs.split(" ").filter(num => num !== '');
        const numbersArrTotal = numbersArr.reduce((a, b) => Number(a) + Number(b), 0);
        const sumTotal = String(total.total + numbersArrTotal)
        if(isNaN(Number(sumTotal))) {
          setError("Uno o mas numeros estan mal")
          return
        }
        

        setTotal({
          total: Number(sumTotal),
          numbers: [...total.numbers, ...numbersArr]
        })
      }else{
        const sumTotal = Number(inputs) + total.total
        if(isNaN(Number(sumTotal))) {
          setError("Uno o mas numeros estan mal")
          return
        }
        setTotal({
          total: sumTotal,
          numbers: [...total.numbers, inputs]
        })
      }
      setError("")
      setInputs("")
    }

  }

  const handleClearTable = () => {
    setTotal({
      total: 0,
      numbers: []
    })
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center px-2">
      <h1 className="text-5xl uppercase">calculated</h1>
      <section className="w-full flex flex-col gap-2">
        <input
          className="text-gray-800 rounded p-2 w-full text-lg font-semibold placeholder:text-sm"
          placeholder="ejemplo: 0.23 .23 320 22"
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
          type="text"
          onKeyDown={(e) => handleInput(e)}
        />
        {error && <p className="text-red-500 pt-2">{error}</p> }

        <div className="w-full self-center">
          <button className="w-full bg-gray-200 hover:bg-gray-500 hover:text-gray-100 p-2 text-gray-800 rounded" onClick={handleClearTable}>Limpiar Tabla</button>
        </div>
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
              <tr key={idx}>
                <td>
                  <input className="w-full text-gray-100 text-center hover:bg-gray-500 cursor-pointer bg-gray-950 placeholder:text-center outline-none" name="identifier" id="identifier" placeholder="--" />
                </td>
                <td className="text-center text-gray-100">{num}</td>
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
