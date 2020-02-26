import React, {Component} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class Checkbox extends Component {
    render() {
        const {isDebugging, changeDebugMode, disabled} = this.props;
        return (
            <FormControlLabel
                control={
                    <Switch color="primary" disabled={disabled} checked={isDebugging} onChange={({target}) => changeDebugMode(target.checked)}/>
                }
                label="Debug mode"
                labelPlacement="bottom"
            />
        );
    }
}

export default Checkbox;
