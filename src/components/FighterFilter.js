import React, {Component} from 'react'
import Select from 'react-select';

const style = {
    toggle: {
        marginLeft: "40px"
    }
}


const options = [
    { value: 'Strawweight', label: 'Strawweight' },
    { value: 'Flyweight', label: 'Flyweight' },
    { value: 'Bantamweight', label: 'Bantamweight' },
    { value: 'Featherweight', label: 'Featherweight' },
    { value: 'Lightweight', label: 'Lightweight' },
    { value: 'Welterweight', label: 'Welterweight' },
    { value: 'Middleweight', label: 'Middleweight' },
    { value: 'Light_Heavyweight', label: 'Light Heavyweight' },
    { value: 'Cruiserweight', label: 'Cruiserweight' },
    { value: 'Heavyweight', label: 'Heavyweight' }
  ]

class FighterFilter extends Component {
    render() {
        return(
            <div className="fighter-filter">
                <div className="ui icon input medium">
                    <input onChange={(event) => this.props.handleSearch(event.target.value)} type="text" placeholder="Enter Fighter's Name" />
                    <i className="search icon"></i>
                </div>

                <br/>
                <br/>

                <div className="ui toggle checkbox">
                    <input name="public" onChange={(event) => this.props.handleActiveFighterCheckbox(event.target.checked)} type="checkbox" />
                    <label>Show Active Fighters Only </label>
                </div>

                <div style={style.toggle} className="ui toggle checkbox">
                    <input name="public" onChange={(event) => this.props.handleTitleHolderCheckbox(event.target.checked)} type="checkbox" />
                    <label>Show Title Holders Only </label>
                </div>

                <br/>
                <br/>
                
                <Select
                    onChange={(value) => this.props.handleWeightClassFilter(value)}
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />

                {/* <br/>
                <br/> */}
            </div>
        )
    }
}

export default FighterFilter;