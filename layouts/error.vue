<template>
        <div class="container">
            <h1 v-if="error.statusCode === 404">Сегодня страница не найдена</h1>
            <h1 v-else>Произошла ошибка</h1>
            <nuxt-link to="/">Вернуться на главную страницу</nuxt-link>
        </div>
</template>

<script>
    export default {
        props: ['error'],
        mounted() {
            console.log(this.error);
        } 
    }
</script>