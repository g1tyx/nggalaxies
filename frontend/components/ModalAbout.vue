<template>
    <div class="modal fade" id="aboutModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-1">
                    <div class="row g-1 flex-column align-items-center">
                    
                        <div class="col">
                            <div class="p-1 d-flex align-items-center">
                                <img src="~/assets/img/about.png" width="16" height="16" />
                                <span class="ms-2 h5">{{ $t('submenuName_about') }}</span>
                            </div>
                        </div>                        
                        
                        <div class="col">
                            <div class="p-1 text-center lh-sm">
                                <small class="text-light">{{ $t('aboutModal_text1') }}</small>
                            </div>
                        </div>                        
                        
                        <div class="col">
                            <div class="p-1 text-center">
                                <span>{{ $t('aboutModal_text2') }}</span>
                            </div>
                        </div>                        
                        
                        <div class="col">
                            <div class="p-1 text-center">
                                <span>{{ $t('aboutModal_text3') }}</span>
                            </div>
                        </div>                        
                    
                        <div class="col">
                            <div class="p-1">
                                <div class="row g-1">
                                
                                    <div class="col">
                                        <a class="w-100 btn btn-primary" href="https://freddecgames.com" target="_blank">
                                            <img src="~/assets/img/freddec.png" width="16" height="16" class="rounded" alt="Freddec Games" />
                                            <span class="ms-1">Freddec Games</span>
                                        </a>
                                    </div>
                                    
                                    <div class="col">
                                        <a class="w-100 btn btn-primary" href="https://discord.gg/3UkgeeT9CV" target="_blank">
                                            <img src="~/assets/img/discord.png" width="16" height="16" alt="Discord" />
                                            <span class="ms-1">Discord</span>
                                        </a>
                                    </div>
                                    
                                    <div class="col">
                                        <button type="button" class="w-100 btn btn-primary" data-bs-toggle="modal" data-bs-target="#donatingModal">
                                            <img src="~/assets/img/donating.png" width="16" height="16" :alt="$t('submenuName_donating')" />
                                            <span class="ms-1">{{ $t('submenuName_donating') }}</span>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="col">
                            <div class="p-1">
                                <span>{{ $t('aboutModal_title1') }} - v0.3.1 - 27-12-2021</span>
                            </div>
                        </div>                        
                        
                        <div class="col">
                            <div class="p-1">
                                <ul class="mb-0 text-light small">
                                    <li>FIX: session token expired</li>
                                    <li>FIX: max build and ship cost computing</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
