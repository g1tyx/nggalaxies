(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7],{302:function(e,l,o){"use strict";o.r(l);o(308),o(43),o(7),o(34),o(23),o(65);var t={props:["value"],computed:{format:function(){if(this.value===1/0)return{value:parseFloat(this.value),symbol:""};var e=parseFloat(Math.abs(this.value));if(0==e)return{value:parseFloat(this.value),symbol:""};if(e>0&&e<1)return{value:parseFloat(this.value).toFixed(1),symbol:""};var l=[{value:1,symbol:""},{value:1e3,symbol:"e3"},{value:1e6,symbol:"e6"},{value:1e9,symbol:"e9"},{value:1e12,symbol:"e12"},{value:1e15,symbol:"e15"},{value:1e18,symbol:"e18"},{value:1e21,symbol:"e21"},{value:1e24,symbol:"e24"},{value:1e27,symbol:"e27"},{value:1e30,symbol:"e30"},{value:1e33,symbol:"e33"},{value:1e36,symbol:"e36"},{value:1e39,symbol:"e39"},{value:1e42,symbol:"e42"},{value:1e45,symbol:"e45"},{value:1e48,symbol:"e48"},{value:1e51,symbol:"e51"},{value:1e54,symbol:"e54"},{value:1e57,symbol:"e57"},{value:1e60,symbol:"e60"},{value:1e63,symbol:"e63"},{value:1e66,symbol:"e66"},{value:1e69,symbol:"e69"},{value:1e72,symbol:"e72"},{value:1e75,symbol:"e75"},{value:1e78,symbol:"e78"},{value:1e81,symbol:"e81"},{value:1e84,symbol:"e84"},{value:1e87,symbol:"e87"},{value:1e90,symbol:"e90"},{value:1e93,symbol:"e93"},{value:1e96,symbol:"e96"},{value:1e99,symbol:"e99"},{value:1e102,symbol:"e102"},{value:1e105,symbol:"e105"},{value:1e108,symbol:"e108"},{value:1e111,symbol:"e111"},{value:1e114,symbol:"e114"},{value:1e117,symbol:"e117"},{value:1e120,symbol:"e120"},{value:1e123,symbol:"e123"},{value:1e126,symbol:"e126"},{value:1e129,symbol:"e129"},{value:1e132,symbol:"e132"},{value:1e135,symbol:"e135"},{value:1e138,symbol:"e138"},{value:1e141,symbol:"e141"},{value:1e144,symbol:"e144"},{value:1e147,symbol:"e147"},{value:1e150,symbol:"e150"},{value:1e153,symbol:"e153"},{value:1e156,symbol:"e156"},{value:1e159,symbol:"e159"},{value:1e162,symbol:"e162"},{value:1e165,symbol:"e165"},{value:1e168,symbol:"e168"},{value:1e171,symbol:"e171"},{value:1e174,symbol:"e174"},{value:1e177,symbol:"e177"},{value:1e180,symbol:"e180"},{value:1e183,symbol:"e183"},{value:1e186,symbol:"e186"},{value:1e189,symbol:"e189"},{value:1e192,symbol:"e192"},{value:1e195,symbol:"e195"},{value:1e198,symbol:"e198"},{value:1e201,symbol:"e201"},{value:1e204,symbol:"e204"},{value:1e207,symbol:"e207"},{value:1e210,symbol:"e210"},{value:1e213,symbol:"e213"},{value:1e216,symbol:"e216"},{value:1e219,symbol:"e219"},{value:1e222,symbol:"e222"},{value:1e225,symbol:"e225"},{value:1e228,symbol:"e228"},{value:1e231,symbol:"e231"},{value:1e234,symbol:"e234"},{value:1e237,symbol:"e237"},{value:1e240,symbol:"e240"},{value:1e243,symbol:"e243"},{value:1e246,symbol:"e246"},{value:1e249,symbol:"e249"},{value:1e252,symbol:"e252"},{value:1e255,symbol:"e255"},{value:1e258,symbol:"e258"},{value:1e261,symbol:"e261"},{value:1e264,symbol:"e264"},{value:1e267,symbol:"e267"},{value:1e270,symbol:"e270"},{value:1e273,symbol:"e273"},{value:1e276,symbol:"e276"},{value:1e279,symbol:"e279"},{value:1e282,symbol:"e282"},{value:1e285,symbol:"e285"},{value:1e288,symbol:"e288"},{value:1e291,symbol:"e291"},{value:1e294,symbol:"e294"},{value:1e297,symbol:"e297"},{value:1e300,symbol:"e300"},{value:1e303,symbol:"e303"},{value:1e306,symbol:"e306"},{value:Infinity,symbol:"e309"}].slice().reverse().find((function(l){return e>=l.value}));return this.value<0&&(e*=-1),{value:l?(e/l.value).toPrecision(4).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1"):"0",symbol:l?l.symbol:null}}}},r=o(63),component=Object(r.a)(t,(function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("span",[e._v(e._s(e.format.value.toLocaleString())),e.format.symbol?o("small",{staticClass:"text-muted",staticStyle:{"font-size":".75em"}},[e._v(" "+e._s(e.format.symbol))]):e._e()])}),[],!1,null,null,null);l.default=component.exports},308:function(e,l,o){"use strict";var t=o(3),r=o(1),v=o(4),y=o(64),m=o(309),n=o(201),c=o(9),f=r.RangeError,d=r.String,h=Math.floor,x=v(n),O=v("".slice),I=v(1..toFixed),j=function(e,l,o){return 0===l?o:l%2==1?j(e,l-1,o*e):j(e*e,l/2,o)},w=function(data,e,l){for(var o=-1,t=l;++o<6;)t+=e*data[o],data[o]=t%1e7,t=h(t/1e7)},_=function(data,e){for(var l=6,o=0;--l>=0;)o+=data[l],data[l]=h(o/e),o=o%e*1e7},F=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var l=d(data[e]);s=""===s?l:s+x("0",7-l.length)+l}return s};t({target:"Number",proto:!0,forced:c((function(){return"0.000"!==I(8e-5,3)||"1"!==I(.9,0)||"1.25"!==I(1.255,2)||"1000000000000000128"!==I(0xde0b6b3a7640080,0)}))||!c((function(){I({})}))},{toFixed:function(e){var l,o,t,r,v=m(this),n=y(e),data=[0,0,0,0,0,0],c="",h="0";if(n<0||n>20)throw f("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return d(v);if(v<0&&(c="-",v=-v),v>1e-21)if(o=(l=function(e){for(var l=0,o=e;o>=4096;)l+=12,o/=4096;for(;o>=2;)l+=1,o/=2;return l}(v*j(2,69,1))-69)<0?v*j(2,-l,1):v/j(2,l,1),o*=4503599627370496,(l=52-l)>0){for(w(data,0,o),t=n;t>=7;)w(data,1e7,0),t-=7;for(w(data,j(10,t,1),0),t=l-1;t>=23;)_(data,1<<23),t-=23;_(data,1<<t),w(data,1,1),_(data,2),h=F(data)}else w(data,0,o),w(data,1<<-l,0),h=F(data)+x("0",n);return h=n>0?c+((r=h.length)<=n?"0."+x("0",n-r)+h:O(h,0,r-n)+"."+O(h,r-n)):c+h}})},309:function(e,l,o){var t=o(4);e.exports=t(1..valueOf)},340:function(e,l,o){"use strict";o.r(l);o(17),o(13),o(18),o(7),o(19),o(16),o(20);var t=o(5),r=o(76);function v(object,e){var l=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),l.push.apply(l,o)}return l}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(l){Object(t.a)(e,l,source[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(source,l))}))}return e}var m={props:["value"],computed:y(y({},Object(r.c)({currentGalaxyId:"currentGalaxyId",galaxyById:"galaxy/byId",fleetById:"fleet/byId",fleetByGalaxy:"fleet/byGalaxy",fleetIndexById:"fleet/indexById"})),{},{fleetCount:function(){return this.fleetByGalaxy(this.currentGalaxyId).length},fleetIndex:function(){return this.fleetIndexById(this.fleetById(this.galaxyById(this.currentGalaxyId).currentFleetId).id)+1}})},n=o(63),component=Object(n.a)(m,(function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("div",{staticClass:"col-12 text-center"},[o("div",{staticClass:"text-warning"},[e._v(e._s(e.$t("boneHunterFleet"))+" "+e._s(e.fleetIndex)+" / "+e._s(e.fleetCount))]),e._v(" "),o("FormatNumber",{staticClass:"h4 text-warning",attrs:{value:e.value}})],1)}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{FormatNumber:o(302).default})}}]);