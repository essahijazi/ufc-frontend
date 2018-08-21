import React, {Component} from 'react'
import EditFighterForm from './EditFighterForm'

class DetailFighter extends Component {
    
    constructor() {
        super()
        this.state ={
            clickedEdit: false
        }
    }
    
    render() {
        const {first_name, last_name, wins, losses, weight_class, title_holder, fighter_status, imgSrc} = this.props.fighter
        return(
            <div>
                 <div className="ui centered card " >
                    <div className="image" >
                        <img src={imgSrc} alt="fighter" />
                    </div>
                    <div className="content">
                        <p> {`${first_name} ${last_name}`}</p>
                        <p>Wins: {wins} </p>
                        <p>Losses: {losses} </p>
                        <p>Weight Class: {weight_class.includes("Women") ? weight_class.slice(6) : weight_class} </p>
                        <p>Title Holder: {title_holder ? "Yes" : "No"} </p>
                        <p>Fighter Status: {fighter_status === "Active" ? "Active" : "Not Active"} </p>
                        <button onClick={this.props.handleReturnToAllFighters}>All Fighters</button>
                        <button onClick={() => this.setState({clickedEdit: !this.state.clickedEdit})}>Edit Fighter</button>
                    </div>
                </div>

                {this.state.clickedEdit ? <EditFighterForm handleEditFighter={this.props.handleEditFighter} fighter={this.props.fighter} /> : null}

            </div>
        )
    }
}

export default DetailFighter;