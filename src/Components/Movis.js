import Movi from "./Movi";

export default function Movis(props){
const {movis} = props;

return(
    <div className="infoo">
        {movis.map(Element =>(
            <div className="movis"><Movi key= {Element.imdbID} {...Element}/></div>
        ))}
    </div>
)
}