// Importing function to download images
const imageDownloader = require('./image-downloader').download;

// URL of image to download
const imageUrl = '';

// Output file with directory to save to
const filename = '/images/'.concat('profile.jpg');

// Downloading images through function
imageDownloader(imageUrl, filename, function() {
    console.log('${imageUrl} image download')
});