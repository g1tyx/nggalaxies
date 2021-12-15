const initialState = {
    
    objectives: [
        
        { galaxyId:'galaxy0', id:'galaxy0objective0',  threshold:25,   count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective1',  threshold:50,   count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective2',  threshold:100,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective3',  threshold:200,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective4',  threshold:300,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective5',  threshold:400,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective6',  threshold:500,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective7',  threshold:600,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective8',  threshold:666,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective9',  threshold:700,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective10', threshold:777,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective11', threshold:800,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective12', threshold:900,  count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective13', threshold:1000, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective14', threshold:1100, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective15', threshold:1111, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective16', threshold:1200, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective17', threshold:1300, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective18', threshold:1400, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective19', threshold:1500, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective20', threshold:1600, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective21', threshold:1700, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective22', threshold:1800, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective23', threshold:1900, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective24', threshold:2000, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective25', threshold:2100, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective26', threshold:2200, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective27', threshold:2222, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective28', threshold:2300, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective29', threshold:2400, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective30', threshold:2500, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective31', threshold:2600, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective32', threshold:2700, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective33', threshold:2800, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective34', threshold:2900, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective35', threshold:3000, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective36', threshold:3100, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective37', threshold:3200, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective38', threshold:3300, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective39', threshold:3333, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective40', threshold:3400, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective41', threshold:3500, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective42', threshold:3600, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective43', threshold:3700, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective44', threshold:3800, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective45', threshold:3900, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective46', threshold:4000, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective47', threshold:4100, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective48', threshold:4200, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective49', threshold:4300, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective50', threshold:4400, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective51', threshold:4500, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective52', threshold:4600, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective53', threshold:4700, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective54', threshold:4800, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective55', threshold:4900, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
        { galaxyId:'galaxy0', id:'galaxy0objective56', threshold:5000, count:0, modifier:{ type:'damage', shipIds:[ 'galaxy0shipT0', 'galaxy0shipT1', 'galaxy0shipT2', 'galaxy0shipT3', 'galaxy0shipT4', 'galaxy0shipT5', 'galaxy0shipT6', 'galaxy0shipT7', 'galaxy0shipT8', 'galaxy0shipT9' ], coeff:2 } },
    ],
}

export const state = () => ({
    ...initialState
})

export const getters = {
    
    saveData:(state) => (galaxyId) => {
        
        let objectives = state.objectives.filter(objective => objective.galaxyId == galaxyId && objective.count != 0)
        
        let data = []
        objectives.forEach(objective => {
            
            data.push(objective.id)
        })
        
        return data
    },
    
    purchasedList: (state) => {
        
        return state.objectives.filter(objective => objective.count > 0)
    },    
    
    currentListByGalaxy: (state) => (galaxyId) => {
        
        return state.objectives.filter(objective => objective.galaxyId === galaxyId && objective.count <= 0)
    },    
}

export const actions = {
    
    load({ state, commit }, payload) {
        
        payload.data.forEach(objectiveId => {
            
            commit('setCount', { objectiveId:objectiveId, value:1 })
        })
    },
}

export const mutations = {
    
    reset(state, payload) {
        
        let objectives = state.objectives.filter(objective => objective.galaxyId == payload.galaxyId)
        objectives.forEach(objective => {
            
            objective.count = 0
        })
    },
    
    setCount(state, payload) {
        
        let objective = state.objectives.find(objective => objective.id === payload.objectiveId)
        objective.count = payload.value
    },
}