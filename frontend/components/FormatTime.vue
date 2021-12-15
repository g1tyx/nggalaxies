<template>
    <span>{{ time }}</span>
</template>

<script>
export default {
    props: [ 'value' ],
    computed: {
        
        time: function() {
        
            let val = this.value
            
            if (val > 0) {
            
                let d = Math.floor(val / (3600 * 24))
                
                let h = Math.floor(Math.floor(val / 3600) % 3600)
                if (h < 10) { h = '0' + h }
                
                let m = Math.floor(Math.floor(val / 60) % 60)
                if (m < 10) { m = '0' + m }
                
                let s = Math.floor(val % 60)
                if (s < 10) { s = '0' + s }
                
                if (d > 0) val = d + this.$t('time_day') + ' ' + h + ':' + m + ':' + s
                else val = h + ':' + m + ':' + s
            }
            
            return val
        },
    },
}
</script>