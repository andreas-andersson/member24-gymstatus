export default function Select({
  data,
  selectBox,
  selected,
  handleSetSelected
}) {
  return (
    <>
      <label htmlFor="gym-select" className="select-label">
        Välj gym
      </label>
      <select
        id="gym-select"
        ref={selectBox}
        value={selected}
        onChange={() => {
          handleSetSelected();
        }}
      >
        {data.length > 0 ? (
          <Options data={data} />
        ) : (
          <LoadingOptions selected={selected} />
        )}
      </select>
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
