<template>
<div class="home">
  
<div v-if="error">{{error}}</div>
<div v-if="posts.length" class="layout">

<PostList :posts="posts"/>
<TagCloud :posts="posts"/>
</div>
<div v-else> 
  <Spinner/>

</div>

<button @click="posts.pop()">Ta bort en </button>
</div>

</template>

<script>
import { ref } from '@vue/reactivity'

import PostList from '../components/PostList.vue'
import getPosts from '../composable/getPosts.js'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'HomeView',
  components: {PostList, Spinner, TagCloud},
  setup () {
    const {posts, error, load} = getPosts()
  
    load()
  
   const toggleOpen = ref(true);
    
    return {posts, toggleOpen, error}
    },
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  
}
</style>
