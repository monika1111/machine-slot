import React, {Component} from 'react';
import Reel from "../Reel/Reel";
import {withStyles} from '@material-ui/core/styles';
import {prizes, symbolNames, symbols} from '../../lib/Constants'

const styles = {
    root : {
        position            : "relative",
        display             : "inline-grid",
        gridTemplateColumns : "repeat(3,110px)",
        gridColumnGap       : "1rem",
        margin              : "2rem",
        padding             : 20,
        borderRadius        : 10,
        backgroundColor     : 'black'
    }
};

function isEven(value) {
    return value % 2 === 0;
}

class ReelTable extends Component {
    constructor(props) {
       super(props);

        this.winLines = {
            top    : [],
            center : [],
            bottom : []
       }
    }


    onFinish = (values, position) => {
        if(isEven(values[0])) {
            this.winLines.center.push(symbols[values[1]]);
        } else {
            this.winLines.top.push(symbols[values[0]]);
            this.winLines.bottom.push(symbols[values[2]]);
        }

        if(position === 'right') {
            this.getWins();
        }
    };

    emptyWinLines = () => {
        this.winLines = {
            top: [],
            center: [],
            bottom: []
        }
    };

    getWins = () => {
        const {changeBalance, balance, onStopSpinning} = this.props;
        let totalPrize = 0;

        const winners = [];
        const winPrizes = []

        for(const index in this.winLines){

            let values = this.winLines[index];
            let triplet = values.every(match => match === values[0]);
            let barPair = values.filter(num => num === symbolNames.bar);
            let cherry = values.includes(symbolNames.cherry);
            let seven = values.includes(symbolNames.seven);

            for(let val in prizes){
                if(values.length === 3 && triplet && val === values[0]){

                    if (prizes[val].tripletLineWin) {
                        totalPrize += prizes[val].tripletLineWin;
                        winners.push(index);
                        winPrizes.push(prizes[val].tripletLineWin)
                    } else if (prizes[val].topLineWin && index === 'top') {
                        winners.push(index);
                        winPrizes.push(prizes[val].topLineWin)
                        totalPrize += prizes[val].topLineWin;
                    } else if (prizes[val].centerLineWin && index === 'center') {
                        totalPrize += prizes[val].centerLineWin;
                        winners.push(index)
                        winPrizes.push(prizes[val].centerLineWin)
                    } else if (prizes[val].bottomLineWin && index === 'bottom') {
                        totalPrize += prizes[val].bottomLineWin;
                        winPrizes.push(prizes[val].bottomLineWin)
                        winners.push(index)
                    }
                } else {
                    if (prizes[val].pairAnyLine && barPair.length === 2) {
                        totalPrize += prizes[val].pairAnyLine;
                        winners.push(index)
                        winPrizes.push(prizes[val].pairAnyLine)
                    }
                    if (prizes[val].combinedSeven && cherry && seven) {
                        totalPrize += prizes[val].combinedSeven;
                        winners.push(index)
                        winPrizes.push(prizes[val].combinedSeven)
                    }
                }
            }
        }
        totalPrize += balance;
        changeBalance(totalPrize);
        onStopSpinning(winners, winPrizes);
        this.emptyWinLines();
    };


    renderWinLines() {
        const {winLines} = this.props;

        return winLines.map(item => {

            const topPixel = item === "top" ? 10 : item === "center" ? 60.5 : item === 'bottom' ? 121 : '';

            if(!topPixel)
                return null;

            return <div style={{
                position        : 'absolute',
                top             : topPixel,
                left            : 10,
                right           : 10,
                height          : 110,
                backgroundColor : "red",
                opacity         : 0.5
            }}/>
        })
    }

    render() {
        const that = this,
            {classes, winLines, values, selectedPositions, selectedSymbols, isDebugging} = that.props;

        return (
            <div className={classes.root}>
                {winLines.length ? that.renderWinLines() : null}
                <Reel
                    isDebugging={isDebugging}
                    startValue={values.reel1}
                    fixedValue={{
                        position : selectedPositions.left,
                        symbol   : selectedSymbols.left
                    }}
                    stopTime={2000}
                    onFinish={(values) => this.onFinish(values, 'left')}
                />
                <Reel
                    isDebugging={isDebugging}
                    startValue={values.reel2}
                    fixedValue={{
                        position : selectedPositions.center,
                        symbol   : selectedSymbols.center
                    }}
                    stopTime={2500}
                    onFinish={(values) => this.onFinish(values, 'center')}
                />
                <Reel
                    isDebugging={isDebugging}
                    startValue={values.reel3}
                    fixedValue={{
                        position : selectedPositions.right,
                        symbol   : selectedSymbols.right
                    }}
                    stopTime={3000}
                    onFinish={(values) => this.onFinish(values, 'right')}
                />
            </div>
        );
    }
}

export default withStyles(styles)(ReelTable);
