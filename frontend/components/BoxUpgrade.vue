<template>
    <div v-if="upgrade.count < 1" class="col-12">
        <div class="bg-secondary p-1 rounded-1">
            <div class="row g-1 align-items-center">
            
                <div class="col-auto">
                    <div class="bg-dark p-1 rounded-1 d-flex align-items-center justify-content-center" style="width:50px; height:40px;">
                        <img v-if="upgrade.modifier.type == 'darkmatter'" src="~/assets/img/darkmatter.png" width="24" height="24" />
                        <img v-if="upgrade.modifier.type != 'darkmatter' && upgrade.modifier.shipIds.length == 1" :src="require(`~/assets/img/${upgrade.modifier.shipIds[0]}.png`)" width="24" height="24" />
                        <img v-if="upgrade.modifier.type != 'darkmatter' && upgrade.modifier.shipIds.length > 1" src="~/assets/img/shipAll.png" width="24" height="24" />
                    </div>
                </div>
                
                <div class="col px-2">
                    <div v-if="upgrade.modifier.type == 'darkmatter'" class="text-light">{{ $t('darkmatter') }}</div>
                    <div v-if="upgrade.modifier.type != 'darkmatter' && upgrade.modifier.shipIds.length == 1" class="text-light">{{ $t('shipName_' + upgrade.modifier.shipIds[0]) }}</div>
                    <div v-if="upgrade.modifier.type != 'darkmatter' && upgrade.modifier.shipIds.length > 1" class="text-light">{{ $t('shipName_shipAll') }}</div>
                    <div class="text-light small">{{ $t('modifierType_' + upgrade.modifier.type) }}</div>
                </div>
                
                <div class="col-auto px-2">
                    <span v-if="upgrade.modifier.type == 'damage'"><small class="text-muted">x</small> {{ upgrade.modifier.coeff }}</span>
                    <span v-if="upgrade.modifier.type == 'darkmatter'" class="text-success"><small class="text-muted">+</small> {{ upgrade.modifier.coeff }}%</span>
                    <span v-if="upgrade.modifier.type == 'count'"><small class="text-muted">+</small> {{ upgrade.modifier.coeff }}</span>
                </div>
                
                <div class="col-auto">
                    <button type="button" class="btn btn-primary py-1" :class="{ 'disabled':upgrade.canBuy == false }" :disabled="upgrade.canBuy == false" style="width:85px;" @click="onBuy()">
                        
                        <div>
                            <span>{{ $t('btnName_buy')}}</span>
                        </div>
                        
                        <div class="d-flex align-items-center justify-content-center small">
                            <img src="~/assets/img/credit.png" width="10" height="10" alt="Credit" />
                            <FormatNumber :value="upgrade.cost" class="ms-1 text-muted" />
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
    
        props:[ 'upgrade' ],
        
        computed: {
            ...mapGetters({
            
                currentGalaxyId: 'currentGalaxyId',
                
                galaxyById: 'galaxy/byId',
            }),
            
            currentGalaxyCreditCount: function() { return this.galaxyById(this.currentGalaxyId).creditCount },        
        },
        
        methods: {
            ...mapMutations({
            
                galaxyApplyModifier: 'galaxy/applyModifier',
                galaxySetCreditCount: 'galaxy/setCreditCount',
                
                shipApplyModifier: 'ship/applyModifier',
                
                upgradeSetCount: 'upgrade/setCount',
            }),
            
            onBuy() {
                
                this.upgradeSetCount({ upgradeId:this.upgrade.id, value:1 })
                this.galaxySetCreditCount({ galaxyId:this.currentGalaxyId, value:this.currentGalaxyCreditCount - this.upgrade.cost })
                
                if (this.upgrade.modifier.type == 'darkmatter') this.galaxyApplyModifier(this.upgrade.modifier)
                else this.shipApplyModifier(this.upgrade.modifier)
            },
        },
    }
</script>
