<template>
    <div v-if="loaded" class="fadein w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="bg-dark rounded-1 p-1">
            <div class="row flex-column g-1">
            
                <div class="col">
                    <div class="p-1 text-center">
                        <h5>{{ $t('offline_title1') }}</h5>
                        <small class="text-light">{{ $t('offline_text1') }}</small>
                        <FormatTime :value="delay / 1000" />
                    </div>
                </div>
                
                <div v-if="ships.length > 0" class="col">
                    <div class="p-1 text-center">                    
                        <span class="text-light">{{ $t('offline_text2') }}</span>
                        <span class="text-light">{{ $t('galaxyName_' + currentGalaxyId) }}</span>
                    </div>
                </div>
                
                <div v-if="ships.length > 0" class="col">
                    <div class="p-1 text-center">                        
                        <table class="table mb-0">
                            <tbody>
                                <tr v-for="ship in ships">
                                
                                    <td width="1%">
                                        <img :src="require(`~/assets/img/${ship.id}.png`)" width="20" height="20" />
                                    </td>
                                    
                                    <td class="text-start">
                                        <span class="text-light">{{ $t('shipName_' + ship.id) }}</span>
                                    </td>
                                    
                                    <td width="1%" nowrap>
                                        <div class="d-flex align-items-center">
                                            <img src="~/assets/img/damage.png" width="10" height="10" />                                        
                                            <FormatNumber :value="ship.damages" class="ms-1" />
                                        </div>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div class="col">
                    <div class="p-1 text-center">                    
                        <button type="button" class="btn btn-primary" @click="onContinue()">{{ $t('btnName_continue') }}</button>                        
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    
    export default {
        
        data() {
            return {
            
                delay: null,
                ships: [],
            }
        },
    
        computed: {
            ...mapGetters({
                
                currentGalaxyId: 'currentGalaxyId',
                
                galaxyById: 'galaxy/byId',
                
                fleetById: 'fleet/byId',
                fleetNextId: 'fleet/nextId',
                
                shipBuiltListByGalaxy: 'ship/builtListByGalaxy',
            }),
            
            currentGalaxy: function() { return this.galaxyById(this.currentGalaxyId) },
        
            currentFleet: function() { return this.fleetById(this.currentGalaxy.currentFleetId) },
        },
        
        methods: {
            
            ...mapMutations({
                
                galaxySetEndTime: 'galaxy/setEndTime',
                galaxySetCreditCount: 'galaxy/setCreditCount',
                galaxySetTotalDamages: 'galaxy/setTotalDamages',
                galaxySetCurrentFleetId: 'galaxy/setCurrentFleetId',
                
                fleetSetLife: 'fleet/setLife',
            }),
            
            onContinue() {
                
                this.$router.push('/game')
            },
        },
        
        created() {
            
            if (this.currentGalaxy.loaded == false) {
            
                window.location.href = '/'
                return
            }
            
            this.loaded = true
        },
        
        mounted() {
            
            this.delay = new Date().getTime() - this.currentGalaxy.lastSaveDate
            
            if (this.currentFleet == null) return
            
            this.shipBuiltListByGalaxy(this.currentGalaxyId).forEach(ship => {
                
                let damage = ship.damage.base * ship.count * ship.damage.modifier * (1 + (this.currentGalaxy.darkmatterCount * this.currentGalaxy.darkmatterCoeff))
                
                let shots = Math.floor(this.delay / 1000)
                let damages = shots * damage
                
                if (damages > 0) this.ships.push({ id:ship.id, damages:damages })
                
                while(damages > 0) {
                
                    if (this.currentFleet == null) {
                    
                        if (this.currentGalaxy.endTime == null) this.galaxySetEndTime({ galaxyId:this.currentGalaxyId, value:(new Date().getTime()) })
                        break
                    }
                    
                    let realDamages = Math.min(damages, this.currentFleet.life.current)
                    damages -= realDamages
                    
                    this.fleetSetLife({ fleetId:this.currentFleet.id, value:this.currentFleet.life.current - realDamages })
                    
                    this.galaxySetCreditCount({ galaxyId:this.currentGalaxyId, value:this.currentGalaxy.creditCount + realDamages })
                    this.galaxySetTotalDamages({ galaxyId:this.currentGalaxyId, value:this.currentGalaxy.totalDamages.current + realDamages })
                    
                    if (this.currentFleet.life.current <= 0) {
                    
                        let nextId = this.fleetNextId(this.currentFleet.id)
                        this.galaxySetCurrentFleetId({ galaxyId:this.currentGalaxyId, fleetId:nextId })                    
                    }
                }
            })            
        },
    }
</script>