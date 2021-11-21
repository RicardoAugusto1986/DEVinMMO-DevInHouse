import React from 'react';
import {useNavigate} from "react-router-dom";


import {Wrap, WrapContent, Wraph1, Wraph2} from '../styles/styleshome';

export const  Home=()=> {


  const Navigate = useNavigate();

  return (
   <>
       <Wrap>
         
         <>     
          <Wraph1>Bem vindo ao site DEVinMMO</Wraph1>
          <Wraph2>As novidades do mundo dos games</Wraph2>
          <br/>
          <WrapContent>
         <button className="buttonHome" onClick={()=>Navigate('/listGames')}  >Entrar</button>
          <button className="buttonHome" onClick={()=>Navigate('/Notice')}> Noticias </button>  
          </WrapContent>    
         </>  
           
       
      </Wrap>
    </>
    
  );
};


