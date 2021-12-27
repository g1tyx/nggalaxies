const initialState = {
    
    username:null,
    currentGalaxyId:'galaxy0',    
    gameStartingDate: null,
    playfabSessionTicket: null,
}

export const state = () => ({
    ...initialState
})

export const getters = {
    
    saveData:(state) => {
        
        let data = {
            
            username: state.username,
            currentGalaxyId: state.currentGalaxyId,
            gameStartingDate: state.gameStartingDate,
            playfabSessionTicket: state.playfabSessionTicket,
        }
        
        return data
    },
    
    username: state => state.username,
    
    currentGalaxyId: state => state.currentGalaxyId,
    
    gameStartingDate: state => state.gameStartingDate,
    
    playfabSessionTicket: state => state.playfabSessionTicket,
}

export const actions = {
    
    load({ state, commit }, payload) {
        
        commit('setUsername', { value:payload.data.username })
        commit('setCurrentGalaxyId', { value:payload.data.currentGalaxyId })
        commit('setGameStartingDate', { value:payload.data.gameStartingDate })
        commit('setPlayfabSessionTicket', { value:payload.data.playfabSessionTicket })
    },
}

export const mutations = {
    
    setUsername(state, payload) {
        
        state.username = payload.value
    },
    
    setCurrentGalaxyId(state, payload) {
        
        state.currentGalaxyId = payload.value
    },
    
    setGameStartingDate(state, payload) {
        
        state.gameStartingDate = payload.value
    },
    
    setPlayfabSessionTicket(state, payload) {
        
        state.playfabSessionTicket = payload.value
    },
}