import { projectFirestore } from '../firebase/config'
import { ref } from 'vue'


const getPost = (id) =>{
    const post = ref([])
    const error = ref(null)

    const load = async () =>{
      try {
          let res = await projectFirestore.collection('posts').doc(id).get()
         
          if(!res.exists){
            throw Error('Inlägget finns inte')
  
          }
          console.log(res.data)
          post.value = {...res.data(), id: res.id}
      
      }
      catch(err){
          error.value = err.message
          console.log(err.message)
      }
    }
    return {post, error, load}
}

export default getPost