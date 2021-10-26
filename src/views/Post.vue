<template>
  <div class="post" style="width:50%;margin:0 auto;">
    <img :src="postData.imageUrl" />
    <h1>{{ postData.title }}</h1>
    <p>{{ postData.content }}</p>
    <div>
        <p>Likes: {{ postData.likes }}</p>
        <a :href="`/author/${postData.userId}`">Author</a>
    </div>
  </div>
</template>

<script>
    export default {
        name:"Post",
        mounted() {
           this.$store.dispatch('fetchPostAction',this.$route.params.id)
        },
        computed: {
            postData() {
                return this.$store.state.post
            }
        }
    }
</script>