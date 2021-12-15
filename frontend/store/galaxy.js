const initialState = {
    
    galaxies: [
        
        { id:'galaxy0', loaded:false, lastSaveDate:null, creditCount:0, darkmatterCount:0, darkmatterCoeff:0.02, buildAmount:'+1', startTime:null, endTime:null, totalDamages:{ current:0, previous:0 }, currentFleetId:'galaxy0fleet0' },
    ],
}

export const state = () => ({
    ...initialState
})

export const getters = {
    
    saveData:(state) => (galaxyId) => {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === galaxyId)
        
        let data = {               
            id: galaxy.id,
            lastSaveDate: galaxy.lastSaveDate,
            creditCount: galaxy.creditCount,
            darkmatterCount: galaxy.darkmatterCount,
            buildAmount: galaxy.buildAmount,
            startTime: galaxy.startTime,
            endTime: galaxy.endTime,
            totalDamages: galaxy.totalDamages.current,
            currentFleetId: galaxy.currentFleetId,
        }
        
        return data
    },
    
    byId:(state) => (galaxyId) => {
        
        return state.galaxies.find(galaxy => galaxy.id === galaxyId)
    },
    
    darkmatterPotential: (state) => (galaxyId) => {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === galaxyId)
        return Math.floor(Math.max(0, (150 * Math.sqrt(galaxy.totalDamages.current / 1e15)) - (150 * Math.sqrt(galaxy.totalDamages.previous / 1e15))))
    },
}

export const actions = {
    
    load({ state, commit }, payload) {
        
        let loadedGalaxy = payload.data
        
        commit('setLastSaveDate', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.lastSaveDate })
        commit('setCreditCount', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.creditCount })
        commit('setDarkmatterCount', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.darkmatterCount })
        commit('setBuildAmount', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.buildAmount })
        commit('setStartTime', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.startTime })
        commit('setEndTime', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.endTime })
        commit('setTotalDamages', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.totalDamages })
        commit('setCurrentFleetId', { galaxyId:loadedGalaxy.id, value:loadedGalaxy.currentFleetId })
    },
}

export const mutations = {
    
    reset(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        
        galaxy.creditCount = 0
        galaxy.darkmatterCount = 0
        galaxy.darkmatterCoeff = 0.02
        galaxy.buildAmount = '+1'
        galaxy.startTime = new Date().getTime()
        galaxy.endTime = null
        
        galaxy.totalDamages.current = 0
        galaxy.totalDamages.previous = 0
        
        galaxy.currentFleetId = galaxy.id + 'fleet0'
    },
    
    prestige(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        
        galaxy.creditCount = 0
        galaxy.darkmatterCount += payload.darkmatter
        galaxy.darkmatterCoeff = 0.02
        galaxy.buildAmount = '+1'
        
        galaxy.totalDamages.previous = galaxy.totalDamages.current
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
    
    setTotalDamages(state, payload) {
        
        let galaxy = state.galaxies.find(galaxy => galaxy.id === payload.galaxyId)
        galaxy.totalDamages.current = payload.value
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
