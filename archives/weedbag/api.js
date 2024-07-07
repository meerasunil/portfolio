const personalAccessToken = 'Bearer patwmsVvHEZVahyp0.811e27b5ff5b43cf647ebf7b20f3d5ac62c9151b103586ae58baa8c30b702ae9';
const apiUrl = 'https://api.airtable.com/v0/appHyHNhtwSqNzR2J/returntoweedbag';
const headers = {
  'Authorization': personalAccessToken,
};

let records = [];

fetch(apiUrl, { headers })
  .then(response => response.json())
  .then(data => {
    console.log(data); // Log the entire response

    if (data.records) {
      records = data.records;
      renderItems(records);
      console.log('Data retrieved successfully');
    } else {
      console.error('No records found in the response');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

function renderItems(items) {
  const weedContainer = document.getElementById('weed-container');
  weedContainer.innerHTML = ''; // Clear existing items

  items.forEach(record => {
    if (record.fields.photo && record.fields.photo.length > 0) {
      const photoUrl = record.fields.photo[0].url; 
      const caption = record.fields.Name;

      const weedItem = document.createElement('div');
      weedItem.className = 'weed-item';

      const image = document.createElement('img');
      image.src = photoUrl;

      image.onerror = function() {
          console.error('Error loading image:', photoUrl);
      };

      const captionElement = document.createElement('p');
      captionElement.textContent = caption;

      weedItem.appendChild(image);
      weedItem.appendChild(captionElement);

      weedContainer.appendChild(weedItem);
    }
  });
}

document.getElementById('sort-button').addEventListener('click', () => {
  const sortedRecords = [...records].sort((a, b) => {
    const nameA = a.fields.Name.toUpperCase(); // Ignore case
    const nameB = b.fields.Name.toUpperCase(); // Ignore case
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  renderItems(sortedRecords);
});

document.getElementById('random-button').addEventListener('click', () => {
  const randomRecords = [...records].sort(() => Math.random() - 0.5);
  renderItems(randomRecords);
});
