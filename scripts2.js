function renderImages(item) {
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    if (Array.isArray(item.imageUrl)) {
        item.imageUrl.forEach(function(imageUrl) {
            var image = document.createElement('img');
            image.src = imageUrl;
            image.alt = item.name;
            imageContainer.appendChild(image);
        });
    } else if (item.imageUrl) { 
        var image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.name;
        imageContainer.appendChild(image);
    }

    if (item.url) {
        var iframe = document.createElement('iframe');
        iframe.src = item.url;
        iframe.title = item.name;
        iframe.setAttribute('allowfullscreen', '');
        imageContainer.appendChild(iframe);
    }

    content.appendChild(imageContainer);
}

var content = document.getElementById('content');
data.forEach(renderImages);
