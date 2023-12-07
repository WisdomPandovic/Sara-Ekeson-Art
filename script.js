const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const unsplashApiUrl = 'https://source.unsplash.com/400x200/?art'; 

const blogContainer = document.getElementById('blog-grid');

fetch(apiUrl)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(async (post) => {
            const imageResponse = await fetch(unsplashApiUrl);
            const imageUrl = imageResponse.url;

            const title = post.title; // English title
            const body = post.body;

            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <img src="${imageUrl}" alt="Blog Image">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <p>Published on: ${new Date().toLocaleDateString()}</p>
                <button>View Post</button>
                <hr>
            `;
            blogContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error fetching blog posts:', error);
    });