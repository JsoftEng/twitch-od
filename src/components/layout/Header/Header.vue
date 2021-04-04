<template>
  <div class='header-container'>
    <div class='heading-container'>
      <div class='heading-icon'>
        <i class="fas fa-video"></i>
      </div>
      <h1 class='heading-label'>TWITCHOD</h1>
    </div>
    <div class='heading-search-container'>
      <input v-model='search' class='heading-search-input' type='text' placeholder='Search by username'/>
      <span class='heading-search-icon'><i v-on:click='handleSearch' class="fas fa-search"></i></span>
    </div>
  </div>
</template>

<script src='./index.js'></script>
<style src='./header.scss' lang='scss'></style>
