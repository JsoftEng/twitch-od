<template>
  <main class='videos' v-if='hasVideos'>
    <div class='broadcaster-container'>
      <div class='broadcaster-profile-picture-container'>
        <img v-bind:src='broadcaster_profile_picture_url'/>
      </div>
      <div class='broadcaster-details-container'>
        <h2> {{ broadcaster_name }} </h2>
        <p><i>{{ broadcaster_channel_description }}</i></p>
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
  </main>
  <main class='no-videos' v-else>
    <h1>{{ broadcaster_name }} Has No Videos!</h1>
  </main>
</template>

<script src='./index.js'></script>
<style src='./main.scss' lang='scss'></style>
