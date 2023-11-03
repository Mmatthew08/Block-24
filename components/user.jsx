import { useState } from "react";
import userData from "../../userData";
import { func } from "prop-types";

function user(){
    const [curUser,setCurUser]= useState(0);
    function nextUser(){
        setCurUser(curUser+1)
    }
    return(
        <>
        <h3>{userData[curUser].firstname}</h3>
        <p>{userData[curUser].birthday}</p>
        <button>Previous</button>
        <button onClick={nextUser}>Next</button>
        </>
    )
}
export default user;