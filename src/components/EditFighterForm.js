import React, {Component} from 'react'

class EditFighterForm extends Component {

    // checkEditedValues = (event) => {
    //     event.preventDefault()
    //     console.log(event.target.firstname.value)
    //     console.log(event.target.lastname.value)
    //     console.log(event.target.weightclass.value)
    //     console.log(event.target.imgSrc.value)   
    // }

    render() {
        const {first_name, last_name, wins, losses, weight_class, title_holder, fighter_status, imgSrc} = this.props.fighter

        return(
            <div className="ui form">
                <div className="fields">
                    <form onSubmit={(event) => this.props.handleEditFighter(event)} >
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="firstname" placeholder={first_name} defaultValue={first_name}/>
                        </div>
                        <div className="field">
                            <label>last Name</label>
                            <input type="text" name="lastname" placeholder={last_name} defaultValue={last_name} />
                        </div>
                        <div className="field">
                            <label>Weight Class</label>
                            <input type="text" name="weightclass" placeholder={weight_class} defaultValue={weight_class} />
                        </div>
                        <div className="field">
                            <label>Image URL</label>
                            <input type="text" name="imgSrc" placeholder={imgSrc} defaultValue={imgSrc} />
                        </div>
                        <div id="button">
                            <button className="ui button" >Save!</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditFighterForm;