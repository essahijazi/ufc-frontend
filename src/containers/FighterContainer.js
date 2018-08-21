import React,{ Component } from "react";
import FighterCard from '../components/FighterCard'

class FighterContainer extends Component {
    render() {
        return(
            <div className="ui six column grid">
                
                {this.props.allFighters.map(fighter => {
                    return <FighterCard handleSingleClick={this.props.handleSingleClick} key={fighter.id} fighter={fighter} />
                })}
            </div>
        )
    }
}

export default FighterContainer