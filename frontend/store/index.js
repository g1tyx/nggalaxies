const initialState = {
    
    currentGalaxyId:'galaxy0',    
    gameStartingDate: null,
}

export const state = () => ({
    ...initialState
})

export const getters = {
    
    saveData:(state) => {
        
        let data = {
            
            currentGalaxyId: state.currentGalaxyId,
            gameStartingDate: state.gameStartingDate,
        }
        
        return data
    },
    
    currentGalaxyId: state => state.currentGalaxyId,
    
    gameStartingDate: state => state.gameStartingDate,
}

export const actions = {
    
    load({ state, commit }, payload) {
        
        commit('setCurrentGalaxyId', { value:payload.data.currentGalaxyId })
        commit('setGameStartingDate', { value:payload.data.gameStartingDate })
    },
}

export const mutations = {
    
    setCurrentGalaxyId(state, payload) {
        
        state.currentGalaxyId = payload.value
    },
    
    setGameStartingDate(state, payload) {
        
        state.gameStartingDate = payload.value
    },
}