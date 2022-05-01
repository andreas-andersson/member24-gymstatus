import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./components/Logo";
import Select from "./components/Select";
import GymStatus from "./components/GymStatus";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(1109);
  const selectBox = useRef();

  // Loads data from API
  const getData = async () => {
    const results = await fetch("https://member24.se/wp-json/m24/v1/visitors");
    const json = await results.json();
    setData(json.filter((gym) => gym.name !== ""));
  };

  // Gets selected from data array
  const getSelected = useCallback(() => {
    return data.filter((gym) => gym.id === selected)[0];
  }, [selected, data]);

  // Handles changed selected
  const handleSetSelected = () => {
    // persist selected in localstorage
    localStorage.setItem("selected_gym", selectBox.current.value);
    setSelected(parseInt(selectBox.current.value, 10));
  };

  // On Mount
  useEffect(() => {
    // load
    getData();

    // restore persisted selected
    const previousSelected = localStorage.getItem("selected_gym");
    if (previousSelected) {
      setSelected(parseInt(previousSelected, 10));
    }

    // update every...
    const oneMinutesInMilliseconds = 1000 * 60 * 1;
    const updateFrequenzy = setInterval(() => {
      getData();
    }, oneMinutesInMilliseconds);

    // clear interval unload
    return () => {
      clearInterval(updateFrequenzy);
    };
  }, []);

  return (
    <div className="App">
      <Logo />
      <GymStatus gym={getSelected()} />
      <Select
        selectBox={selectBox}
        data={data}
        handleSetSelected={handleSetSelected}
        selected={selected}
      />
    </div>
  );
}
