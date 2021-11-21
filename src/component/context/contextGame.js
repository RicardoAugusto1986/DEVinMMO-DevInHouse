import { createContext } from "react";
import { useContext, useState, useEffect } from "react";



export const gameContext = createContext();

const GameProvider = gameContext.Provider;

export const GameContext = ({children})=>{
    const [mmo, setmmo] = useState([]);
    const [mmoNoticias, setmmoNoticias] = useState([]);

    useEffect (()=>{
        const config = {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": "4e07cf249bmsh42e2bdab6effcb1p12e22bjsn3fc7f42b6fac",
          },
        };
        fetch("https://mmo-games.p.rapidapi.com/games",config)
        .then((response)=>response.json())
        .then((data)=>setmmo(data));
      },[]);


      useEffect (()=>{
        const config = {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": "4e07cf249bmsh42e2bdab6effcb1p12e22bjsn3fc7f42b6fac"
    ,
          },
        };
        fetch("https://mmo-games.p.rapidapi.com/latestnews",config)
        .then((response)=>response.json())
        .then((data)=>setmmoNoticias(data));
      },[]); 

      return <GameProvider value= {{mmo,setmmo,mmoNoticias, setmmoNoticias}}  >{children}</GameProvider>
      
} 