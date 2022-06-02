<template>
  <div class="tag">
      <div v-if="error">{{error}}</div>
      <div v-if="posts.length">
          <PostList :posts="postWithtag"/> 
          <TagCloud :posts="posts"/>
      </div>
      <div v-else><Spinner/></div>
  </div>
</template>

<script>
import getPosts from '../composable/getPosts'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import {useRoute} from 'vue-router'
import {computed} from 'vue'


export default {
    components : {Spinner, PostList, TagCloud},
    
    setup(){
        
        const route = useRoute()
        const {posts, error, load} = getPosts()
        

        load()
        
        const postWithtag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })
        console.log(postWithtag)
    return {posts, error, load, postWithtag}
    }
    
}
</script>

<style>

</style>