export default function Movi(props){
const {Title,Year,imdbID,Type,Poster} = props;
return (
    <div key = {imdbID} className="card ">
    <div className="card-image waves-effect waves-block waves-light">
      <img  className="activator"  src={Poster}  alt ="logo"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">{Title}</i></span>
      <p>{Year}</p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">{Type}</i></span>

    </div>
  </div>
)
}