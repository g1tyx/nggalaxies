<template>
    <div class="modal fade" id="donatingModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-1">
                    <div class="row g-1 flex-column align-items-center">
                    
                        <div class="col">
                            <div class="p-1 d-flex align-items-center">
                                <img src="~/assets/img/donating.png" width="16" height="16" />
                                <span class="ms-2 h5">{{ $t('submenuName_donating') }}</span>
                            </div>
                        </div>
                        
                        <div class="col">
                            <div class="p-1 text-center lh-sm">
                                <small class="text-light">{{ $t('donatingModal_text1') }}</small>
                            </div>
                        </div>
                        
                        <div class="col">                            
                            <div class="p-1 text-center">
                                <span>{{ $t('donatingModal_text2') }}</span>
                            </div>
                        </div>
                                
                        <div class="col">                            
                            <div class="p-1">
                                <div class="row g-1">
                                
                                    <form class="col" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                        <input type="hidden" name="cmd" value="_s-xclick">
                                        <input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
                                        <button type="submit" class="w-100 btn btn-primary">
                                            <div class="row gx-1 align-items-center justify-content-center">
                                                <div class="col-auto d-flex align-items-center"><img src="~/assets/img/paypal.png" width="16" height="16" /></div>
                                                <div class="col-auto">Paypal</div>
                                            </div>
                                        </button>
                                    </form>
                                    
                                    <div class="col">
                                        <a href="https://www.patreon.com/bePatron?u=61283131" class="w-100 btn btn-primary" target="_blank">
                                            <div class="row gx-1 align-items-center justify-content-center">
                                                <div class="col-auto d-flex align-items-center"><img src="~/assets/img/patreon.png" width="16" height="16" /></div>
                                                <div class="col-auto">Patreon</div>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div class="col">
                                        <a href="https://ko-fi.com/freddecgames" class="w-100 btn btn-primary" target="_blank">
                                            <div class="row gx-1 align-items-center justify-content-center">
                                                <div class="col-auto d-flex align-items-center"><img src="~/assets/img/kofi.png" width="16" height="16" /></div>
                                                <div class="col-auto">Ko-fi</div>
                                            </div>
                                        </a>
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
