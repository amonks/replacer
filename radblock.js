var array_of_images = Array.prototype.slice.call(document.getElementsByTagName('img'))
array_of_images.map(function (img) {
  img.setAttribute('src', chrome.extension.getURL('./icons/icon-48.png'))
})

