<template>
  <div class="about">
    <h1>{{ userData.firstName }} {{ userData.lastName }}</h1>
    <img :src="userData.avatar" />
    <p>EMAIL: {{ userData.email }}</p>
    <p>AGE: {{ userData.age }}</p>
    <p>PHONE: {{ userData.phone }}</p>
  </div>
</template>

<script>
    export default {
        name:"Author",
        mounted() {
           this.$store.dispatch('fetchAuthorAction',this.$route.params.id)
        },
        computed: {
            userData() {
                return this.$store.state.author
            }
        }
    }
</script>