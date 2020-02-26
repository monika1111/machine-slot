import React, {Component} from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

class BalanceInput extends Component {
    render() {
        const {value, changeBalance,disabled} = this.props;
        return (
            <TextField
                disabled={disabled}
                variant="outlined"
                style={{color : "#fff", width : 100}}
                label="Coins"
                size="small"
                value={value}
                onChange={(e) => {
                    const newValue = Number(e.target.value);
                    if(newValue >= 0 && newValue <= 5000) {
                        changeBalance(e.target.value)
                    }
                }}
                InputProps={{
                    startAdornment : (<InputAdornment position="start">$</InputAdornment>)
                }}
            />
        );
    }
}

export default BalanceInput;
