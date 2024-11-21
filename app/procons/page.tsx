"use client";
import { ProconsState } from "@/types";
import React, { useState } from "react";

const ProConsPage = () => {
  const [proState, setProState] = useState("");
  const [consState, setConsState] = useState("");
  const [proconsState, setProconsState] = useState<ProconsState>({
    pro: [],
    cons: [],
  });

  const handleAddPro = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if(e.currentTarget.id === "add-pro"){
        if (proState === "") return;
  
        setProconsState({
          ...proconsState,
          pro: [...proconsState.pro, proState],
        });
  
        setProState("");
      }else{
        if (consState === "") return;
  
        setProconsState({
          ...proconsState,
          cons: [...proconsState.cons, consState],
        });
  
        setConsState("");
      }
    }
  };

  return (
    <section className="w-full text-gray-800 bg-gray-300 min-h-screen grid grid-cols-2">
      <div className="pt-2 pl-2 border-r border-r-slate-700 flex flex-col items-center gap-2 relative">
        <input
          value={proState}
          onKeyDown={handleAddPro}
          onChange={(e) => setProState(e.target.value)}
          type="text"
          className={`w-[90%] px-2 focus:outline focus:outline-green-500 placeholder:text-center text-gray-800 py-2 text-xl`}
          name="addpro"
          id="add-pro"
          placeholder="Add Pro"
        />
        <div>
          <h1 className="text-green-500 font-bold text-4xl text-center">PRO</h1>
        </div>
        <ul className="list-outside list-disc marker:text-green-500 ms-5 self-start flex flex-col gap-2">
          {proconsState.pro.map((pro, index) => (
            <li key={index} className="break-all text-2xl">
              {pro}
            </li>
          ))}
        </ul>
      </div>
      {/* cons */}
      <div className="pt-2 pl-2 border-r border-r-slate-700 flex flex-col items-center gap-2 relative">
      <input
          value={consState}
          onKeyDown={handleAddPro}
          onChange={(e) => setConsState(e.target.value)}
          type="text"
          className="w-[90%] px-2 focus:outline focus:outline-red-500 placeholder:text-center text-gray-800 py-2 text-xl"
          name="addcons"
          id="add-cons"
          placeholder="Add Cons"
        />
        <h1 className="text-red-500 font-bold text-4xl text-center">CONS</h1>
        <ul className="list-outside marker:text-red-500 list-disc ms-5 self-start flex flex-col gap-2">
          {proconsState.cons.map((cons, index) => (
            <li key={index} className="break-all text-2xl">
              {cons}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProConsPage;
