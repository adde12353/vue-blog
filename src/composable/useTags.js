import {ref} from 'vue'


const useTags = (posts) =>{
    const tags = ref([])
    const tagSet = new Set() // can not contain duplicates

    posts.forEach(item => {
        item.tags.forEach(tag => tagSet.add(tag) )
    })

    tags.value = [...tagSet] // spreads out to an array

    return {tags}
}

export default useTags