import React from "react";
import Countdown from "react-countdown";
import { connect } from "react-redux";



const Timer = (props) => {
    return (
        <div>
            <Countdown date={Date.now() + Number(props.form.values.timeSet)}></Countdown>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Timer);