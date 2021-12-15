const initialState = {
    
    boosts: [
    
        { galaxyId:'galaxy0', id:'galaxy0boost0',   cost:1e+4,      count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost1',   cost:1e+5,      count:0, canBuy:false, modifier:{ type:'darkmatter', galaxyId:'galaxy0', coeff:2  } },
        { galaxyId:'galaxy0', id:'galaxy0boost2',   cost:1e+8,      count:0, canBuy:false, modifier:{ type:'darkmatter', galaxyId:'galaxy0', coeff:2  } },
        { galaxyId:'galaxy0', id:'galaxy0boost3',   cost:1e+9,      count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:5  } },
        { galaxyId:'galaxy0', id:'galaxy0boost4',   cost:1e+11,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:9  } },
        { galaxyId:'galaxy0', id:'galaxy0boost5',   cost:2.5e+7,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost6',   cost:2.5e+7,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost7',   cost:2.5e+7,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost8',   cost:2.5e+7,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost9',   cost:2.5e+8,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost10',  cost:2.5e+8,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost11',  cost:2.5e+8,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost12',  cost:2.5e+8,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost13',  cost:2.5e+10,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost14',  cost:2.5e+10,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost15',  cost:2.5e+10,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost16',  cost:2.5e+10,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost17',  cost:1e+12,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:11 } },
        { galaxyId:'galaxy0', id:'galaxy0boost18',  cost:2.5e+14,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost19',  cost:7.5e+14,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost20',  cost:2e+15,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost21',  cost:5e+15,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost22',  cost:1e+16,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost23',  cost:2.5e+16,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost24',  cost:7.5e+16,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost25',  cost:2e+17,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost26',  cost:4e+17,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost27',  cost:1e+18,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost28',  cost:1e+21,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:15 } },
        { galaxyId:'galaxy0', id:'galaxy0boost29',  cost:1e+22,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost30',  cost:1e+22,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost31',  cost:1e+22,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost32',  cost:1e+22,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost33',  cost:1e+22,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT5' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost34',  cost:1e+23,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost35',  cost:1e+23,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost36',  cost:1e+23,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost37',  cost:1e+23,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost38',  cost:1e+23,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT5' ], coeff:75 } },
        { galaxyId:'galaxy0', id:'galaxy0boost39',  cost:1e+31,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:100 } },
        { galaxyId:'galaxy0', id:'galaxy0boost40',  cost:1e+32,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:100 } },
        { galaxyId:'galaxy0', id:'galaxy0boost41',  cost:1e+33,     count:0, canBuy:false, modifier:{ type:'darkmatter', galaxyId:'galaxy0', coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost42',  cost:1e+34,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:15 } },
        { galaxyId:'galaxy0', id:'galaxy0boost43',  cost:1e+36,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost44',  cost:1e+40,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:5  } },
        { galaxyId:'galaxy0', id:'galaxy0boost45',  cost:1e+42,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:5  } },
        { galaxyId:'galaxy0', id:'galaxy0boost46',  cost:2e+42,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost47',  cost:1e+47,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:4  } },
        { galaxyId:'galaxy0', id:'galaxy0boost48',  cost:2e+47,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:6  } },
        { galaxyId:'galaxy0', id:'galaxy0boost49',  cost:7e+47,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost50',  cost:2e+48,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost51',  cost:2.5e+49,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost52',  cost:5e+50,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost53',  cost:2e+52,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost54',  cost:8e+52,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost55',  cost:1.5e+53,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost56',  cost:3e+53,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost57',  cost:5e+53,     count:0, canBuy:false, modifier:{ type:'darkmatter', galaxyId:'galaxy0', coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost58',  cost:1e+54,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost59',  cost:4e+54,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost60',  cost:9e+54,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost61',  cost:2.5e+55,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost62',  cost:7.5e+55,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost63',  cost:1.77e+56,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost64',  cost:3e+56,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost65',  cost:5e+56,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost66',  cost:8e+56,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost67',  cost:1e+57,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost68',  cost:3e+61,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:30 } },
        { galaxyId:'galaxy0', id:'galaxy0boost69',  cost:3e+61,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:30 } },
        { galaxyId:'galaxy0', id:'galaxy0boost70',  cost:3e+61,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:30 } },
        { galaxyId:'galaxy0', id:'galaxy0boost71',  cost:3e+61,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:30 } },
        { galaxyId:'galaxy0', id:'galaxy0boost72',  cost:3e+61,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT6' ], coeff:30 } },
        { galaxyId:'galaxy0', id:'galaxy0boost73',  cost:1e+62,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:5  } },
        { galaxyId:'galaxy0', id:'galaxy0boost74',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost75',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost76',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost77',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost78',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost79',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost80',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost81',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost82',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost83',  cost:2e+63,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost84',  cost:1e+65,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:7  } },
        { galaxyId:'galaxy0', id:'galaxy0boost85',  cost:1e+66,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost86',  cost:4e+66,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost87',  cost:1.3e+67,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost88',  cost:2e+67,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost89',  cost:2.9e+67,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost90',  cost:3.8e+67,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost91',  cost:5.2e+67,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost92',  cost:6.7e+67,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost93',  cost:7.2e+67,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost94',  cost:9.6e+67,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost95',  cost:1.25e+68,  count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:50 } },
        { galaxyId:'galaxy0', id:'galaxy0boost96',  cost:7.77e+68,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:7.777777 } },
        { galaxyId:'galaxy0', id:'galaxy0boost97',  cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost98',  cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost99',  cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost100', cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost101', cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT5' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost102', cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT6' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost103', cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT7' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost104', cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT8' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost105', cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT9' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost106', cost:5e+69,     count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT0' ], coeff:10 } },
        { galaxyId:'galaxy0', id:'galaxy0boost107', cost:1e+72,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost108', cost:5e+72,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost109', cost:2.2e+73,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost110', cost:4.4e+73,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost111', cost:1.11e+74,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost112', cost:2.22e+74,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost113', cost:3.33e+74,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost114', cost:4.44e+74,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost115', cost:5.55e+74,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost116', cost:6.66e+74,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost117', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost118', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost119', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost120', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost121', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT5' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost122', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT6' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost123', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT7' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost124', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT8' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost125', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT9' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost126', cost:2.5e+76,   count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT0' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost127', cost:1.1e+79,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost128', cost:2.7e+79,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost129', cost:4.3e+79,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost130', cost:8.7e+79,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost131', cost:1.9e+80,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost132', cost:3.21e+80,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost133', cost:4.95e+80,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost134', cost:6e+80,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost135', cost:7.25e+80,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost136', cost:8.98e+80,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost137', cost:3e+84,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:13.11 } },
        { galaxyId:'galaxy0', id:'galaxy0boost138', cost:1.3e+88,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:5  } },
        { galaxyId:'galaxy0', id:'galaxy0boost139', cost:3e+90,     count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost140', cost:1.3e+94,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:4  } },
        { galaxyId:'galaxy0', id:'galaxy0boost141', cost:2.4e+97,   count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:5  } },
        { galaxyId:'galaxy0', id:'galaxy0boost142', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost143', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost144', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost145', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost146', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT5' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost147', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT6' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost148', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT7' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost149', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT8' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost150', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT9' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost151', cost:1e+102,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT0' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost152', cost:3.33e+110, count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost153', cost:1e+114,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost154', cost:2e+115,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost155', cost:5e+115,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost156', cost:1e+116,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost157', cost:2e+116,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost158', cost:3e+116,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost159', cost:4e+116,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost160', cost:5e+116,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost161', cost:7.5e+116,  count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost162', cost:2e+117,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost163', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost164', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost165', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost166', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost167', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT5' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost168', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT6' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost169', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT7' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost170', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT8' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost171', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT9' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost172', cost:1e+129,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT0' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost173', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT1' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost174', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT2' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost175', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT3' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost176', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT4' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost177', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT5' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost178', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT6' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost179', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT7' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost180', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT8' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost181', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT9' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost182', cost:1e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0' ], coeff:3  } },
        { galaxyId:'galaxy0', id:'galaxy0boost183', cost:2e+138,    count:0, canBuy:false, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:19 } },
        { galaxyId:'galaxy0', id:'galaxy0boost184', cost:2e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT2' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost185', cost:2e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT5' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost186', cost:2e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT6' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost187', cost:2e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT8' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost188', cost:2e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT3' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost189', cost:2e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT0' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost190', cost:3e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT1' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost191', cost:3e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT4' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost192', cost:3e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT7' ], coeff:25 } },
        { galaxyId:'galaxy0', id:'galaxy0boost193', cost:4e+138,    count:0, canBuy:false, modifier:{ type:'count',  shipIds:[ 'galaxy0shipT9' ], coeff:25 } },
    ],
}

export const state = () => ({
    ...initialState
})

export const getters = {
    
    saveData:(state) => (galaxyId) => {
        
        let boosts = state.boosts.filter(boost => boost.galaxyId == galaxyId && boost.count != 0)
        
        let data = []
        boosts.forEach(boost => {
            
            data.push(boost.id)
        })
        
        return data
    },
    
    purchasedList: (state) => {
        
        return state.boosts.filter(boost => boost.count > 0)
    },    
    
    purchasedListByGalaxy: (state) => (galaxyId) => {
        
        return state.boosts.filter(boost => boost.galaxyId === galaxyId && boost.count > 0)
    },    
    
    currentListByGalaxy: (state) => (galaxyId) => {
        
        return state.boosts.filter(boost => boost.galaxyId === galaxyId && boost.count <= 0)
    },
}

export const actions = {
    
    load({ state, commit }, payload) {
        
        payload.data.forEach(boostId => {
            
            commit('setCount', { boostId:boostId, value:1 })
        })
    },
}

export const mutations = {
    
    reset(state, payload) {
        
        let boosts = state.boosts.filter(boost => boost.galaxyId == payload.galaxyId)
        boosts.forEach(boost => {
            
            boost.count = 0
        })
    },
    
    setCount(state, payload) {
        
        let boost = state.boosts.find(boost => boost.id === payload.boostId)
        boost.count = payload.value
    },
    
    setCanBuy(state, payload) {
        
        let boost = state.boosts.find(boost => boost.id === payload.boostId)
        boost.canBuy = payload.value
    },
}