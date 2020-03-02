<template>
    <div class="loader">
        <p>{{ loading }}</p>
        <p>asd</p>  
    </div>
</template>

<script>
    export default {
        computed: {
            loading() {
                return this.$store.state.isLoading;
            }
        },
    }
</script>
