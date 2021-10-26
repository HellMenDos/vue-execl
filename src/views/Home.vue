<template>
  <input v-model="search" />
  <div v-for="(item, index) in posts" :key="item.title" style="width:50%; margin:0 auto;">
    <h3>{{ item.title }}</h3>
    <p>{{ item.content }}</p>
    <div style="display:flex;justify-content:space-between;">
      <button @click="deletePost(item.id)">DELETE</button>
      <a :href="`post/${item.id}`">GO TO</a>
    </div>
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
    deletePost(index) {
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
