import './card.styles.css'


const Card = ({monster}) => {

    const {id,email,name} = monster

    return(
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} width={'180px'} height={'180p'}/>
            <h2>{name}</h2>
            <p>{email}</p>

        </div> 
        )
}


export default Card;




// import { Component } from "react";
// import './card.styles.css'

// class Card extends Component{


//     render(){
//         const {id,email,name} = this.props.monster

//         return(
//         <div className="card-container" key={id}>
//             <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} width={'180px'} height={'180p'}/>
//             <h2>{name}</h2>
//             <p>{email}</p>

//         </div> 
//         )
//     }
// }

// export default Card;
