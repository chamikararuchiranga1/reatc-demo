import React, {useEffect, useState} from "react";
import Button from "../../common/components/Button/Button";

function Hooks () {

    const [plus, setPlus] = useState(0);

    useEffect(()=> {
        console.log("run useEffect");
    },[plus]);

    return (
        <div className='App'>
            <Button name={'CLick +'} onClick={()=> setPlus(plus+1)}/>
            <Button name={'CLick -'} onClick={()=> setPlus(plus-1)}/>

            <div>
                <h1>Value as : {plus}</h1>
            </div>
        </div>
    )
};

export default Hooks;