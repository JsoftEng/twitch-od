<template>
  <div class='video'>
    <div class='video-thumbnail-container' v-bind:style="{ 'height': thumbnailHeight + 'px', 'width': thumbnailWidth + 'px' }">
      <div class='video-overlay-details'>
        <div class='video-overlay-duration'>
          <span> {{ duration_formatted }} </span>
        </div>
        <div class='video-overlay-publish-date'>
          <span> {{ publish_date_formated }} </span>
        </div>
      </div>
      <a class='video-thumbnail-bg-container' v-bind:href='video_url' target='_blank'>
        <div class='video-thumbnail-bg' v-bind:style="{ 'background-image': 'url(' + thumbnail_url + ')' }" />
      </a>
    </div>
    <div class='video-details'>
      <div class='video-detail-title'>
        <h2>  {{ title }} </h2>
      </div>
    </div>
  </div>
</template>

<script src='./index.js'></script>
<style src='./video.scss' lang='scss'></style>
