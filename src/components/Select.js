import { useState } from "react";
import SelectToggle from "./SelectToggle";
import SelectList from "./SelectList";
import { useLayoutEffect } from "react";

export default function Select({
  data,
  selected,
  handleSetSelected
}) {

  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const setHeight = () => {
      root.style.setProperty('--vh', window.innerHeight + "px");
    }
    setHeight();
    body.addEventListener('resize', setHeight)
    
    return () => {
      body.removeEventListener('resize', setHeight)
    }
  },[])

  return (
    <>
      <SelectToggle open={open} setOpen={setOpen} />
      <SelectList open={open} setOpen={setOpen} data={data} selected={selected} handleSetSelected={handleSetSelected} />
    </>
  );
}