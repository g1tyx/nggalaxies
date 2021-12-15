<template>
    <span>{{ format.value.toLocaleString() }}<small v-if="format.symbol" class="text-muted" style="font-size:.75em;"> {{ format.symbol }}</small></span>
</template>

<script>
export default {
    props: [ 'value' ],
    computed: {
    
        format: function() {
            
            let num = parseFloat(Math.abs(this.value))
            if (num == 0) return { value:parseFloat(this.value), symbol:'' }
            if (num > 0 && num < 1) return { value:parseFloat(this.value).toFixed(1), symbol:'' }
            
            const lookup = [
                { value: 1,     symbol: ""     },
                { value: 1e3,   symbol: "e3"   },
                { value: 1e6,   symbol: "e6"   },
                { value: 1e9,   symbol: "e9"   },
                { value: 1e12,  symbol: "e12"  },
                { value: 1e15,  symbol: "e15"  },
                { value: 1e18,  symbol: "e18"  },
                { value: 1e21,  symbol: "e21"  },
                { value: 1e24,  symbol: "e24"  },
                { value: 1e27,  symbol: "e27"  },
                { value: 1e30,  symbol: "e30"  },
                { value: 1e33,  symbol: "e33"  },
                { value: 1e36,  symbol: "e36"  },
                { value: 1e39,  symbol: "e39"  },
                { value: 1e42,  symbol: "e42"  },
                { value: 1e45,  symbol: "e45"  },
                { value: 1e48,  symbol: "e48"  },
                { value: 1e51,  symbol: "e51"  },
                { value: 1e54,  symbol: "e54"  },
                { value: 1e57,  symbol: "e57"  },
                { value: 1e60,  symbol: "e60"  },
                { value: 1e63,  symbol: "e63"  },
                { value: 1e66,  symbol: "e66"  },
                { value: 1e69,  symbol: "e69"  },
                { value: 1e72,  symbol: "e72"  },
                { value: 1e75,  symbol: "e75"  },
                { value: 1e78,  symbol: "e78"  },
                { value: 1e81,  symbol: "e81"  },
                { value: 1e84,  symbol: "e84"  },
                { value: 1e87,  symbol: "e87"  },
                { value: 1e90,  symbol: "e90"  },
                { value: 1e93,  symbol: "e93"  },
                { value: 1e96,  symbol: "e96"  },
                { value: 1e99,  symbol: "e99"  },
                { value: 1e102, symbol: "e102" },
                { value: 1e105, symbol: "e105" },
                { value: 1e108, symbol: "e108" },
                { value: 1e111, symbol: "e111" },
                { value: 1e114, symbol: "e114" },
                { value: 1e117, symbol: "e117" },
                { value: 1e120, symbol: "e120" },
                { value: 1e123, symbol: "e123" },
            ]
    
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
            
            let item = lookup.slice().reverse().find(function(item) { return num >= item.value })
            if (this.value < 0) num *= -1
            return { value:(item ? (num / item.value).toPrecision(4).replace(rx, '$1') : '0'), symbol:(item ? item.symbol : null) }
        }
    },
}
</script>