import React, {Component} from 'react'

class NewFighterForm extends Component {
render() {
    return (
        // <form onSubmit={(event) => this.props.handleSubmit(event)} >
        //     <input type="text" name="firstname" placeholder="First Name"/>
        //     <input type="text" name="lastname" placeholder="Last Name"/>
        //     <input type="text" name="weightclass" placeholder="Weight Class" />
        //     <input type="text" name="imgSrc" placeholder="Image URL" />
        //     <button className="ui button" >Create New Fighter!</button>
        // </form>      

        <div className="ui form">
            <div className="fields">
                <form onSubmit={(event) => this.props.handleSubmit(event)} >
                    <div className="field">
                        <input type="text" name="firstname" placeholder="First Name"/>
                    </div>
                    <div className="field">
                        <input type="text" name="lastname" placeholder="Last Name"/>
                    </div>
                    <div className="field">
                        <input type="text" name="weightclass" placeholder="Weight Class" />
                    </div>
                    <div className="field">
                        <input type="text" name="imgSrc" placeholder="Image URL" />
                    </div>
                    <div id="button">
                        <button className="ui button" >Create New Fighter!</button>
                    </div>
                </form>
            </div>
        </div>



    )
}
}

export default NewFighterForm;