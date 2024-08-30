const accessToken = '4rETQzQOVolJsTJiVS0Av50ZTv1WqCtNlyjfDHssBHI';
const channelSlug = 'everything-open';
const blocksContainer = document.getElementById('blocks-container');

// URL for fetching the blocks in the specified channel
const baseUrl = `https://api.are.na/v2/channels/${channelSlug}/blocks`;

// Function to fetch all blocks with pagination
async function fetchAllBlocks(url) {
    let allBlocks = [];
    let page = 1;
    const perPage = 20; // Number of blocks per request (can adjust as needed)

    while (true) {
        const response = await fetch(`${url}?page=${page}&per=${perPage}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const blocks = data.contents || data.blocks || data;

        if (!blocks || !Array.isArray(blocks)) {
            throw new Error('Blocks not found or not an array');
        }

        allBlocks = allBlocks.concat(blocks);

        // Break the loop if we have received all blocks
        if (blocks.length < perPage) {
            break;
        }

        page++; // Move to the next page
    }

    return allBlocks;
}

// Function to render blocks
function renderBlocks(blocks) {
    blocks.forEach(block => {
        const blockElement = document.createElement('div');
        blockElement.className = 'block';

        // Render different block types (text, image, link, etc.)
        if (block.class === 'Text') {
            const textElement = document.createElement('p');
            textElement.textContent = block.content;
            blockElement.appendChild(textElement);
        } else if (block.class === 'Image') {
            const imageElement = document.createElement('img');
            imageElement.src = block.image.original.url;
            blockElement.appendChild(imageElement);
        } else if (block.class === 'Link') {
            const linkElement = document.createElement('a');
            linkElement.href = block.source.url;
            linkElement.textContent = block.title || block.source.url;
            blockElement.appendChild(linkElement);
        } else if (block.class === 'Media') {
            // Handle other media types like videos, PDFs, etc.
            const mediaElement = document.createElement('p');
            mediaElement.textContent = `Media Block: ${block.title || 'No Title'}`;
            blockElement.appendChild(mediaElement);
        }

        // Append the block element to the container
        blocksContainer.appendChild(blockElement);
    });
}

// Fetch and render all blocks
fetchAllBlocks(baseUrl)
    .then(renderBlocks)
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
