import React, {useState, useEffect} from 'react'
import useColorChanger from '../hooks/useColorChanger'

export default function FunctionalExample() {
    const [student, setStudent] = useState('No Student')
    const [numClicks, setNumClicks] = useState(0)

    useEffect(()=>{
        console.log('We are in the first parameter of useEffect Hook with is like componentDidMount')
        return()=>{
            console.log('In return of the first param of useEffect ka compnenet did unmount')
        }
    })

    // Can act as callbacks
    useEffect(()=>{
        console.log('inside the hook useEffect for changing Student name')
        if(student ==='kevin'){
            alert('Hey Kevin you are the coolest')
        }
        return ()=>{if (student === 'kevin'){setStudent('You are the best');console.log('Changing the name...')}}
    }, [student])

    // Color changer
    // useEffect(()=>{
    //     switch(numClicks){
    //         case 0: setBgColor('cyan');break;
    //         case 1: setBgColor('red');break;
    //         case 2: setBgColor('green');break;
    //         case 3: setBgColor('blue');break;
    //         case 4: setBgColor('indigo');break;
    //         case 5: setBgColor('violet');break;
    //         default: setBgColor('gray');

    //         return ()=>{if (numClicks>=6){setNumClicks(0)}}
    //     }
    // },[numClicks])



    const bgColor = useColorChanger(numClicks,setNumClicks)

    return (
        <div>
            {console.log("in the render")}
            the student is: {student} <br/>
            <input type="text" name="name" onChange={(e)=>setStudent(e.target.value)} placeholder="Enter Student Name"/>
        <div style={{backgroundColor:bgColor, hieght:'250px'}}>
                <button onClick={()=>{setNumClicks(numClicks+1)}}>Click Me</button>
                <br/>
                I have been click {numClicks} times
        </div>

        </div>
    )
}
