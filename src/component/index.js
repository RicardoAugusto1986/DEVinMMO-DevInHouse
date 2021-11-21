import React from "react";
import Proptypes from 'prop-types';
import {WrapPageCard, WrapPageCard1} from '../styles/styleshome';



class Cartao extends React.Component{

    render(){
        return(
            <div  className="card" ><br/>
            
            <img  className="list-imag"  src={this.props.picture} />
           
            <h1>{this.props.id}</h1>
            <h1> Nome: {this.props.name}</h1>
            <h1 >Descrição: {this.props.descrition}</h1>
            <h1>Plataforma: {this.props.platform}</h1>
            <br/><br/>
            <h1>Clique e Saiba Mais</h1>
              
                                
        </div>
        )
    }
}

class Comentarios extends React.Component{

    render(){
        return(
            <div  className="card" ><br/>
            
            <img  className="list-imag"  src={this.props.picture} />
           
            <h1>{this.props.id}</h1>
            <h1> Nome: {this.props.name}</h1>
            <h1 >Descrição: {this.props.descrition}</h1>
            <h1>Plataforma: {this.props.platform}</h1>
              
                                
        </div>
        )
    }
}

Cartao.propTypes = {}
export default Cartao;