import React, {Component} from 'react';
import Slider from "@material-ui/core/Slider";
import {marks} from "../../lib/Constants";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => {
    return {
        markLabel       : {
            fontSize : "0.2em"
        },
        markLabelActive : {
            color : "rgba(0, 0, 0, 0.54)"
        }

    }
};

class SymbolSelect extends Component {
    render() {
        const {onChange, classes, disabled} = this.props;
        return (
            <div style={{margin : 15}}>
                <Slider
                    classes={{
                        markLabel       : classes.markLabel,
                        markLabelActive : classes.markLabelActive
                    }}
                    disabled={disabled}
                    defaultValue={1}
                    onChange={(e, value) => onChange(value)}
                    aria-labelledby="discrete-slider-always"
                    step={1}
                    min={1}
                    max={5}
                    marks={marks}
                    valueLabelDisplay="on"
                />
            </div>
        );
    }
}

export default withStyles(styles)(SymbolSelect);
