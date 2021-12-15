<template>
    <div class="fadein w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="bg-dark rounded-1 p-1 m-2">
            <div class="row flex-column g-1">
            
                <div class="col">
                    <div class="p-1 text-center">
                        <h5>{{ $t('welcome_title1') }}</h5>
                        <div><span class="badge bg-danger fw-normal">BETA Testing</span></div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="p-1 text-center">                    
                        <small class="text-light">{{ $t('welcome_text1') }}</small>
                    </div>
                </div>
            
                <div class="col">
                    <div class="p-1 text-center">
                        <small class="text-light">{{ $t('welcome_text2') }}</small>
                    </div>
                </div>
            
                <div class="col">
                    <div class="p-1 text-center">
                        <small class="text-light">{{ $t('welcome_text3') }}</small>
                    </div>
                </div>
            
                <div class="col">
                    <div class="p-1 text-center">                    
                        <button type="button" class="btn btn-primary" @click="onWelcome()">{{ $t('btnName_start') }}</button>                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import LZString from 'lz-string'

    import { mapGetters, mapMutations } from 'vuex'
    
    export default {
        
        computed: {
            ...mapGetters({
                
                saveData: 'saveData',
                currentGalaxyId: 'currentGalaxyId',
                
                galaxySaveData: 'galaxy/saveData',
                
                fleetSaveData: 'fleet/saveData',
                
                shipSaveData: 'ship/saveData',
                
                upgradeSaveData: 'upgrade/saveData',
                
                boostSaveData: 'boost/saveData',
                
                objectiveSaveData: 'objective/saveData',
            }),
        },
    
        methods: {
            ...mapMutations({
            
                setGameStartingDate: 'setGameStartingDate',
                
                galaxySetLoaded: 'galaxy/setLoaded',
            }),
            
            onWelcome() {
                
                this.setGameStartingDate({ value:new Date().getTime() })
                
                let localeData = { user:this.saveData }
                
                localeData[this.currentGalaxyId] = {
                    
                    galaxy: this.galaxySaveData(this.currentGalaxyId),
                    fleets: this.fleetSaveData(this.currentGalaxyId),
                    ships: this.shipSaveData(this.currentGalaxyId),
                    upgrades: this.upgradeSaveData(this.currentGalaxyId),
                    boosts: this.boostSaveData(this.currentGalaxyId),
                    objectives: this.objectiveSaveData(this.currentGalaxyId),
                }
                
                let text = JSON.stringify(localeData)
                let compressed = LZString.compressToBase64(text)
                localStorage.setItem('nggalaxies', compressed)
                
                this.galaxySetLoaded({ galaxyId:this.currentGalaxyId, value:true })
                
                this.$router.push('/game')
            },
        },
    }
</script>