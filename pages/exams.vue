<template>
  <section class="exams">
    <h1 class="title">
      Exams
    </h1>

    <Loader></Loader>

    <button @click="showLoader">Request</button>
  </section>
</template>

<script>
  import Loader from '../components/Loader';
  import axios from 'axios';

  export default {
    components: {
      Loader
    },
    transition: 'bounce',
    methods: {
      showLoader() {
        console.log(this.$store.state.loader);
      }
    },
    async created() {
      let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(posts);

    }
  }
</script>
