import './App.css';
import { useEffect, useState} from 'react';
import CardList from './components/card-list/Cardlist';
import SearchBox from './components/search-box/Searchbox';
import'./components/search-box/search-box.styles.css';



const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title,setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log('rerendered')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />

      <br />

      <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='set title'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};


// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters:[ ],
//       searchField: ' '
      
//     }
//     // console.log('constructor');

//   }

//   componentDidMount() {
//     // console.log('component did mount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       // .then(users => this.setState({monsters:users}))
//       .then(users => this.setState(() => {
//         return {monsters:users}
//       },
//       // () => {
//       //   console.log(this.state);
//       // }
//       ))
      
//   }

//    onSearchChange = ((event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
   
//     this.setState(() => {
//       return {searchField}// equavilant to {searchField:searchField}
//     })
    
//   })

  
//   render(){
//     // console.log('render from app component');
//     const {monsters,searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <Searchbox 
//           onChangeHandler={onSearchChange} 
//           placeholder = "search monster" 
//           className = "monster-search-box"
//         />
    
//         <Cardlist monsters={filteredMonsters} />
        
//       </div>
//     );

//   }
  
// }

export default App;
