"use client";
import React, { useState,useEffect } from "react";
import {CalculateMoolank} from './Common'
export default function Mobile() {
  const [mobile, setMobile] = useState("");
  const [result, setResult] = useState(0);
  useEffect(() => {
    // Calculate Moolank only on the client side
    setResult(CalculateMoolank(mobile));
    
  }, [mobile]);
  
  return (
    <>
      <b>Moolank \ Root \ Number Calculator</b><br/><br/>
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
      {result>0?<><b>Moolank \ Root Number is</b> : {result}</>:null}
    </>
  );
}
