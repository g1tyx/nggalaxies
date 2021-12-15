const initialState = {
    
    ships: [
        
        { galaxyId:'galaxy0', id:'galaxy0shipT0', damage:{ base:1.3333, modifier:1.0 }, cost:{ base:4,           coeff:1.07 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT1', damage:{ base:20,     modifier:1.0 }, cost:{ base:60,          coeff:1.15 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT2', damage:{ base:90,     modifier:1.0 }, cost:{ base:720,         coeff:1.14 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT3', damage:{ base:360,    modifier:1.0 }, cost:{ base:8640,        coeff:1.13 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT4', damage:{ base:2160,   modifier:1.0 }, cost:{ base:103680,      coeff:1.12 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT5', damage:{ base:6480,   modifier:1.0 }, cost:{ base:1244160,     coeff:1.11 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT6', damage:{ base:19440,  modifier:1.0 }, cost:{ base:14929920,    coeff:1.10 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT7', damage:{ base:58320,  modifier:1.0 }, cost:{ base:179159040,   coeff:1.09 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT8', damage:{ base:174960, modifier:1.0 }, cost:{ base:2149908480,  coeff:1.08 }, count:0 },
        { galaxyId:'galaxy0', id:'galaxy0shipT9', damage:{ base:804816, modifier:1.0 }, cost:{ base:25798901760, coeff:1.07 }, count:0 },
    ],
}

export const state = () => ({
    ...initialState
})

export const getters = {
    
    saveData:(state) => (galaxyId) => {
        
        let ships = state.ships.filter(ship => ship.galaxyId == galaxyId && ship.count > 0)
        
        let data = []
        ships.forEach(ship => {
            data.push({
                
                id: ship.id,
                count: ship.count,
            })
        })
        
        return data
    },
    
    builtList:(state) => {
        
        return state.ships.filter(ship => ship.count > 0)
    },
    
    builtListByGalaxy:(state) => (galaxyId) => {
        
        return state.ships.filter(ship => ship.galaxyId === galaxyId && ship.count > 0)
    },
    
    currentListByGalaxy:(state) => (galaxyId) => {
        
        return state.ships.filter(ship => ship.galaxyId === galaxyId)
    },
}

export const actions = {
    
    load({ state, commit }, payload) {
        
        payload.data.forEach(loadedShip => {
            
            commit('setCount', { shipId:loadedShip.id, value:loadedShip.count })
        })
    },
}

export const mutations = {
    
    reset(state, payload) {
        
        let ships = state.ships.filter(ship => ship.galaxyId == payload.galaxyId)
        ships.forEach(ship => {
            
            ship.count = 0
            ship.damage.current = ship.damage.base
        })
    },
    
    setCount(state, payload) {
        
        let ship = state.ships.find(ship => ship.id === payload.shipId)
        ship.count = payload.value
    },
    
    applyModifier(state, payload) {
        
        let ships = state.ships.filter(ship => payload.shipIds.includes(ship.id))
        
        if (payload.type == 'damage') ships.forEach(ship => { ship.damage.modifier *= payload.coeff })
        else if (payload.type == 'count') ships.forEach(ship => { ship.count += payload.coeff })
    },
}
