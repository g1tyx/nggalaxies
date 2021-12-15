const initialState = {
    
    fleets: [
    
        { galaxyId:'galaxy0', id:'galaxy0fleet0',  life:{ base:1e+12,    current:1e+12    } },
        { galaxyId:'galaxy0', id:'galaxy0fleet1',  life:{ base:5e+16,    current:5e+16    } },
        { galaxyId:'galaxy0', id:'galaxy0fleet2',  life:{ base:5e+20,    current:5e+20    } },
        { galaxyId:'galaxy0', id:'galaxy0fleet3',  life:{ base:9e+23,    current:9e+23    } },
        { galaxyId:'galaxy0', id:'galaxy0fleet4',  life:{ base:1e+47,    current:1e+47    } },
        { galaxyId:'galaxy0', id:'galaxy0fleet5',  life:{ base:1e+84,    current:1e+84    } },
        { galaxyId:'galaxy0', id:'galaxy0fleet6',  life:{ base:1e+100,   current:1e+100   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet7',  life:{ base:6e+107,   current:6e+107   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet8',  life:{ base:1e+111,   current:1e+111   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet9',  life:{ base:4.5e+116, current:4.5e+116 } },
        { galaxyId:'galaxy0', id:'galaxy0fleet10', life:{ base:5e+119,   current:5e+119   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet11', life:{ base:1e+123,   current:1e+123   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet12', life:{ base:5e+138,   current:5e+138   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet13', life:{ base:3e+141,   current:3e+141   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet14', life:{ base:2e+144,   current:2e+144   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet15', life:{ base:2.7e+193, current:2.7e+193 } },
        { galaxyId:'galaxy0', id:'galaxy0fleet16', life:{ base:1e+241,   current:1e+241   } },
        { galaxyId:'galaxy0', id:'galaxy0fleet17', life:{ base:1e+265,   current:1e+265   } },
    ],
}

export const state = () => ({
    ...initialState
})

export const getters = {
    
    saveData:(state) => (galaxyId) => {
        
        let fleets = state.fleets.filter(fleet => fleet.galaxyId == galaxyId && fleet.life.current !== fleet.life.base)
        
        let data = []
        fleets.forEach(fleet => {
            data.push({
                
                id: fleet.id,
                life: fleet.life.current,
            })
        })
        
        return data
    },
    
    byId:(state) => (fleetId) => {
        
        return state.fleets.find(fleet => fleet.id === fleetId)
    },
    
    byGalaxy:(state) => (galaxyId) => {
        
        return state.fleets.filter(fleet => fleet.galaxyId === galaxyId)
    },
    
    indexById: (state) => (fleetId) => {
        
        let fleet = state.fleets.find(item => item.id === fleetId)
        let fleets = state.fleets.filter(item => item.galaxyId === fleet.galaxyId)
        
        return fleets.findIndex(fleet => fleet.id === fleetId)
    },
    
    nextId: (state) => (fleetId) => {
        
        let fleet = state.fleets.find(item => item.id === fleetId)
        let fleets = state.fleets.filter(item => item.galaxyId === fleet.galaxyId)
        
        let index = fleets.findIndex(fleet => fleet.id === fleetId) + 1 
        if (index >= fleets.length) return null
        else return fleets[index].id
    },
}

export const actions = {
    
    load({ state, commit }, payload) {
        
        payload.data.forEach(loadedFleet => {
            
            commit('setLife', { fleetId:loadedFleet.id, value:loadedFleet.life })
        })
    },
}

export const mutations = {
        
    reset(state, payload) {
        
        let fleets = state.fleets.filter(fleet => fleet.galaxyId == payload.galaxyId)
        fleets.forEach(fleet => {
            
            fleet.life.current = fleet.life.base
        })
    },
    
    setLife(state, payload) {
        
        let fleet = state.fleets.find(fleet => fleet.id === payload.fleetId)
        fleet.life.current = payload.value
    },
}
