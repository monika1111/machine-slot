import React, {Component} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import ReelTable from "./Components/ReelsTable/ReelTable";
import PayTable from "./Components/PayTable/PayTable";
import DebugArea from "./Components/DebugArea/DebugArea";
import Grid from "@material-ui/core/Grid";
import {symbolNames} from "./lib/Constants"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        reelsStartValues  : {
        reel1 : 1,
        reel2 : 1,
        reel3 : 1
        },
        balance           : 5000,
        isDebugging       : false,
        isSpinning        : false,
        selectedPositions : {
            left   : "",
            center : "",
            right  : "",
        },
        selectedSymbols   : {
            left   : symbolNames.threeBar,
            center : symbolNames.threeBar,
            right  : symbolNames.threeBar
        },
        winLines          : [],
        winPrizes         : []

    }
  }

    changeBalance = (value) => this.setState({balance : value});

  onSpin = (info) => {
      const {reelsStartValues} = this.state;

      for (let variable in info) {
          if(info[variable] === reelsStartValues[variable]){
              info[variable] +=1;
          }
      }

      this.setState({reelsStartValues : info, isSpinning : true, winLines : [], winPrizes : []})
  };


  render() {
    const that = this,
        {reelsStartValues, winLines, winPrizes, selectedSymbols, isDebugging, balance, isSpinning, selectedPositions} = that.state;

      return (
          <div style={{
              height     : '100%',
              background : "linear-gradient(to right, #2c3e50, #fd746c)"
          }}>
          <CssBaseline/>

              <Grid
                  style={{height : "100%"}}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
              >
                  <Grid item>
                      <PayTable winPrizes={winPrizes}/>
                  </Grid>
                  <Grid item>
                      <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center">
                          <Grid item>
                              <ReelTable
                                  winLines={winLines}
                                  isDebugging={isDebugging}
                                  selectedPositions={selectedPositions}
                                  selectedSymbols={selectedSymbols}
                                  values={reelsStartValues}
                                  changeBalance={that.changeBalance}
                                  onStopSpinning={(winLines, winPrizes) =>
                                      that.setState({
                                          isSpinning : false,
                                          winLines,
                                          winPrizes
                                      })}
                                  balance={balance}
                              />
                          </Grid>
                          <Grid item>
                              <DebugArea
                                  isSpinning={isSpinning}
                                  onSpin={that.onSpin}
                                  balance={balance}
                                  changeBalance={that.changeBalance}

                                  isDebugging={isDebugging}
                                  changeDebugMode={(isDebugging) => that.setState({isDebugging})}

                                  selectedPositions={selectedPositions}
                                  selectedSymbols={selectedSymbols}

                                  onPositionChange={(newPoses) => that.setState({selectedPositions : newPoses})}
                                  onSymbolChange={(newSymbols) => that.setState({selectedSymbols : newSymbols})}
                              />
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </div>
    );
  }
}

export default App;
