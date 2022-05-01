import { useState } from "react";
import SelectToggle from "./SelectToggle";
import SelectList from "./SelectList";

export default function Select({
  data,
  selected,
  handleSetSelected
}) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <SelectToggle open={open} setOpen={setOpen} />
      <SelectList open={open} setOpen={setOpen} data={data} selected={selected} handleSetSelected={handleSetSelected} />
    </>
  );
}

function Options({ data }) {
  return (
    <>
      {data.map((gym) => (
        <option key={gym.id} value={gym.id}>
          {gym.name}
        </option>
      ))}
    </>
  );
}

function LoadingOptions({ selected }) {
  return <option value={selected}>Loading...</option>;
}