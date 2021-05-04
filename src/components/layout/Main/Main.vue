<template>
  <main class='videos' v-if='hasVideos'>
    <div class='broadcaster-container'>
      <div class='broadcaster-profile-picture-container'>
        <img alt='profile picture' v-bind:src='broadcaster_profile_picture_url'/>
      </div>
      <div class='broadcaster-details-container'>
        <h2> {{ broadcaster_name }} </h2>
        <p>{{ broadcaster_channel_description }}</p>
      </div>
    </div>
    <div class='video-container'>
      <div v-for='video in videos' v-bind:key='video.id'>
        <Video
          :title='video._data.title'
          :thumbnailURL='video._data.thumbnail_url'
          :thumbnailHeight='169'
          :thumbnailWidth='300'
          :videoURL='video._data.url'
          :duration='video._data.duration'
          :created='video._data.created_at'
        />
      </div>
    </div>
    <div class='load-videos-button-container'>
      <div class='load-videos' v-on:click='handleLoadVideos'>
        <span>Load More</span>
      </div>
    </div>
  </main>
  <main class='no-videos' v-else>
    <h1 v-if='initialLoad'>No Videos</h1>
    <h1 v-else>{{ broadcaster_name }} has no videos!</h1>
  </main>
</template>

<script src='./index.js'></script>
<style src='./main.scss' lang='scss'></style>
