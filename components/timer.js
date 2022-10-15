import { useState, useEffect } from "react";

export default function Timer(){
    const [time, setTime] = useState("0000")
    useEffect(() => {
        setTimeout(() => {
            if(time.slice(2,4) < 59) {
                setTime((t) => (t.slice(0,2) + (parseInt(t.slice(2,4)) + 1)).toString())
            } else if (time.slice(2,4) == 59 && time.slice(0,2) < 9){
                setTime((t) => ('0'+(parseInt(t.slice(1,2)) + 1)).toString() + '00')
            } else if (time.slice(2,4) == 59){
                setTime((t) => ((parseInt(t.slice(0,2)) + 1)).toString() + '00')
            }
        },1000)
    })

    return(
        <>
            <div className="text-3xl hidden">{time.slice(0,2) + ':' + time.slice(2,4)}</div>
        </>
    )
}