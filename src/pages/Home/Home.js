import React from "react";
import Button from "../../common/components/Button/Button";

function Home () {
    return (
        <div>
            <h1>Home</h1>
            <Button name="Add Button" onClick={(value)=>alert(value)}/>
            <Button name="Delete Button" onClick={(value)=>alert(value)}/>
            <Button name="Update Button" onClick={(value)=>alert(value)}/>
            <Button name="Chamikara Ruchiranga" onClick={(value)=>alert(value)}/>
        </div>
    )
}

export default Home;