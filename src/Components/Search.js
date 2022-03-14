import React from "react";

class Search extends React.Component{
    state = {
        search:'panda',
        type:'all'
    }
    onkey = (e)=>{
 if(e.key==='Enter'){
     this.props.serachMovis(this.state.search,this.state.type)
 }
    }
hendlFilter = (e)=>{
    this.setState({type:e.target.dataset.type}, ()=>{
        this.props.serachMovis(this.state.search, this.state.type)
    })
}

  render(){
    return(
        <div class="row">
        <div class="input-field col s12">
          <input id="search" autoComplete="off"  onKeyDown={this.onkey} type="search" value={this.state.search} onChange = {(e)=>this.setState({search:e.target.value})} class="validate" placeholder="search" />
       <button onClick={()=>this.props.serachMovis(this.state.search,this.state.type)} className="btn search-btn">
           Search
       </button>
        </div>
        <div>
        <p>
    <label>
      <input class="with-gap" name="group3" type="radio" datatype="all"  onChange={this.hendlFilter} />
      <span>All</span>
    </label>
    <label>
      <input class="with-gap" name="group3" type="radio" datatype="movie" onChange={this.hendlFilter}  />
      <span>Movis Only</span>
    </label>
    <label>
      <input class="with-gap" name="group3" type="radio" datatype="series"  onChange={this.hendlFilter} />
      <span>Seris on</span>
    </label>
  </p>
        
        </div>
      </div>
    
    )

  }
    
    
}
export default  Search;