import React, {Component} from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class PositionSelect extends Component {
    render() {
        const {label, value, onChange, disabled} = this.props;
        return (
            <FormControl disabled={disabled} style={{width : 80}}>
                <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>

                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>Top</MenuItem>
                    <MenuItem value={1}>Center</MenuItem>
                    <MenuItem value={2}>Bottom</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

export default PositionSelect;
