import React, {Component} from 'react';
import PositionSelect from "../PositionSelect/PositionSelect";
import SymbolSelect from "../SymbolSelect/SymbolSelect";
import SpinButton from "../SpinButton/SpinButton";
import BalanceInput from "../BalanceInput/BalanceInput";
import Checkbox from "../Checkbox/Checkbox";
import {markToSymbolMapping} from "../../lib/Constants";

class DebugArea extends Component {

    onPositionChange(newPos) {
        const {selectedPositions, onPositionChange} = this.props;
        const newPositions = Object.assign({}, selectedPositions, newPos);
        onPositionChange(newPositions)
    }

    onSymbolChange(value, reelPosition) {
        const {selectedSymbols, onSymbolChange} = this.props;
        const symbol = markToSymbolMapping[value];

        const newSymbols = Object.assign({}, selectedSymbols, {[reelPosition] : symbol});
        onSymbolChange(newSymbols)
    }

    render() {
        const {onSpin, isSpinning, balance, selectedPositions, isDebugging, changeDebugMode, changeBalance} = this.props;

        return (
            <table className="debugArea">
                <tbody>
                    <tr>
                        <td><SpinButton
                            disabled={isSpinning}
                            onSpin={onSpin}
                            changeBalance={() => changeBalance(balance - 1)}/>
                        </td>
                        <td>
                            <BalanceInput
                                value={balance}
                                disabled={isSpinning}
                                changeBalance={changeBalance}
                            />
                        </td>
                        <td>
                            <Checkbox
                                disabled={isSpinning}
                                changeDebugMode={changeDebugMode}
                                isDebugging={isDebugging}/>
                        </td>
                    </tr>
                    <tr style={{height : 100}}>
                        <td>
                            <PositionSelect
                                disabled={isSpinning || !isDebugging}
                                label={"Left"}
                                value={selectedPositions.left}
                                onChange={(newVal) => this.onPositionChange({left : newVal})}/>
                        </td>
                        <td>
                            <PositionSelect
                                disabled={isSpinning || !isDebugging}
                                label={"Center"}
                                value={selectedPositions.center}
                                onChange={(newVal) => this.onPositionChange({center : newVal})}/>
                        </td>

                        <td>
                            <PositionSelect
                                disabled={isSpinning || !isDebugging}
                                label={"Right"}
                                value={selectedPositions.right}
                                onChange={(newVal) => this.onPositionChange({right : newVal})}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SymbolSelect
                                disabled={isSpinning || !isDebugging}
                                onChange={(value) => this.onSymbolChange(value, "left")}
                            />
                        </td>
                        <td>
                            <SymbolSelect
                                disabled={isSpinning || !isDebugging}
                                onChange={(value) => this.onSymbolChange(value, "center")}
                            />
                        </td>
                        <td>
                            <SymbolSelect
                                disabled={isSpinning || !isDebugging}
                                onChange={(value) => this.onSymbolChange(value, "right")}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default DebugArea;
