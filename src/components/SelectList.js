export default function SelectList({open, setOpen, data, selected, handleSetSelected}) {
    const handleClick = (id) => {
        handleSetSelected(id)
        setOpen(false);
    }
    return (
        <ul className={open ? "SelectList open" : "SelectList"}>
            {data.map((gym) => (
                <li key={gym.id} onClick={() => { handleClick(gym.id) }}>
                    <span className={`status ${gym.id === selected ? 'selected':''}`}></span>
                    {gym.name}
                </li>
            ))}
        </ul>
    )
}