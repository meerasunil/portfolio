function renderImages(item) {
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    // Create and append the title
    var title = document.createElement('h2');
    title.textContent = item.name;
    imageContainer.appendChild(title);

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

parents.forEach(function(parent) {
    parent.addEventListener('click', function() {
        this.querySelector('.submenu').classList.toggle('active');
    });
});
document.getElementById('changeStylesButton').addEventListener('click', function() {
    var allElements = document.querySelectorAll('*');
    var button = document.getElementById('changeStylesButton');

    // Check the current state
    if (button.textContent === 'Clean me up') {
        // Store original styles
        allElements.forEach(function(element) {
            element.dataset.originalBackgroundImage = window.getComputedStyle(element).backgroundImage;
            element.dataset.originalColor = window.getComputedStyle(element).color;
        });

        // Apply clean styles
        allElements.forEach(function(element) {
            element.style.setProperty('background-image', 'none', 'important');
            element.style.setProperty('color', 'black', 'important');
        });

        document.body.dataset.originalBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
        document.querySelector('.sidebar').dataset.originalBackgroundColor = window.getComputedStyle(document.querySelector('.sidebar')).backgroundColor;
        document.querySelector('.content').dataset.originalBackgroundColor = window.getComputedStyle(document.querySelector('.content')).backgroundColor;
        button.dataset.originalBackgroundColor = window.getComputedStyle(button).backgroundColor;
        button.dataset.originalColor = window.getComputedStyle(button).color;

        document.body.style.setProperty('background-color', 'white', 'important');
        document.querySelector('.sidebar').style.setProperty('background-color', 'white', 'important');
        document.querySelector('.content').style.setProperty('background-color', 'white', 'important');
        button.style.setProperty('background-color', 'transparent', 'important');
        button.style.setProperty('color', 'black', 'important');

        // Update button text
        button.textContent = 'Make Dirty Play Around Soil Ruin Decorate';
    } else {
        // Restore original styles
        allElements.forEach(function(element) {
            element.style.setProperty('background-image', element.dataset.originalBackgroundImage, 'important');
            element.style.setProperty('color', element.dataset.originalColor, 'important');
        });

        document.body.style.setProperty('background-color', document.body.dataset.originalBackgroundColor, 'important');
        document.querySelector('.sidebar').style.setProperty('background-color', document.querySelector('.sidebar').dataset.originalBackgroundColor, 'important');
        document.querySelector('.content').style.setProperty('background-color', document.querySelector('.content').dataset.originalBackgroundColor, 'important');
        button.style.setProperty('background-color', button.dataset.originalBackgroundColor, 'important');
        button.style.setProperty('color', button.dataset.originalColor, 'important');

        // Update button text
        button.textContent = 'Clean me up';
    }
});