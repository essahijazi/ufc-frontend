import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FighterContainer from './containers/FighterContainer'
import NewFighterForm from './components/NewFighterForm'
import DetailFighter from './components/DetailFighter'
import FighterFilter from './components/FighterFilter'
import Navbar from './components/Navbar'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      allFighters: [],
      detailFighter: null,
      searchTerm: '',
      fighterStatusCheckboxValue: '',
      titleHolderCheckboxValue: null,
      weightClassFilterArray: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/allfighters`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({allFighters: json})
    })
  }

  /************* All of the fighter filter types *************/

  filterSearchTerm = () => {
    return this.state.allFighters.filter(fighter => {
      return `${fighter.first_name} ${fighter.last_name}`.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  filterFighterStatus = () => {
    

    return this.filterSearchTerm().filter( fighter => {
      return fighter.fighter_status.includes(this.state.fighterStatusCheckboxValue)
    })
  }

  filterTitleHolder = () => {
    if(this.state.titleHolderCheckboxValue) {
      return this.filterFighterStatus().filter(fighter => fighter.title_holder === this.state.titleHolderCheckboxValue)
    }else {
      return this.filterFighterStatus()
    }
  }

  filterWeightClass = () => {
    
    if(this.state.weightClassFilterArray.length > 0) {     
      return this.filterTitleHolder().filter(fighter => {
        return this.state.weightClassFilterArray.includes(fighter.weight_class.includes("Women_") ? fighter.weight_class.slice(6) : fighter.weight_class)
      })
    }else {
      return this.filterTitleHolder()
    }
  }

  filteredFighterList = () => {
    return this.filterWeightClass()
  }

  /************* End of fighter filter types *************/




  /************* Event Handlers *************/

  handleWeightClassFilter = (weightClassArray) => {
    console.log(weightClassArray.map(weightclass => weightclass.value))
    const weightClassFilters = weightClassArray.map(weightclass => weightclass.value)
    this.setState({weightClassFilterArray: weightClassFilters})
  }

  handleActiveFighterCheckbox = (checkboxValue) => {
    console.log(checkboxValue)
    this.setState({fighterStatusCheckboxValue: checkboxValue ? "Active" : "" }) 
  }

  handleTitleHolderCheckbox = (checkboxValue) => {
    console.log(checkboxValue)
    this.setState({titleHolderCheckboxValue: checkboxValue})
  }

  handleReturnToAllFighters = () => {
    this.setState({detailFighter: null})
  }

  handleDisplayFighterDetails = (fighterObj) => {
    this.setState({detailFighter: fighterObj})
  }

  handleSearch = (searchTerm) => {
    console.log(searchTerm)
    this.setState({searchTerm: searchTerm})
  }

  handleCreateNewFighter = (event) => {
    event.preventDefault()
    
    const {firstname, lastname, weightclass, imgSrc } = event.target
    const data = {
      first_name: firstname.value,
      last_name: lastname.value,
      wins: 0,
      losses: 0,
      weight_class: weightclass.value,
      title_holder: false,
      fighter_status: "Active",
      imgSrc: imgSrc.value
    }
      
    event.target.reset()

    fetch(`http://localhost:3000/createNewFighter`,
      { 
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(jsonData => this.setState({allFighters: jsonData}))

  } 

  handleEditFighter = (event) => {
    event.preventDefault()
    console.log(event.target)

    const currDetailFighter = this.state.detailFighter
    const {firstname, lastname, weightclass, imgSrc } = event.target

    const data = {
      id: currDetailFighter.id,
      first_name: firstname.value ,
      last_name: lastname.value,
      wins: currDetailFighter.wins,
      losses: currDetailFighter.losses,
      weight_class: weightclass.value,
      title_holder: currDetailFighter.title_holder,
      fighter_status: "Active",
      imgSrc: imgSrc.value
    }

    console.log(data)

    fetch(`http://localhost:3000/updateFighterStats`,
      { 
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(jsonData => this.setState({detailFighter: jsonData}))
  }

  handleDeleteFighter = () => {
    console.log(`deleting fighter`)
    const data = this.state.detailFighter

    const index = this.state.allFighters.indexOf(this.state.detailFighter);
    console.log(index)
    console.log(this.state.allFighters[index])

    fetch(`http://localhost:3000/deleteFighter`,
      { 
        method: 'POST',
        body: JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(jsonData => {
        const newAllFighters = this.state.allFighters
        newAllFighters.splice(index, 1),
        this.setState({
          allFighters: newAllFighters,
          detailFighter: null
          
        })
    })
  }

  /************* End of Event Handlers *************/
  

  render() {
    return (
      <div className="App">
        
        {/* <Navbar/> */}

        {this.state.detailFighter ? 
          <DetailFighter 
            fighter={this.state.detailFighter}
            handleReturnToAllFighters={this.handleReturnToAllFighters} 
            handleEditFighter={this.handleEditFighter}
            handleDeleteFighter={this.handleDeleteFighter} /> : 

          <React.Fragment>
            <NewFighterForm handleSubmit={this.handleCreateNewFighter} />

            <FighterFilter 
              handleSearch={this.handleSearch} 
              handleActiveFighterCheckbox={this.handleActiveFighterCheckbox}
              handleTitleHolderCheckbox={this.handleTitleHolderCheckbox}
              handleWeightClassFilter={this.handleWeightClassFilter} />

            <FighterContainer 
              handleSingleClick={this.handleDisplayFighterDetails} 
              allFighters={this.filteredFighterList()} />
          </React.Fragment>
        }

      </div>
    );
  }
}

export default App;
