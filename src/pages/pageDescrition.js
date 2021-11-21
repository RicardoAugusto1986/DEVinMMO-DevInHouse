import React from 'react'
import { useNavigate, useParams } from 'react-router';
import {useEffect, useState} from 'react';




export const PageDescrition = ()=> {
  const Navigate = useNavigate();



  const [number,setNumber] = useState(0);
  const [downNumber,setDownNumber] = useState(0);
  const [screen, setScreen] = useState(null);
  const [trocar, setTrocar] = useState('0');


  function like() {
    setNumber(number+1);
  }

  function desLike() {
    setDownNumber(downNumber+1);
  }
 

   // const arrayComentarios = useState(JSON.parse(localStorage.getItem('ls_comentario')) || []);
     const [arrayComentarios,setArrayComentarios] = useState([]);

      useEffect(()=>{
        setArrayComentarios(JSON.parse(localStorage.getItem(id)) || []);
       
      },[]);

      
    const [comentar,setcomentar] = useState();
    const [nome,setNome] = useState();
    



    const guardar =(chave,comentario,nome,) =>{
      if(comentario!=null && nome !=null   ){
      let novoComentario = {};
      novoComentario.comentario = comentario;
      novoComentario.nome = nome;
      arrayComentarios.push(novoComentario);
      localStorage.setItem(chave,JSON.stringify(arrayComentarios));
      window.location.reload();
      }else {
        alert('Preencha todos os campos');
      }
    };

    
    
    const{id}= useParams();

    const [mmo, setmmo] = useState([]);

    useEffect (()=>{
        const config = {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": "4e07cf249bmsh42e2bdab6effcb1p12e22bjsn3fc7f42b6fac",
          },
        };
        fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`,config)
        .then((response)=>response.json())
        .then((data)=>setmmo(data));
      },[id]);


      useEffect(()=>{
        
         setScreen(mmo.screenshots? mmo.screenshots[0].image : mmo.thumbnail);
         
       },[mmo]);

       useEffect(()=>{
        setScreen(mmo.screenshots? mmo.screenshots[trocar].image : mmo.thumbnail);
    
      },[trocar]);
       
        

    return (
     
     
     
        <div className="page-descrition">
          <div  >
          <button className="buttonDescrition" onClick={()=>Navigate('/Notice')}> Noticias </button><br/>
          <button className ="buttonDescrition" onClick={()=>Navigate('/listGames')}  >Lista</button>
         </div>

    <img  className="descriton-image"  src={screen} />
                 
            <div className="image-thumbnail">
                 
                {(mmo.screenshots != null) ? 
                    mmo.screenshots.map((screen,index)=>(
                      <img  className="descriton-thumbnail"  src={screen.image} onClick={() => setTrocar(index)} />

                    )) : null                
                
                }                 

               </div>  
                 <h1 className="name-descrition">{mmo.title}</h1>                 
                 <br/>
  
              
            <div className="CardDescrition">
                   <h1>Descrição: {mmo.short_description}</h1>
                   <h1>url: {mmo.game_url}</h1>
                   <h1>Genero: {mmo.genre}</h1>
                   <h1>Plataforma: {mmo.platform}</h1>
                   <h1>Editora: {mmo.publisher}</h1>
                   <h1>Desenvolvedores: {mmo.developer}</h1>
                   <h1>Data do Lançamento: {mmo.release_date}</h1>
                   <h1>Perfil de url: {mmo.profile_url}</h1>
                   
            </div> 

            {(mmo.minimum_system_requirements) ?
            <div className="CardDescrition">                
                   <h1>Requisitos minimos:</h1><br></br>
                   <h1>Sistema: {mmo.minimum_system_requirements.os}</h1>
                   <h1>Processador: {mmo.minimum_system_requirements.processor}</h1>
                   <h1>Memoria RAM: {mmo.minimum_system_requirements.memory}</h1>
                   <h1>Grafico: {mmo.minimum_system_requirements.graphic}</h1>
                   <h1>Memoria HD: {mmo.minimum_system_requirements.storage}</h1>
                  
            </div> 
            :
            <div className="CardDescrition">                
                  <h1>Requisitos minimos</h1>
                   <h1>Sistema: ------------</h1>
                   <h1>Processador: ------------</h1>
                   <h1>Memoria RAM: ------------</h1>
                   <h1>Grafico: ------------</h1>
                   <h1>Memoria HD: ------------</h1>
                  
            </div> 
            }


   <div  className="comentariosDescrition">
     <label>Digite seu comentario</label>
   
   <input className="NameDescrition" type="text"  placeholder="Nome" value={nome} onChange={(e)=> setNome(e.target.value)} /> 
   <input className="NameDescrition"  type="text"  placeholder="Email"  />
  <input className="inputComentarios"  placeholder="Digite seu comentario" type="text"  value={comentar} onChange={(e)=> setcomentar(e.target.value)} />
   <button className ="buttonDescrition" onClick={()=>guardar(id,comentar,nome )}>Salvar comentario</button>
   
   

    <div>
      
        {
            arrayComentarios.map((item)=>(
          <div className="cardComentarios">
            <h1>Nome: {item.nome}</h1>
            <h1>Comentario: {item.comentario}</h1>
            <button className="button-like" onClick={like} >Boa</button><b> {number}</b> <br/>
            <button className="button-like" onClick={desLike} >Ruim</button><b> {downNumber}</b>
            <br/>
          </div>  
        ))}
      
          
    </div>



   </div>
        </div>
       
        
    );
};