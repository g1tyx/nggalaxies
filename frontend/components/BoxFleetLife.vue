<template>
    <div class="col-12 text-center">   
        <div class="text-warning">{{ $t('boneHunterFleet') }} {{ fleetIndex }} / {{ fleetCount }}</div>
        <FormatNumber class="h4 text-warning" :value="value" />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
    
        props:[ 'value' ],
        
        computed: {
            ...mapGetters({
                
                currentGalaxyId: 'currentGalaxyId',
                
                galaxyById: 'galaxy/byId',
                
                fleetById: 'fleet/byId',
                fleetByGalaxy: 'fleet/byGalaxy',
                fleetIndexById: 'fleet/indexById',
            }),

            fleetCount: function() { return this.fleetByGalaxy(this.currentGalaxyId).length },
            fleetIndex: function() { return this.fleetIndexById(this.fleetById(this.galaxyById(this.currentGalaxyId).currentFleetId).id) + 1 },
        },
    }
</script>
