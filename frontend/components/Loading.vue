<template>
    <div class="w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="fadein bg-dark rounded-1 p-1">
            <div class="row g-1 flex-column">
                
                <div class="col">
                    <div class="p-1 text-center">
                        <img src="~/assets/img/logo.png" alt="Logo" width="64" height="64" class="rounded-3" />
                        <h5 class="mt-1">NG Galaxies</h5>
                        <small class="text-light flicker">{{ $t('screenLoading_text') }}</small>
                    </div>                
                </div>                
                
            </div>
        </div>        
    </div>        
</template>

<script>
    export default {
    }
</script>
