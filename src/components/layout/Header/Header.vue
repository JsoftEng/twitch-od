<template>
  <div class='header-container'>
    <div class='heading-container'>
      <a href='/' class='heading-icon'>
        <i class="fas fa-video"></i>
      </a>
      <a href='/'>
        <h1 class='heading-label'>TWITCHOD</h1>
      </a>
    </div>
    <div class='heading-search-container'>
      <form id='search-form' class='search-form' v-on:submit.prevent='handleSearch'>
        <input v-model='search' class='heading-search-input' type='text' placeholder='Search by username'/>
        <span class='heading-search-icon'><i v-on:click='handleSearch' class="fas fa-search"></i></span>
      </form>
    </div>
  </div>
</template>

<script src='./index.js'></script>
<style src='./header.scss' lang='scss'></style>
