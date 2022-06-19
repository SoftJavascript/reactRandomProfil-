import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import MyButton from "./components/MyButton";
import IdCard from "./components/IdCard";
import profiles from "./fakeData";

function App() {
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState('WAITING FOR DATA');
  const [picture, setPictureProfil] = useState('WAITING FOR DATA');
  const [liveIn, setLiveIn] = useState('WAITING FOR DATA');

  const  getRandomName = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json()
    setPictureProfil(data.results[0].picture.larger);
    setFullName(data.results[0].name.first + " " + data.results[0].name.last);
    setLiveIn(data.results[0].location.city)
    console.log(fullName);
    return (fullName, picture);
  }

  useEffect(() => {
    getRandomName();
  }, []);

  return (
    <div>
      <h2 className="title_style" >My count is {count}</h2>
      <MyButton className='btn_buy' title='+' onClick={()=>setCount(count+1)}></MyButton>
      <MyButton onClick={()=>setCount(count-1)} className='btn_sell' title='-'></MyButton>
      <MyButton className='btn_buy' title='Buy it 🚀'/>
      <MyButton className="btn_sell" title='Sell it 🚀'/>
      {profiles.map(profiles => (
        <IdCard 
        imagePath={picture} 
        title={fullName}
        subtitle={`Live in ${liveIn}`}
        description={profiles.description}
        />
      ))}
      
    </div>
  )

  



}

export default App;
