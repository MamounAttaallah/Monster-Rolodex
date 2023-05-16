import './card-list.styles.css'
import Card from "../card/card";


const Cardlist = ({monsters}) => {
    // const {monsters} = props

    return(
        <div className="card-list">
             {monsters.map((monster) => {
                
                return (
                    <Card key={monster.id} monster={monster}/>
             )})}
        </div>
    )


    }

export default Cardlist;



// class Cardlist extends Component{
   
//     render(){
//         // console.log(this.props.monsters)
//         // console.log('render from cardlist')
//         const {monsters} = this.props;
//         return(
//             <div className="card-list">
//                  {monsters.map((monster) => {
                    
//                     return (
//                         <Card monster={monster}/>
//                  )})}
//             </div>
//         )
//     }
// }


