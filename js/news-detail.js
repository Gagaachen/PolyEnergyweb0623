// Function to get URL parameters
const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get('title'),
        date: params.get('date'),
        img: params.get('img'),
        img2: params.get('img2'), // Get second image
        summary: params.get('summary'),
        link: params.get('link')
    };
};

const newsData = getUrlParams();
const galleryContainer = document.getElementById('news-image-gallery');

// Helper to create and append an image
const createImage = (src, alt) => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = alt;
    galleryContainer.appendChild(imgElement);
};

// Check if we have the necessary data
if (newsData.title && newsData.date && galleryContainer) {
    document.getElementById('news-detail-title').textContent = newsData.title;
    document.getElementById('news-detail-date').textContent = newsData.date;
    if (newsData.summary) {
        document.getElementById('news-detail-summary').textContent = newsData.summary;
    } else {
        document.getElementById('news-detail-summary').textContent = '';
    }
    if (newsData.link) {
        document.getElementById('news-detail-link').href = newsData.link;
        document.getElementById('news-detail-link').style.display = '';
    } else {
        document.getElementById('news-detail-link').style.display = 'none';
    }

    // Populate the gallery
    if (newsData.img) {
        createImage(newsData.img, `${newsData.title} - image 1`);
    }
    if (newsData.img2) {
        createImage(newsData.img2, `${newsData.title} - image 2`);
    }

} else {
    // Handle case where data is missing
    const container = document.querySelector('.news-detail-container');
    container.innerHTML = `
        <h1>Oops! News not found.</h1>
        <p>The content you are looking for is not available. Please check the URL or go back.</p>
        <a href="news.html" class="back-link">&larr; Back to News</a>
    `;
} 