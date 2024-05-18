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
    var divider = document.createElement('hr');
    imageContainer.appendChild(divider);
    console.log(divider);

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

var parents = document.querySelectorAll('.parent');

    // Loop through each parent
    parents.forEach(function(parent) {
        // Add a click event listener to each parent
        parent.addEventListener('click', function() {
            // Toggle the 'active' class on the submenu
            this.querySelector('.submenu').classList.toggle('active');
        });
    });