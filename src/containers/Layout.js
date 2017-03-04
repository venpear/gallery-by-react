import React from 'react';
import '../styles/App.css'
 export default class Loayout extends React.Component{
   render(){
     return (
       <div className="blogContainer">
         {this.props.children}
       </div>
     )
   }
 }
