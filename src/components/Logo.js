import React, { Component } from "react";


class Logo extends Component {
    getLogo() {
        return require('../ufc-logo.jpg')
    }

    render() {
        return(
            <div></div>
            // <img class="ui centered medium image" src={require('../ufc-logo.jpg')}>
        )
    }
}

export default Logo;