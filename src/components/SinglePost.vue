<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tags in post.tags" :key="tags">
      <p class="pill">#{{tags}}</p>
    </span>
   
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  
props: ['post'],
setup(props) {
    const snippet = computed(() =>{
        return props.post.body.substring(0,100) + " ..."
    })

    const handleDelete = () =>{
      
      fetch("http://localhost:3000/posts/" + props.post.id, {
        method: "DELETE"
      }).then(() => {
       this.$emit("delete", project.id)
      })
      
    }

    return {snippet, handleDelete}
}
}
</script>


<style>
  .post {
        text-align: left;
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
</style>