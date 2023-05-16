import './search-box.styles.css'

const Searchbox = ({onChangeHandler,className,placeholder}) => (

               <input 
                    className={` search-box ${className}`}
                    type="search" 
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />  
        ) 
export default Searchbox






// import { Component } from "react";
// import './search-box.styles.css'

// class Searchbox extends Component{

//     render(){
//         const {onChangeHandler} = this.props
//         return(
            
//                 <input 
//                     className={` search-box ${this.props.className}`}
//                     type="search" 
//                     placeholder={this.props.placeholder}
//                     onChange={onChangeHandler}
//                 />
            
//         )
//     }
// }



// export default Searchbox