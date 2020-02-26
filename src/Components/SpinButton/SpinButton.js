import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {Casino} from "@material-ui/icons";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class SpinButton extends Component {
    render() {
        const that=this,
            {onSpin, changeBalance, disabled} = that.props;

        return (
            <Button
                variant='contained'
                color='secondary'
                disabled={disabled}
                style={{
                    margin     : 10,
                    background : "black"
                }}
                onClick={() => {
                    const reel1 = getRandomInt(1, 10);
                    const reel2 = getRandomInt(1, 10);
                    const reel3 = getRandomInt(1, 10);
                    changeBalance();
                    onSpin({reel1, reel2, reel3});
                }}
                startIcon={<Casino/>}
            >
                Spin
            </Button>
        );
    }
}

export default SpinButton;
