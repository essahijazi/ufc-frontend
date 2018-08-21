import React,{Component} from 'react'


class FighterCard extends Component {
    render() {
        const {first_name, last_name, imgSrc} = this.props.fighter
        return(

            <div className="column">
                <div className="ui fluid card " onClick={() => this.props.handleSingleClick(this.props.fighter)} >
                    <div className="image" >
                        <img src={imgSrc} alt="fighter" />
                    </div>
                    <div className="content">
                        <p> {`${first_name} ${last_name}`}</p> 
                    </div>
                </div>
            </div>

           
        )
    }
}

export default FighterCard;
