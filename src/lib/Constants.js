import barImg from '../img/bar.png'
import twoBarImg from '../img/2bar.png'
import threeBarImg from '../img/3bar.png'
import sevenImg from '../img/7.png'
import cherryImg from '../img/cherry.png'

export const symbolNames = {
    threeBar: 'threeBar',
    bar: 'bar',
    twoBar: 'twoBar',
    seven: 'seven',
    cherry: 'cherry'
};

export const markToSymbolMapping = {
    1 : symbolNames.threeBar,
    2 : symbolNames.bar,
    3 : symbolNames.twoBar,
    4 : symbolNames.seven,
    5 : symbolNames.cherry
}

export const marks = [
    {
        value : 1,
        label : "3Bar"
    },
    {
        value : 2,
        label : "Bar"
    },
    {
        value : 3,
        label : "2Bar"
    },
    {
        value : 4,
        label : "7"
    },
    {
        value : 5,
        label : "Cherry"
    }
];

export const symbols = {
    1: symbolNames.threeBar,
    2: symbolNames.threeBar,
    3: symbolNames.bar,
    4: symbolNames.bar,
    5: symbolNames.twoBar,
    6: symbolNames.twoBar,
    7: symbolNames.seven,
    8: symbolNames.seven,
    9: symbolNames.cherry,
    10: symbolNames.cherry,
};

export const prizes = {
    cherry : {
        topLineWin : 2000,
        centerLineWin : 1000,
        bottomLineWin : 4000,
        combinedSeven : 75
    },
    bar : {
        tripletLineWin : 10,
        pairAnyLine : 5
    },
    twoBar : {
        tripletLineWin : 20
    },
    threeBar : {
        tripletLineWin : 50
    },
    seven : {
        tripletLineWin : 150
    }
};

export const prizeRows = [
    {
        name: 'Top Line',
        prize: 2000,
        image: [cherryImg, cherryImg, cherryImg]
    },
    {
        name: 'Center Line',
        prize: 1000,
        image: [cherryImg, cherryImg, cherryImg]
    },
    {
        name: 'Bottom Line',
        prize: 4000,
        image: [cherryImg, cherryImg, cherryImg]
    },
    {
        name: 'Any Line',
        prize: 150,
        image: [sevenImg, sevenImg, sevenImg]
    },
    {
        name: 'Combination Any Line',
        prize: 75,
        image:[cherryImg, sevenImg, '']
    },
    {
        name: 'Any Line',
        prize: 50,
        image: [threeBarImg, threeBarImg, threeBarImg]
    },
    {
        name:'Any Line',
        prize: 20,
        image: [twoBarImg, twoBarImg, twoBarImg]
    },
    {
        name: 'Any Line',
        prize: 10,
        image: [barImg, barImg, barImg]
    },
    {
        name:'Combination Any Line',
        prize:5,
        image:[barImg, barImg, '']
    }
];
