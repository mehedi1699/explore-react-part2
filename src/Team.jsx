import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(0);
    const teamStyle = {
        border:'2px solid purple',
        margin:'10px',
        padding:'10px',
        borderRadius:'20px'
    }
    const handleAdd = () =>{
        const newTeam = team +1;
        setTeam(newTeam);
    }
    const handleRemove =() =>{
        const newTeam = team -1;
        setTeam(newTeam);
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Reduce</button>
        </div>
    )
}