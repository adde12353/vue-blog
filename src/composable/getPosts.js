import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () =>{
    const posts = ref([])
    const error = ref(null)

    const load = async () =>{
      try {
        const res = await projectFirestore.collection('posts')
        .orderBy('createdAt', 'desc')
        .get() //asyns
  
        posts.value = res.docs.map(doc => { //Köra igenom objekten och lägger till id från 
          //console.log(doc.data)
          return {...doc.data(), id: doc.id}
        })
      }
      catch(err){
          error.value = err.message
          console.log(err.message)
      }
    }
    return {posts, error, load}
}

export default getPosts