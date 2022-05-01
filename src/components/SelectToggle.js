export default function SelectToggle({ open, setOpen }) {
    return (
      <button  onClick={()=>{ setOpen(true) }} className={`SelectToggle ${open ? 'open':''}`}>
        Välj gym
        <EditIcon />
      </button>
    )
}

  
function EditIcon() {
    return (
        <span className="EditIcon">
            <img src="assets/edit-icon.svg" alt="" />
        </span>
    )
}
