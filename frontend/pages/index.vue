<template>
    <div class="w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="fadein bg-dark rounded-1 p-1">
            <div class="row g-1 flex-column">
                
                <div class="col">
                    <div class="p-1 text-center">
                        <img src="~/assets/img/logo.png" alt="Logo" width="64" height="64" class="rounded-3" />
                        <h5 class="mt-1">NG Galaxies</h5>
                        <small class="text-light flicker">{{ $t('screenLoading_text') }}</small>
                    </div>                
                </div>                
                
            </div>
        </div>        
    </div>        
</template>

<script>
    import LZString from 'lz-string'

    import { mapGetters, mapActions, mapMutations } from 'vuex'
    
    export default {
    
        computed: {
            ...mapGetters({
            
                currentGalaxyId: 'currentGalaxyId',
                gameStartingDate: 'gameStartingDate',
                
                shipBuiltList: 'ship/builtList',
                
                unlockNotReachedByShipCount: 'unlock/notReachedByShipCount',
                
                upgradePurchasedList: 'upgrade/purchasedList',
                
                boostPurchasedList: 'boost/purchasedList',
                
                objectivePurchasedList: 'objective/purchasedList',
            }),
        },
        
        methods: {
            ...mapActions({
                
                userLoad: 'load',
                
                galaxyLoad: 'galaxy/load',
                
                fleetLoad: 'fleet/load',
                
                shipLoad: 'ship/load',
                
                upgradeLoad: 'upgrade/load',
                
                boostLoad: 'boost/load',
                
                objectiveLoad: 'objective/load',
            }),
            
            ...mapMutations({
                
                galaxySetLoaded: 'galaxy/setLoaded',                
                galaxyApplyModifier: 'galaxy/applyModifier',
                
                shipApplyModifier: 'ship/applyModifier',
                
                unlockSetReached: 'unlock/setReached',
            }),
            
            async load() {
                
                let loadedData = localStorage.getItem('nggalaxies')
                if (loadedData && loadedData !== null && loadedData.length % 4 == 0) {
                
                    let text = LZString.decompressFromBase64(loadedData)
                    let localeData = JSON.parse(text)
                    if (localeData && localeData !== null) {
                        
                        await this.userLoad({ data:localeData.user })
                        
                        await this.galaxyLoad({ data:localeData[this.currentGalaxyId].galaxy })
                        await this.fleetLoad({ data:localeData[this.currentGalaxyId].fleets })
                        await this.shipLoad({ data:localeData[this.currentGalaxyId].ships })
                        await this.upgradeLoad({ data:localeData[this.currentGalaxyId].upgrades })
                        await this.boostLoad({ data:localeData[this.currentGalaxyId].boosts })
                        await this.objectiveLoad({ data:localeData[this.currentGalaxyId].objectives })
                    }
                }
                else {
                
                    return this.$router.push('/welcome')
                }
                
                this.shipBuiltList.forEach(ship => {
                
                    let unlocks = this.unlockNotReachedByShipCount(ship.id, ship.count)
                    unlocks.forEach(unlock => {
                    
                        this.shipApplyModifier(unlock.modifier)
                        this.unlockSetReached({ unlockId:unlock.id, value:true })
                    })
                })
                
                this.upgradePurchasedList.forEach(upgrade => {                    
                    
                    if (upgrade.modifier.type == 'darkmatter') this.galaxyApplyModifier(upgrade.modifier)
                    else if (upgrade.modifier.type != 'count') this.shipApplyModifier(upgrade.modifier)
                })
                
                this.boostPurchasedList.forEach(boost => {                    
                    
                    if (boost.modifier.type == 'darkmatter') this.galaxyApplyModifier(boost.modifier)
                    else if (boost.modifier.type != 'count') this.shipApplyModifier(boost.modifier)
                })
                
                this.objectivePurchasedList.forEach(objective => {                    
                    
                    if (objective.modifier.type == 'darkmatter') this.galaxyApplyModifier(objective.modifier)
                    else if (objective.modifier.type != 'count') this.shipApplyModifier(objective.modifier)
                })

                this.galaxySetLoaded({ galaxyId:this.currentGalaxyId, value:true })
                return this.$router.push('/offline')                
            }
        },
    
        created() {
            
            this.$ga.page(this.$router)
            
            setTimeout(() => { this.load() }, 1000)
        },
    }
</script>
