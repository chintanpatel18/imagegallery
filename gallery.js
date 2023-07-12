// Define an array of gallery items
var galleryItems = [
  {
    largeImage: "flowers-red-large.jpg",
    smallImage: "flowers-red-small.jpg",
    title: "Red Flowers",
    description: "Beautiful red flowers in bloom."
  },
  {
    largeImage: "flowers-pink-large.jpg",
    smallImage: "flowers-pink-small.jpg",
    title: "Pink Flowers",
    description: "Delicate pink flowers with vibrant petals."
  },
  {
    largeImage: "flowers-yellow-large.jpg",
    smallImage: "flowers-yellow-small.jpg",
    title: "Yellow Flowers",
    description: "Bright yellow flowers shining in the sun."
  },
  {
    largeImage: "flowers-purple-large.jpg",
    smallImage: "flowers-purple-small.jpg",
    title: "Purple Flowers",
    description: "Gorgeous purple flowers in a stunning display."
  },
  {
    largeImage: "flowers-white-large.jpg",
    smallImage: "flowers-white-small.jpg",
    title: "White Flowers",
    description: "Elegant white flowers with delicate petals."
  }
];

// Get the <ul> element for the thumbnail list
var thumbnailList = document.getElementById("thumbnail-list");

// Loop through the gallery items and create <li> elements with thumbnail images
galleryItems.forEach(function (item) {
  // Create <li> element
  var listItem = document.createElement("li");

  // Create <img> element for the thumbnail image
  var thumbnailImage = document.createElement("img");
  thumbnailImage.src =   item.smallImage;
  thumbnailImage.alt = "";
  thumbnailImage.width = 240;
  thumbnailImage.height = 160;

  // Add click event listener to the thumbnail image
  thumbnailImage.addEventListener("click", function (item) {
    return function () {
      var featuredImage = document.getElementById("featured-image");
      var imageTitle = document.getElementById("image-title");
      var imageDescription = document.getElementById("image-description");

      // Set the source and alt attributes of the featured image
      featuredImage.src =  item.largeImage;
      featuredImage.alt = "";

      // Set the image title and description in the <figcaption>
      imageTitle.textContent = item.title;
      imageDescription.textContent = item.description;

      // Remove active class from all thumbnail images
      var thumbnailImages = thumbnailList.querySelectorAll("img");
      thumbnailImages.forEach(function (img) {
        img.classList.remove("active");
      });

      // Add active class to the clicked thumbnail image
      thumbnailImage.classList.add("active");
    };
  }(item));

  // Append the thumbnail image to the <li> element
  listItem.appendChild(thumbnailImage);

  // Append the <li> element to the thumbnail list
  thumbnailList.appendChild(listItem);
});
