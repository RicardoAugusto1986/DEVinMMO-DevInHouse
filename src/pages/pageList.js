import React, { useContext } from 'react';
import {useEffect, useState} from 'react';
import {Wrap, WrapCard, WrapContent2, WrapList, WrapListCartao} from '../styles/styleshome';
import Cartao from '../component/index';
import { useNavigate } from 'react-router';
import { gameContext } from '../component/context/contextGame';


export const PageList = ()=> {

  const Navigate = useNavigate();

  const {mmo, setmmo} =useContext(gameContext);
  const [palavra, setPalavra] = useState('');
 
  console.log(mmo);

  return <WrapCard>
      
      <WrapListCartao ><br/><br/>

        <h1 className="name-descrition">Lista De Games</h1>
        <input className="inputPageList"    type="text"    placeholder="  Filtrar" onChange={(digitado)=>(setPalavra(digitado.target.value))}></input><br/>
       
        <button className="buttonPageList"onClick={()=>Navigate('/Notice')}> Noticias </button>
        
     </WrapListCartao>
      <div className="list-games">
        
      {mmo.filter((filtrado)=>{
        if(filtrado==""){
          return filtrado;
        }else if(filtrado.title.toLowerCase().includes(palavra.toLocaleLowerCase())){
          return filtrado;
        }

      }).map ( (games,index)=>(
      <div onClick={()=>Navigate(`/listGames/${games.id}`)} >
           <Cartao 
            id={games.id}
            picture={games.thumbnail}
            name={games.title} 
            descrition={games.short_description}
            platform={games.platform}  /> 
     
     </div>
     
     
      ))}

    
      </div>
      
   

  </WrapCard>
      };
   