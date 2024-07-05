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
    