// Check if item.imageUrl is an array or a single string
function renderImages(item) {
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    // If item.imageUrl is an array
    if (Array.isArray(item.imageUrl)) {
        item.imageUrl.forEach(function(imageUrl) {
            var image = document.createElement('img');
            image.src = imageUrl;
            image.alt = item.name;
            imageContainer.appendChild(image);
        });
    } else { // If item.imageUrl is a single string
        var image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.name;
        imageContainer.appendChild(image);
    }

    content.appendChild(imageContainer);
}

var content = document.getElementById('content');
data.forEach(renderImages);
