import React, { useContext } from 'react'
// import { useParams } from 'react-router';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { gameContext } from '../component/context/contextGame';
import {Wrap} from '../styles/styleshome';

export const PageNotice = ()=> {

     const Navigate = useNavigate();

    const {mmoNoticias, setmmoNoticias} = useContext(gameContext);
    const [palavra, setPalavra] = useState('');

    

    return (
        
        <div className="page-notice">
            <h1 className="name-descrition">Noticias</h1><br/>
            <input className="inputPageList"    type="text"    placeholder="  Filtrar" onChange={(digitado)=>(setPalavra(digitado.target.value))}></input><br/>
            <button className="buttonPageNotice"onClick={()=>Navigate('/listGames')}>Lista</button>
            {/* <button className="buttonPageNotice"  onClick={()=>Navigate('/')}>Home </button> */}
        
             
            {mmoNoticias.filter((filtrado)=>{
              if(filtrado==""){
                 return filtrado;
              }else if(filtrado.title.toLowerCase().includes(palavra.toLocaleLowerCase())){
           return filtrado;
        }

      }).map ( (noticias,index)=>(
                    
             <div className="CardNotice">
              <img className="notice-image" src={noticias.main_image} />  
                 
                 
              <div className="h1Notice"> 
                <h1 >Titulo: {noticias.title}</h1>
                <h1>Descrição: {noticias.short_description}</h1>
                <a href={noticias.article_url} target="_blank">Saiba Mais...</a>
              </div> 
             </div>     
      
            ))}

       
        </div>
        
    );
};