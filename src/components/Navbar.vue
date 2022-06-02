<template>
  <header>
      <h1>Den Spännande bloggen</h1>
  
  <nav>
      <router-link :to="{name: 'home'}">Hem</router-link>
      <router-link :to="{name: 'create'}">Skapa</router-link>
  </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px
}

header h1 {
    color: #dfdfdf;
    font-size: 48px;
}

header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
}

header a.router-link-active {
    color: #444;
    font-weight: bold;
}

 @media (max-width: 600px) {
     header h1{
         font-size: 25px;
     }
     
 }
</style>