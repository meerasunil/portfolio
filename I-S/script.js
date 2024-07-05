// Select two different random items from the data array
var firstItemIndex = Math.floor(Math.random() * data.length);
var secondItemIndex;
do {
    secondItemIndex = Math.floor(Math.random() * data.length);
} while (secondItemIndex === firstItemIndex);

var firstItem = data[firstItemIndex];
var secondItem = data[secondItemIndex];

// Create HTML elements to display the selected items
var contentDiv = document.getElementById('content');
var contentHTML = '<div style="display: flex; align-items: stretch;">';

// Add first item details
contentHTML += '<div style="flex: 1; padding: 0px;">';
contentHTML += '<h2>' + firstItem.name + '</h2>';
contentHTML += '<p>Date: ' + firstItem.date + '</p>';
contentHTML += '<img src="' + firstItem.imageUrl + '" alt="' + firstItem.name + '" style="width: 100%;">';
if (firstItem.url) {
    contentHTML += '<p>URL: <a href="' + firstItem.url + '">' + firstItem.url + '</a></p>';
}
contentHTML += '</div>';

// Add a separator using a pseudo-element
contentHTML += '<div style="width: 2px; background-color: black;"></div>';

// Add second item details
contentHTML += '<div style="flex: 1; padding: 0px;">';
contentHTML += '<h2>' + secondItem.name + '</h2>';
contentHTML += '<p>Date: ' + secondItem.date + '</p>';
contentHTML += '<img src="' + secondItem.imageUrl + '" alt="' + secondItem.name + '" style="width: 100%;">';
if (secondItem.url) {
    contentHTML += '<p>URL: <a href="' + secondItem.url + '">' + secondItem.url + '</a></p>';
}
contentHTML += '</div>';

contentHTML += '</div>';

// Display the selected items in the content section
contentDiv.innerHTML = contentHTML;


var parents = document.querySelectorAll('.parent');

// Loop through each parent
parents.forEach(function(parent) {
    // Add a click event listener to each parent
    parent.addEventListener('click', function() {
        // Toggle the 'active' class on the submenu
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
