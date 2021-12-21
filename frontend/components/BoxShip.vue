<template>
    <div class="col-12">
        <div class="bg-secondary p-1 rounded-1">
            <div class="row g-1 align-items-center">
                
                <div class="col-auto dropend">
                
                    <div class="btn btn-dark p-1 d-flex align-items-center justify-content-center position-relative" style="width:50px; height:45px;" data-bs-toggle="dropdown" aria-expanded="false">                        
                        <img :src="require(`~/assets/img/${ship.id}.png`)" width="24" height="24" :alt="$t('shipName_' + ship.id)" />
                        <div class="position-absolute top-0 start-0 px-1 small text-light"><i class="fas fa-fw fa-eye text-muted small"></i></div>
                    </div>
                    
                    <div class="dropdown-menu bg-dark border-0 px-4 py-1" style="width:250px;">
                        <div class="row gx-4 align-items-center">
                            
                            <div class="col-auto">
                                <span class="badge bg-secondary">x {{ currentUnlock.threshold.toLocaleString() }}</span>
                            </div>
                            
                            <div class="col text-center">
                                <div v-if="currentUnlock.modifier.type != 'darkmatter' && currentUnlock.modifier.shipIds.length == 1" class="text-light">{{ $t('shipName_' + currentUnlock.modifier.shipIds[0]) }}</div>
                                <div v-if="currentUnlock.modifier.type != 'darkmatter' && currentUnlock.modifier.shipIds.length > 1" class="text-light">{{ $t('shipName_shipAll') }}</div>
                                <div class="small text-light">{{ $t('modifierType_' + currentUnlock.modifier.type) }}</div>
                            </div>
                            
                            <div class="col-auto">
                                <span v-if="currentUnlock.modifier.type == 'damage'"><small class="text-muted">x</small> {{ currentUnlock.modifier.coeff }}</span>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
                <div class="col">
                
                    <div class="px-2">                    
                        <div class="row g-1">
                        
                            <div class="col">
                                <span>{{ $t('shipName_' + ship.id) }}</span>
                            </div>
                            
                            <div class="col-auto">
                                <small class="text-muted">x</small>
                                <span>{{ ship.count.toLocaleString() }}</span>
                                <small v-if="currentUnlock" class="text-light">/{{ currentUnlock.threshold.toLocaleString() }}</small>
                            </div>
                            
                        </div>                    
                    </div>
                    
                    <div class="px-2 pt-1">
                    
                        <div class="row g-1">
                        
                            <div class="col d-flex align-items-center">
                                <img src="~/assets/img/damage.png" width="12" height="12" alt="Damage" />
                                <FormatNumber :value="damage" class="ms-1 text-warning" />
                                <small class="ms-1 text-warning">/{{ $t('sec') }}</small>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
                <div class="col-auto">
                    <button type="button" class="btn btn-primary px-0 py-1" :class="{ 'disabled':canBuild == false }" :disabled="canBuild == false" style="width:85px;" @click="onBuild(buildCount, cost)">
                        
                        <div>
                            <span>{{ $t('btnName_build')}} +{{ buildCount.toLocaleString() }}</span>
                        </div>
                        
                        <div class="d-flex align-items-baseline justify-content-center">
                            <img src="~/assets/img/credit.png" width="10" height="10" alt="Credit" />
                            <FormatNumber :value="cost" class="ms-1 small text-muted" />
                        </div>
                        
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    
    export default {
    
        props:[ 'ship' ],
        
        data() {
            return {
                              
                canBuild: false,
                buildCount: 0,
            }
        },
        
        computed: {
            ...mapGetters({
            
                currentGalaxyId: 'currentGalaxyId',
                
                galaxyById: 'galaxy/byId',
                
                fleetById: 'fleet/byId',
                fleetNextId: 'fleet/nextId',
                
                unlockCurrentByShipCount: 'unlock/currentByShipCount',
            }),
            
            currentGalaxy: function() { return this.galaxyById(this.currentGalaxyId) },
            currentGalaxyCreditCount: function() { return this.galaxyById(this.currentGalaxyId).creditCount },
            
            currentFleet: function() { return this.fleetById(this.currentGalaxy.currentFleetId) },
        
            currentUnlock: function() { return this.unlockCurrentByShipCount(this.ship.id, this.ship.count) },
            
            damage: function() {
                
                let ret = this.ship.damage.base * this.ship.count
                ret *= this.ship.damage.modifier
                ret *= (1 + (this.currentGalaxy.darkmatterCount * this.currentGalaxy.darkmatterCoeff))
                return ret
            },
            
            cost: function() {
            
                let temp = 1
                for (let n = 1; n < this.buildCount; n++)
                    temp += Math.pow(this.ship.cost.coeff, n)
                    
                temp *= this.ship.cost.base * Math.pow(this.ship.cost.coeff, this.ship.count)
                temp = Math.floor(temp)
                
                return temp
            },
            
            shipCount: function() { return this.ship.count },
        },
        
        watch: {
        
            shipCount: function(val) {
            
                let temp = 1
                if (this.ship.count > 0) {
                
                    let buildAmount = this.currentGalaxy.buildAmount
                    if (buildAmount == 'next') {
                        
                        if (this.currentUnlock) temp = (this.currentUnlock.threshold - this.ship.count)
                        else temp = 1
                    }
                    else if (buildAmount == 'max') {
                        
                        let cost = this.ship.cost.base * Math.pow(this.ship.cost.coeff, this.ship.count)
                        temp = Math.max(1, Math.floor(Math.log(((this.currentGalaxy.creditCount * (this.ship.cost.coeff - 1)) / cost) + 1) / Math.log(this.ship.cost.coeff)))
                    }
                }
                
                if (temp != this.buildCount) this.buildCount = temp
            },
            
            currentGalaxyCreditCount: function(val) {
            
                let temp = this.cost <= this.currentGalaxyCreditCount
                if (temp != this.canBuild) this.canBuild = temp
                
                temp = 1
                if (this.ship.count > 0) {
                
                    let buildAmount = this.currentGalaxy.buildAmount
                    
                    if (buildAmount == '+1') temp = 1
                    else if (buildAmount == '+10') temp = 10
                    else if (buildAmount == '+100') temp = 100
                    else if (buildAmount == 'next') {
                        
                        if (this.currentUnlock) temp = (this.currentUnlock.threshold - this.ship.count)
                        else temp = 1
                    }
                    else if (buildAmount == 'max') {
                        
                        let cost = this.ship.cost.base * Math.pow(this.ship.cost.coeff, this.ship.count)
                        temp = Math.max(1, Math.floor(Math.log(((this.currentGalaxy.creditCount * (this.ship.cost.coeff - 1)) / cost) + 1) / Math.log(this.ship.cost.coeff)))
                    }
                }
                
                if (temp != this.buildCount) this.buildCount = temp
            },
            
            currentUnlock: function(newValue, oldValue) {
                
                if (newValue.threshold > oldValue.threshold) {
                
                    this.shipApplyModifier(oldValue.modifier)
                }
            },
        },
        
        methods: {
            ...mapMutations({
                
                galaxySetCreditCount: 'galaxy/setCreditCount',
                
                shipSetCount: 'ship/setCount',
                shipApplyModifier: 'ship/applyModifier',
            }),
            
            onBuild(count, cost) {
                
                if (this.cost > this.currentGalaxyCreditCount) return
                
                this.shipSetCount({ shipId:this.ship.id, value:(this.ship.count + count) })
                this.galaxySetCreditCount({ galaxyId:this.currentGalaxyId, value:this.currentGalaxy.creditCount - cost })
                
                if (this.started == false && this.ship.count > 0) {
                    
                    this.start()
                }
            },
        },
        
        mounted() {
        
            this.buildCount = 1
        },
    }
</script>
