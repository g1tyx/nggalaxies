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
                { value: 1e126, symbol: "e126" },
                { value: 1e129, symbol: "e129" },
                { value: 1e132, symbol: "e132" },
                { value: 1e135, symbol: "e135" },
                { value: 1e138, symbol: "e138" },
                { value: 1e141, symbol: "e141" },
                { value: 1e144, symbol: "e144" },
                { value: 1e147, symbol: "e147" },
                { value: 1e150, symbol: "e150" },
                { value: 1e153, symbol: "e153" },
                { value: 1e156, symbol: "e156" },
                { value: 1e159, symbol: "e159" },
                { value: 1e162, symbol: "e162" },
                { value: 1e165, symbol: "e165" },
                { value: 1e168, symbol: "e168" },
                { value: 1e171, symbol: "e171" },
                { value: 1e174, symbol: "e174" },
                { value: 1e177, symbol: "e177" },
                { value: 1e180, symbol: "e180" },
                { value: 1e183, symbol: "e183" },
                { value: 1e186, symbol: "e186" },
                { value: 1e189, symbol: "e189" },
                { value: 1e192, symbol: "e192" },
                { value: 1e195, symbol: "e195" },
                { value: 1e198, symbol: "e198" },
                { value: 1e201, symbol: "e201" },
                { value: 1e204, symbol: "e204" },
                { value: 1e207, symbol: "e207" },
                { value: 1e210, symbol: "e210" },
                { value: 1e213, symbol: "e213" },
                { value: 1e216, symbol: "e216" },
                { value: 1e219, symbol: "e219" },
                { value: 1e222, symbol: "e222" },
                { value: 1e225, symbol: "e225" },
                { value: 1e228, symbol: "e228" },
                { value: 1e231, symbol: "e231" },
                { value: 1e234, symbol: "e234" },
                { value: 1e237, symbol: "e237" },
                { value: 1e240, symbol: "e240" },
                { value: 1e243, symbol: "e243" },
                { value: 1e246, symbol: "e246" },
                { value: 1e249, symbol: "e249" },
                { value: 1e252, symbol: "e252" },
                { value: 1e255, symbol: "e255" },
                { value: 1e258, symbol: "e258" },
                { value: 1e261, symbol: "e261" },
                { value: 1e264, symbol: "e264" },
                { value: 1e267, symbol: "e267" },
                { value: 1e270, symbol: "e270" },
                { value: 1e273, symbol: "e273" },
                { value: 1e276, symbol: "e276" },
                { value: 1e279, symbol: "e279" },
                { value: 1e282, symbol: "e282" },
                { value: 1e285, symbol: "e285" },
                { value: 1e288, symbol: "e288" },
                { value: 1e291, symbol: "e291" },
            ]
    
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
            
            let item = lookup.slice().reverse().find(function(item) { return num >= item.value })
            if (this.value < 0) num *= -1
            return { value:(item ? (num / item.value).toPrecision(4).replace(rx, '$1') : '0'), symbol:(item ? item.symbol : null) }
        }
    },
}
</script>