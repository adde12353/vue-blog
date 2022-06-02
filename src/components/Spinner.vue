<template>
  <div class="spinn">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.spinn{
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 5px solid transparent;
    border-radius: 50%;
    border-top-color: #ff8800;
    animation: spin 1s ease infinite;
}

@keyframes spin {
  to { transform: rotateZ(360deg);}
}
</style>