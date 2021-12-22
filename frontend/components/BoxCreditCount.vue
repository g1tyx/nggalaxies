<template>
    <div class="col-6 d-flex align-items-baseline justify-content-center">
        <img src="~/assets/img/credit.png" width="12" height="12" alt="Credit" />
        <FormatNumber :value="value" class="ms-1" />
    </div>
</template>

<script>
    export default {
    
        props:[ 'value' ],
    }
</script>
