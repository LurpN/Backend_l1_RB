// Hämta formuläret och sektionen där blogginlägg ska visas
const form = document.getElementById('createPostForm');
const postsContainer = document.getElementById('posts');

// Lyssna på formulärets "submit"-händelse
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Hämta titel och innehåll från sformuläret
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Hämta dagens datum
  const date = new Date().toLocaleDateString();

  // Skapa en ny blogginlägg-sektion
  const blogPost = document.createElement('div');
  blogPost.classList.add('blog-post');
  
  blogPost.innerHTML = `
    <h3>${title}</h3>
    <div class="author-date">
      Författare: Robin Bostanci | Datum: ${date}
    </div>
    <p>${content}</p>
  `;

  // Lägg till det nya inlägget i postsContainer
  postsContainer.prepend(blogPost);

  // Rensa formuläret efter att inlägget publicerats
  form.reset();
});
