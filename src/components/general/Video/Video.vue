<template>
  <div class='video'>
    <div class='video-thumbnail'>
      <a v-bind:href='video_url' target='_blank'>
        <img v-bind:src='thumbnail_url'/>
      </a>
    </div>
    <div class='video-details'>
      <div class='video-detail-titles'>
        <h2>  {{ title }} </h2>
        <h2>  {{ title }} </h2>
      </div>
    </div>
  </div>
</template>

<script src='./index.js'></script>
<style src='./video.scss' lang='scss'></style>
