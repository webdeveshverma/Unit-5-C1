import React,{useState} from "react";

function Task(){
    const [query,setQuery]=React.useState("")
    const handChange=(e)=>{
           
    }

    return(
        <div>
            <h1>Task</h1>
            <div>
                <input type="text"  value={query} placeholder="enter something"/>
                <button  onClick={handChange} >ADD TASK</button>
            </div>
        </div>
        
    )
}

export {Task}