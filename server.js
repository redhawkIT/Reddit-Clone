import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(morgan("dev"))


app.set('port', (process.env.PORT || 3001))

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})




app.post('/subreddits', (req, res) => {
  axios(`https://reddit.com/subreddits/default.json`)
      .then(res => console.log(res))
  console.log(req.body)
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
