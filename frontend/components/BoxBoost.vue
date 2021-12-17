<template>
    <div v-if="boost.count < 1" class="col-12">
        <div class="bg-secondary p-1 rounded-1">
            <div class="row g-1 align-items-center">
            
                <div class="col-auto">
                    <div class="bg-dark p-1 rounded-1 d-flex align-items-center justify-content-center" style="width:50px; height:40px;">
                        <img v-if="boost.modifier.type == 'darkmatter'" src="~/assets/img/darkmatter.png" width="24" height="24" alt="Dark Matter" />
                        <img v-if="boost.modifier.type != 'darkmatter' && boost.modifier.shipIds.length == 1" :src="require(`~/assets/img/${boost.modifier.shipIds[0]}.png`)" width="24" height="24" />
                        <img v-if="boost.modifier.type != 'darkmatter' && boost.modifier.shipIds.length > 1" src="~/assets/img/shipAll.png" width="24" height="24" alt="All Ships" />
                    </div>
                </div>
                
                <div class="col px-2">
                    <div v-if="boost.modifier.type == 'darkmatter'" class="text-light">{{ $t('antimatter') }}</div>
                    <div v-if="boost.modifier.type != 'darkmatter' && boost.modifier.shipIds.length == 1" class="text-light">{{ $t('shipName_' + boost.modifier.shipIds[0]) }}</div>
                    <div v-if="boost.modifier.type != 'darkmatter' && boost.modifier.shipIds.length > 1" class="text-light">{{ $t('shipName_shipAll') }}</div>
                    <div class="text-light small">{{ $t('modifierType_' + boost.modifier.type) }}</div>
                </div>
                
                <div class="col-auto px-2">
                    <span v-if="boost.modifier.type == 'damage'"><small class="text-muted">x</small> {{ boost.modifier.coeff }}</span>
                    <span v-if="boost.modifier.type == 'speed'"><small class="text-muted">x</small> {{ boost.modifier.coeff }}</span>
                    <span v-if="boost.modifier.type == 'darkmatter'" class="text-success"><small class="text-muted">+</small> {{ boost.modifier.coeff }}%</span>
                    <span v-if="boost.modifier.type == 'count'"><small class="text-muted">+</small> {{ boost.modifier.coeff }}</span>
                </div>
                
                <div class="col-auto">
                    <button type="button" class="btn btn-primary py-1" :class="{ 'disabled':boost.canBuy == false }" :disabled="boost.canBuy == false" style="width:85px;" @click="onBuy()">
                        
                        <div>
                            <span>{{ $t('btnName_buy')}}</span>
                        </div>
                        
                        <div class="d-flex align-items-center justify-content-center small">
                            <img src="~/assets/img/darkmatter.png" width="10" height="10" alt="Credit" />
                            <FormatNumber :value="boost.cost" class="ms-1 text-muted" />
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
    
        props:[ 'boost' ],
        
        computed: {
            ...mapGetters({
            
                currentGalaxyId: 'currentGalaxyId',
                
                galaxyById: 'galaxy/byId',
            }),
            
            currentGalaxyDarkmatterCount: function() { return this.galaxyById(this.currentGalaxyId).darkmatterCount },        
        },
        
        methods: {
            ...mapMutations({
            
                galaxyApplyModifier: 'galaxy/applyModifier',
                galaxySetDarkmatterCount: 'galaxy/setDarkmatterCount',
                
                shipApplyModifier: 'ship/applyModifier',
                
                boostSetCount: 'boost/setCount',
            }),
            
            onBuy() {
                
                this.boostSetCount({ boostId:this.boost.id, value:1 })
                this.galaxySetDarkmatterCount({ galaxyId:this.currentGalaxyId, value:this.currentGalaxyDarkmatterCount - this.boost.cost })
                
                if (this.boost.modifier.type == 'darkmatter') this.galaxyApplyModifier(this.boost.modifier)
                else this.shipApplyModifier(this.boost.modifier)
            },
        },
    }
</script>
