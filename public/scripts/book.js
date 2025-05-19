let currentPage = 1
let totalPages = 1
let storyData = null

async function loadStoryById(storyId) {
  const res = await fetch('./db.json')
  const data = await res.json()
  storyData = data.stories.find(s => s.id === storyId)
  if (!storyData) {
    document.getElementById('book-title').textContent = 'Story not found'
    document.getElementById('page-image').style.display = 'none'
    document.getElementById('page-text').textContent = ''
    document.getElementById('page-num').textContent = ''
    document.getElementById('prev-btn').disabled = true
    document.getElementById('next-btn').disabled = true
    return
  }
  currentPage = 1
  totalPages = storyData.pages.length
  document.getElementById('book-title').textContent = storyData.title
  renderPage()
}

function renderPage() {
  const page = storyData.pages.find(p => p.number === currentPage)
  document.getElementById('page-image').src = page.image
  document.getElementById('page-image').alt = page.text
  document.getElementById('page-image').style.display = ''
  document.getElementById('page-text').textContent = page.text
  document.getElementById('page-num').textContent = `Page ${currentPage} of ${totalPages}`
  document.getElementById('prev-btn').disabled = currentPage === 1
  document.getElementById('next-btn').disabled = currentPage === totalPages
}

document.getElementById('prev-btn').onclick = () => {
  if (currentPage > 1) {
    currentPage--
    renderPage()
  }
}
document.getElementById('next-btn').onclick = () => {
  if (currentPage < totalPages) {
    currentPage++
    renderPage()
  }
}

function getStoryIdFromQuery() {
  const params = new URLSearchParams(window.location.search)
  return params.get('id') || 'stella-spaceship'
}

loadStoryById(getStoryIdFromQuery())
