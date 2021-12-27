<template>
    <div class="modal fade" id="rankingModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-1">
                    <div class="row g-1 flex-column align-items-center">
                    
                        <div class="col">
                            <div class="p-1 d-flex align-items-center">
                                <img src="~/assets/img/user.png" width="16" height="16" />
                                <span class="ms-2 h5">{{ $t('submenuName_ranking') }}</span>
                            </div>
                        </div>                        
                        
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
                
                users: [],
            }
        },
        
        methods: {
        
            async update() {
            
                try {
                
                    let response = await this.$axios.$post('https://48360.playfabapi.com/Admin/GetPlayersInSegment',
                        { SegmentId:'63FBF76BAFE5637A' },
                        { headers:{ 'X-SecretKey':'TOCWA6OGEKK8X3W78GNTBB4ZN5XSAOSXSWZ8IMK8TEKO75W5PJ' } }
                    )
                    
                    this.users = []
                
                } catch(error) {
                    
                    console.log(error)
                }
            },
        },
        
        created() {
            
            this.update()
            this.interval = setInterval(() => { this.update() }, 60000)
        },
        
        beforeUnmount() {
            
            clearInterval(this.interval)
        },
    }
</script>