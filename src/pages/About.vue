<script setup>
 const user = {}
</script>
<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="user.email.send()">send email</button>
  </div>
</template>
