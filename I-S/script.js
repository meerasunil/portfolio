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
var contentHTML = '<div style="display: flex; align-items: center;">';

// Add first item details
contentHTML += '<div style="width: 50%; padding: 10px;">';
contentHTML += '<h2>' + firstItem.name + '</h2>';
contentHTML += '<p>Date: ' + firstItem.date + '</p>';
contentHTML += '<img src="' + firstItem.imageUrl + '" alt="' + firstItem.name + '" style="width: 100%;">';
if (firstItem.url) {
    contentHTML += '<p>URL: <a href="' + firstItem.url + '">' + firstItem.url + '</a></p>';
}
contentHTML += '</div>';

// Add a black bar separator
contentHTML += '<div style="width: 3px; background-color: black; height: 100vh;"></div>';

// Add second item details
contentHTML += '<div style="width: 50%; padding: 10px;">';
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
