import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import imageReg from "../../img/imagesReg";
import {symbols} from "../../lib/Constants";


const styles = {
    root : {
        backgroundColor : "white"
        // margin     : 5,
        // background : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    cell : {
        // padding      : 20,
        // textAlign    : 'center',
        // borderBottom : '1px solid black',
        width  : 110,
        height : 50
    }
};

const mapValueToImage = {
    1 : imageReg.threeBar1,
    2 : imageReg.threeBar2,

    3 : imageReg.oneBar1,
    4 : imageReg.oneBar2,

    5 : imageReg.twoBar1,
    6 : imageReg.twoBar2,

    7 : imageReg.seven1,
    8 : imageReg.seven2,

    9  : imageReg.cherry1,
    10 : imageReg.cherry2,
};

const initialValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const spin = (newStartValue) => {
    const findIndex = initialValues.findIndex((v) => v === newStartValue);

    const sliced = initialValues.slice(findIndex);

    return sliced.concat(initialValues.slice(0, findIndex))
};

const fillArray = (arr, localPosition, value) => {
    const length = arr.length - 1;
    const after = length - localPosition;
    const before = localPosition;

    for(let i = 1; i <= after; i++) {
        const currPosition = localPosition + i;

        const currValue = value + i;

        if(currValue > 10) {
            arr[currPosition] = currValue - 10
        } else
            arr[currPosition] = currValue
    }

    for(let i = 1; i <= before; i++) {
        const currPosition = localPosition - i;
        const currValue = value - i;

        if(currValue <= 0) {
            arr[currPosition] = currValue + 10
        } else
            arr[currPosition] = currValue
    }

    return arr;
};

class Reel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values : initialValues
        };

        this.tick = this.tick.bind(this);
        this.timer = props.stopTime;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const that = this,

            {startValue} = that.props;

        if(prevProps.startValue !== startValue) {
            that.setState({startValue}, () => {
                if(!that.animation)
                    that.animation = requestAnimationFrame(that.tick);
            });
        } else {

        }
    }

    printValuesWithFixed({symbol, position}) {
        const arr = new Array(10);

        const getValueFromSymbol = Object.entries(symbols).find((symbolArray) => symbolArray[1] === symbol)[0];

        const value = Number(getValueFromSymbol);

        arr[position] = value;

        return fillArray(arr, position, value);
    }

    tick() {
        const that = this,
            {fixedValue, isDebugging} = that.props,
            {startValue} = that.state;

        const values = spin(startValue);

        let newStartValue;

        if(startValue === 10) {
            newStartValue = 0
        } else {
            newStartValue = startValue + 1;
        }

        that.timer = that.timer - 16;

        if(that.timer <= 0) {
            that.timer = that.props.stopTime;
            cancelAnimationFrame(that.animation);
            that.animation = null;

            const shouldFix = isDebugging && fixedValue.position !== '';

            if(shouldFix) {
                const fixedValues = that.printValuesWithFixed(fixedValue);

                that.setState({values : fixedValues, startValue : newStartValue}, () => {
                    that.props.onFinish(fixedValues)
                });
            } else {
                that.setState({values, startValue : newStartValue}, () => {
                    that.props.onFinish(values)
                });
            }

        } else {
            that.setState({values, startValue : newStartValue});
            requestAnimationFrame(this.tick);
        }

    }


    render() {
        const that = this,
            {classes} = that.props,
            {values} = that.state;

        return (

            <div className={classes.root}>
                {
                    values.map((value, index) => {
                        if(index >= 0 && index <= 3)
                            return <div key={Math.random()} className={classes.cell}>{
                                <img src={mapValueToImage[value]} alt={value}
                                    style={{
                                        width  : "100%",
                                        height : "100%"
                                    }}/>
                            }</div>;

                        return null;
                    })
                }
            </div>
        );
    }
}

export default withStyles(styles)(Reel);
