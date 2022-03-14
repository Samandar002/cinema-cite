import React from "react";
import Loader from "../Components/Loader";
import Movis from "../Components/Movis";
import Search from "../Components/Search";

export default class Main extends React.Component{
    state = {
        movis:[

        ],
        loading : true
    }
    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=67d1c7b9&s=panda')
        .then(response => response.json())
        .then(data=>this.setState({movis:data.Search}))
    }
    serachMovis = (str,type='all')=>{
        fetch(`http://www.omdbapi.com/?apikey=67d1c7b9&s=${str}${type !=='all' ? `&type=${type}`: ''}`)
        .then(response => response.json())
        .then(data=>this.setState({movis:data.Search}))
    }
    render(){
        return(
            <div className="container content">
           
               {this.state.movis.length  ? ( <div>  <Search serachMovis={this.serachMovis}/>    <Movis  movis = {this.state.movis}/> </div>)  : <Loader />}
               
            </div>
        )
    }
}