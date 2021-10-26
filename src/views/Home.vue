<template>
  <input v-model="search" />
  <div v-for="(item, index) in posts" :key="item.title">
    <h1>{{ item.title }}</h1>
    <button @click="delete(item.id)">DELETE</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Home',
  data() {
    return {
      search:''
    }
  },
  computed: {
    posts() {
      return this.$store.state.searchPosts
    }
  },
  methods: {
    delete(index) {
      console.log(index)
      this.$store.dispatch('deletePostsAction',index)
    }
  },
  watch: {
    search(value) {
      this.$store.dispatch('filterPostsAction',value)
    }
  }
});
</script>
