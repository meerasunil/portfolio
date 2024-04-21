var parents = document.querySelectorAll('.parent');

    // Loop through each parent
    parents.forEach(function(parent) {
        // Add a click event listener to each parent
        parent.addEventListener('click', function() {
            // Toggle the 'active' class on the submenu
            this.querySelector('.submenu').classList.toggle('active');
        });
    });