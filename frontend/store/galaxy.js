const initialState = {
    
    galaxies: [
        
        { id:'galaxy0', loaded:false, lastSaveDate:null, creditCount:0, darkmatterCount:0, darkmatterCoeff:0.02, darkmatterSacrified:0, buildAmount:'+1', startTime:null, endTime:null, totalDamages:{ current:0, all:0 }, currentFleetId:'galaxy0fleet0' },
    ],
}

export const state = () => ({
    ...initialState
})

export const getters = {
    
    galaxyIds:(state) => {
        
        let ret = []
        state.galaxies.forEach(galaxy => { ret.push(galaxy.id) })
        return ret
    },
    
    saveData:(state) => (galaxyId) => {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === galaxyId)
        
        let data = {               
            id: galaxy.id,
            lastSaveDate: galaxy.lastSaveDate,
            creditCount: galaxy.creditCount,
            darkmatterCount: galaxy.darkmatterCount,
            darkmatterSacrified: galaxy.darkmatterSacrified,
            buildAmount: galaxy.buildAmount,
            startTime: galaxy.startTime,
            endTime: galaxy.endTime,
            totalDamagesAll: galaxy.totalDamages.all,
            totalDamagesCurrent: galaxy.totalDamages.current,
            currentFleetId: galaxy.currentFleetId,
        }
        
        return data
    },
    
    byId:(state) => (galaxyId) => {
        
        return state.galaxies.find(galaxy => galaxy.id === galaxyId)
    },
    
    darkmatterPotential: (state) => (galaxyId) => {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === galaxyId)   
        return Math.max(0, Math.floor((150 * (Math.sqrt(galaxy.totalDamages.all) - Math.sqrt(galaxy.totalDamages.all - galaxy.totalDamages.current))) / (Math.sqrt(1e15)) - galaxy.darkmatterSacrified))
    },
}

export const actions = {
    
    load({ state, commit }, payload) {
        
        let loadedGalaxy = payload.data
        
        commit('setLastSaveDate', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.lastSaveDate })
        commit('setCreditCount', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.creditCount || 0 })
        commit('setDarkmatterCount', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.darkmatterCount || 0 })
        commit('setDarkmatterSacrified', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.darkmatterSacrified || 0 })
        commit('setBuildAmount', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.buildAmount || '+1' })
        commit('setStartTime', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.startTime || new Date().getTime() })
        commit('setEndTime', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.endTime })
        commit('setTotalDamagesAll', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.totalDamagesAll || 0 })
        commit('setTotalDamagesCurrent', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.totalDamagesCurrent || 0 })
        commit('setCurrentFleetId', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.currentFleetId || loadedGalaxy.id + 'fleet0' })
    },
}

export const mutations = {
    
    reset(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        
        galaxy.creditCount = 0
        galaxy.darkmatterCount = 0
        galaxy.darkmatterCoeff = 0.02
        galaxy.darkmatterSacrified = 0
        galaxy.buildAmount = '+1'
        galaxy.startTime = new Date().getTime()
        galaxy.endTime = null
        
        galaxy.totalDamages.current = 0
        galaxy.totalDamages.all = 0
        
        galaxy.currentFleetId = galaxy.id + 'fleet0'
    },
    
    prestige(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        
        galaxy.creditCount = 0
        galaxy.darkmatterCount += payload.darkmatter
        galaxy.darkmatterSacrified += payload.darkmatter
        galaxy.darkmatterCoeff = 0.02
        galaxy.buildAmount = '+1'
        
        galaxy.totalDamages.current = 0
        
        galaxy.currentFleetId = galaxy.id + 'fleet0'
    },
        
    setLoaded(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.loaded = payload.value
    },
        
    setLastSaveDate(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.lastSaveDate = payload.value
    },
    
    setCreditCount(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.creditCount = payload.value
    },
    
    setDarkmatterCount(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.darkmatterCount = payload.value
    },
    
    setDarkmatterSacrified(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.darkmatterSacrified = payload.value
    },
    
    setBuildAmount(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.buildAmount = payload.value
    },
    
    setStartTime(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.startTime = payload.value
    },
    
    setEndTime(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.endTime = payload.value
    },
    
    setTotalDamagesCurrent(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.totalDamages.current = payload.value
    },
    
    setTotalDamagesAll(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.totalDamages.all = payload.value
    },
    
    setCurrentFleetId(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.currentFleetId = payload.value
    },
    
    applyModifier(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        
        if (payload.type == 'darkmatter') galaxy.darkmatterCoeff += (payload.coeff / 100)
    },
}
