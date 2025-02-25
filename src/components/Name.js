"use client";
import React, { useState,useEffect } from "react";
import { CalculateMoolank } from './Common';
export default function Name() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(0);
  useEffect(() => {
    // Calculate Moolank only on the client side
    const num = getNumberFromName();
    setResult(CalculateMoolank(num));
  }, [name]);
  const getNumberFromName = ()=>{
    console.log(name);
    const letter_numbers = {
      'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 8, 'g': 3, 'h': 5,
      'i': 1, 'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 7, 'p': 8,
      'q': 1, 'r': 2, 's': 3, 't': 4, 'u': 6, 'v': 6, 'w': 6, 'x': 6,
      'y': 1, 'z': 7
    }
    const nameStr = name.replace(" ","").toLocaleLowerCase().split("");
    console.log(nameStr)
    return nameStr.reduce((a,cL)=>{return a +letter_numbers[cL]},0);
    
  }
  

  return (
    <>
      <b>Moolank \ Root \ Number Calculator for Name</b>
      <br />
      <br />
      <input
        value={name}
        type="text"
        placeholder="Input Name"
        onChange={(e) => {
            setName(e.target.value);
        }}
      />
      <br />
      <br />
      {result > 0 ? (
        <>
          <b>Moolank \ Root Number is For Name</b> : {result}
        </>
      ) : null}
      <br />
      <br />
    </>
  );
}
