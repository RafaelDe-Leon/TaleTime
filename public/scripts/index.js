async function loadBooks() {
  const res = await fetch('./db.json')
  const data = await res.json()
  const booksList = document.getElementById('books-list')
  booksList.innerHTML = ''
  data.stories.forEach(story => {
    const card = document.createElement('div')
    card.className = 'relative w-72 h-96 rounded-lg shadow-lg overflow-hidden group'
    card.innerHTML = `
      <img src="./${story.coverImage}" alt="${story.title} cover" class="absolute inset-0 w-full h-full object-cover transition group-hover:scale-105 duration-300" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
        <h2 class="text-lg font-semibold text-white mb-3 drop-shadow">${story.title}</h2>
        <a href="./book.html?id=${story.id}" class="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition font-medium">Read Book</a>
      </div>
    `
    booksList.appendChild(card)
  })
}
loadBooks()
