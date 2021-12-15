<template>
    <div class="modal fade" id="optionsModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-1">
                    <div class="row g-1 flex-column align-items-center">
                    
                        <div class="col">
                            <div class="p-1 d-flex align-items-center">
                                <img src="~/assets/img/options.png" width="16" height="16" />
                                <span class="ms-2 h5">{{ $t('submenuName_options') }}</span>
                            </div>
                        </div>
                        
                        <div class="col">
                            <div class="p-1">
                                <span>{{ $t('savedData_title1') }}</span>
                            </div>
                        </div>
                                
                        <div class="col">
                            <div class="p-1">
                                <textarea class="form-control" style="height:100px;" v-model="compressed"></textarea>
                            </div>
                        </div>
                                
                        <div class="col">
                            <div class="p-1 lh-sm">
                                <small class="text-light">{{ $t('savedData_text1') }}</small>
                            </div>
                        </div>
                                
                        <div class="col">
                            <div class="p-1">
                                <div class="row g-1">
                                
                                    <div class="col">
                                        <button class="btn btn-danger" @click="hardReset()">
                                            <span>{{ $t('btnName_hardReset') }}</span>
                                        </button>
                                    </div> 
                                    
                                    <div class="col-auto">
                                        <button class="btn btn-primary" @click="exportData()">
                                            <span>{{ $t('btnName_export') }}</span>
                                        </button>
                                    </div>
                                    
                                    <div class="col-auto">
                                        <button class="btn btn-primary" @click="importData()">
                                            <span>{{ $t('btnName_import') }}</span>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    
        data() {
            return {
            
                compressed: null,
            }
        },
        
        methods: {            
        
            exportData() {
                
                let text = localStorage.getItem('nggalaxies')
                this.compressed = text
            },
            
            importData() {

                if (!this.compressed || !this.compressed.trim()) return console.warn('No data to import')
                if (this.compressed.length % 4 !== 0) return console.warn('Data corrupted')
                
                localStorage.setItem('nggalaxies', this.compressed)
                
                window.location.reload()
            },
            
            hardReset: function() {
            
                localStorage.removeItem('nggalaxies')                
                
                window.location.reload()
            },
        },
    }
</script>