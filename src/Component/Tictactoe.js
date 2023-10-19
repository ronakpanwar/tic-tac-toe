import React ,{useRef, useState} from 'react'
import './Tictactoe.css'
import Cross_img from './cross.png'
import Circle_img from './circle-clipart.png'

let Data = ["","","","","","","","",""];

function Tictactoe() {
    
let [count , setCount] = useState(0)
let [cheak , setCheak] = useState(false)
let titleRef = useRef(null);
let box1 = useRef(null);
let box2 = useRef(null);
let box3 = useRef(null);
let box4 = useRef(null);
let box5 = useRef(null);
let box6 = useRef(null);
let box7 = useRef(null);
let box8 = useRef(null);
let box9 = useRef(null);

let setBox = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
 let toggle = (e, num) =>{
    if(cheak){
        return 0;
    }
    if(count%2 === 0){
       e.target.innerHTML = `<img src = '${Cross_img}'>`;
       Data[num] = "x";
       setCount(++count);
    }
    else{
        e.target.innerHTML = `<img src = '${Circle_img}'>`;
        Data[num]="o";
        setCount(++count);

    }
     CheakWin();
 }

 
 const CheakWin = ()=>{
    if(Data[0]===Data[3] && Data[3]===Data[6] && Data[6]!==""){
        Won(Data[6]);
    }
    else if(Data[1]===Data[4] && Data[4]===Data[7] && Data[7]!==""){
       Won(Data[7])
    }
    else if(Data[2]===Data[5] && Data[5]===Data[8] && Data[8]!==""){
        Won(Data[8])
     }
     else if(Data[0]===Data[1] && Data[1]===Data[2] && Data[2]!==""){
        Won(Data[2])
     }
     else if(Data[3]===Data[4] && Data[4]===Data[5] && Data[5]!==""){
        Won(Data[5])
     }
     else if(Data[6]===Data[7] && Data[7]===Data[8] && Data[8]!==""){
        Won(Data[8])
     }
     else if(Data[0]===Data[4] && Data[4]===Data[8] && Data[8]!==""){
        Won(Data[8])
     }
     else if(Data[2]===Data[4] && Data[4]===Data[6] && Data[6]!==""){
        Won(Data[6])
     }
}

const Won = (winner)=>{
    setCheak(true);
    if(winner ==="x"){
       titleRef.current.innerHTML = `Congrtulatins: <img src='${Cross_img}'>  Wins`;
      
    }
    else{
        titleRef.current.innerHTML = `Congrtulatins: <img src='${Circle_img}'> Wins `;
        
    }
}

const Resat = ()=>{
    setCheak(false);
    Data = ["","","","","","","","",""];
    titleRef.current.innerHTML =`Tic Tac Toe Game <span> React</span>`;
    setBox.map((e)=>{
      e.current.innerHTML = "";
    })

}
  return (
    <div className='container'>
    <h1 className='title' ref={titleRef} >Tic Tac Toe Game <span> React</span></h1>
    <div className="board">
       <div className="row1">
        <div className="block" ref={box1} onClick={(e)=>{toggle(e,0)}} ></div>
        <div className="block" ref={box2}  onClick={(e)=>{toggle(e,1)}}></div>
        <div className="block" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
       </div>
       <div className="row2">
        <div className="block" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
        <div className="block" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
        <div className="block" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
       </div>
       <div className="row3">
        <div className="block" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
        <div className="block" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
        <div className="block" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
       </div>
    </div>
      <button className='reseat' onClick={()=>{Resat()}} > Restart</button>
    </div>
  )
}

export default Tictactoe
