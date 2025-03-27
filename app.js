// app.js
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

// Optional: redirect /bunny/1 to bunny/1.html
app.get('/bunny/:page', (req, res) => {
  res.sendFile(path.join(__dirname, `public/bunny/${req.params.page}.html`))
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
