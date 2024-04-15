var randomItem = data[Math.floor(Math.random() * data.length)];

// Create HTML elements to display the selected item
var contentDiv = document.getElementById('content');
var contentHTML = '<h2>' + randomItem.name + '</h2>';
contentHTML += '<p>Date: ' + randomItem.date + '</p>';
if (Array.isArray(randomItem.imageUrl)) {
    contentHTML += '<img src="' + randomItem.imageUrl[Math.floor(Math.random() * randomItem.imageUrl.length)] + '" alt="' + randomItem.name + '">';
} else {
    contentHTML += '<img src="' + randomItem.imageUrl + '" alt="' + randomItem.name + '">';
}
if (randomItem.url) {
    contentHTML += '<p>URL: <a href="' + randomItem.url + '">' + randomItem.url + '</a></p>';
}

// Display the selected item in the content section
contentDiv.innerHTML = contentHTML;