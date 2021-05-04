function formatVideoDuration (duration) {
  const durationArray = duration
    .replace('h', ':')
    .replace('m', ':')
    .replace('s', '')
    .split(':')
  let newDuration = ''
  let minIndex = 1
  let secIndex = 2

  switch (durationArray.length) {
    // VOD is only seconds long
    case 1:
      minIndex = null
      secIndex = 0
      break

    // VOD is only minutes long
    case 2:
      minIndex = 0
      secIndex = 1
      break
    default:
      break
  }

  // Add leading zero to minutes if less than 10 minutes
  if (minIndex) {
    if (durationArray[minIndex].length < 2) {
      durationArray[minIndex] = '0' + durationArray[minIndex]
    }
  }

  // Add leading zero to seconds if less than 10 seconds
  if (durationArray[secIndex].length < 2) {
    durationArray[secIndex] = '0' + durationArray[secIndex]
  }

  newDuration = durationArray.join(':')

  return newDuration
}

function formatVideoPublishDate (publishDate) {
  let newPublishDate = ''
  let seconds = 0
  let minutes = 0
  let hours = 0
  let days = 0
  let weeks = 0
  let months = 0
  let years = 0
  const publishedOn = new Date(publishDate)
  const currDate = new Date()
  const dateDiffMilliseconds = Math.abs(currDate - publishedOn)

  seconds = Math.ceil(dateDiffMilliseconds / 1000)
  minutes = Math.ceil(dateDiffMilliseconds / (1000 * 60))
  hours = Math.ceil(dateDiffMilliseconds / (1000 * 60 * 60))
  days = Math.ceil(dateDiffMilliseconds / (1000 * 60 * 60 * 24))
  weeks = Math.ceil(dateDiffMilliseconds / (1000 * 60 * 60 * 24 * 7))
  months = Math.ceil(dateDiffMilliseconds / (1000 * 60 * 60 * 24 * 7 * 4))
  years = Math.ceil(dateDiffMilliseconds / (1000 * 60 * 60 * 24 * 7 * 4 * 12))

  if (seconds < 60) {
    newPublishDate = seconds + ' second(s) ago'
  } else if (minutes < 60) {
    newPublishDate = minutes + ' minute(s) ago'
  } else if (hours < 24) {
    newPublishDate = hours + ' hour(s) ago'
  } else if (days < 7) {
    newPublishDate = days + ' day(s) ago'
  } else if (weeks < 4) {
    newPublishDate = weeks + ' week(s) ago'
  } else if (months < 12) {
    newPublishDate = months + ' month(s) ago'
  } else {
    newPublishDate = years + ' year(s) ago'
  }
  return newPublishDate
}

export { formatVideoDuration, formatVideoPublishDate }
