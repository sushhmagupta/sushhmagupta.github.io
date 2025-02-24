"use client";
import React, { useState,useEffect } from "react";

export default function Mobile() {
  const [mobile, setMobile] = useState("");
  const [result, setResult] = useState(0);
  useEffect(() => {
    // Calculate Moolank only on the client side
    setResult(calculateMoolank());
  }, [mobile]);
  const calculateMoolank = ()=>{
    if (!mobile) return 0; 
    let num = parseInt(mobile);
    let sum = 0;
    while(num>0){
        let lastBit = Math.floor(num%10);
        num = num/10;
        sum +=lastBit;
        if(sum>9){
            sum = sum-9;
        }

    }
    return sum;
  }
  return (
    <>
      <h2>Moolank \ Root \ Number Calculator</h2>
      <input
        value={mobile}
        type="number"
        placeholder="Input Any Number"
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <br/>
      <br/>
      <b>Moolank \ Root Number</b> : {result}
    </>
  );
}
