
const searchForm = document.querySelector('#searchForm');
const imgContainer = document.querySelector('.posters-container');

function addImage(url) {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('poster');
    imgContainer.append(img);
}

function clearImages() {
    const images = imgContainer.querySelectorAll('img');
    if (images.length !== 0) {
        images.forEach(img => img.remove());
    }
}

searchForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = searchForm.elements.query.value;
    const config = { params: { q: searchTerm} };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

    // clear old data after submit
    searchForm.elements.query.value = '';
    clearImages();

    // display new data
    res.data.forEach( result => {
        try {
            addImage(result.show.image.medium);
        } catch(e) {
            console.log("Error! No image found");
        }
    });
})


