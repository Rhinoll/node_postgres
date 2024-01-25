const express = require('express')

//Регистрация роутов
const guestRouter = require('./routes/guestRoutes')
const additional_servicesRouter = require('./routes/additional_servicesRoutes')
const viewRouter = require('./routes/viewRoutes')
const apartmentRouter = require('./routes/apartmentRoutes')
const bookingRouter = require('./routes/bookingRoutes')
const service_history_logRouter = require('./routes/service_history_log_Routes')
const staffRouter = require('./routes/staffRoutes')


const PORT = process.env.PORT || 8080

const app = express()

const path = require('path')

app.use(express.json())

//Использование api
app.use('/api', viewRouter)
app.use('/api', guestRouter)
app.use('/api', additional_servicesRouter)
app.use('/api', apartmentRouter)
app.use('/api', bookingRouter)
app.use('/api', service_history_logRouter)
app.use('/api', staffRouter)


app.get('/api/view', (req, res) => {
    res.json("testBody")
})


app.use(express.static(path.join(__dirname, '/')))


app.get('/guest', (req, res) => { res.sendFile(path.join(__dirname, 'guest.html'))})
app.get('/view', (req, res) => { res.sendFile(path.join(__dirname, 'view.html'))})
app.get('/additional_services', (req, res) => { res.sendFile(path.join(__dirname, 'additional.html'))})
app.get('/apartment', (req, res) => { res.sendFile(path.join(__dirname, 'apartment.html'))})
app.get('/staff', (req, res) => { res.sendFile(path.join(__dirname, 'staff.html'))})
app.get('/service_history_log', (req, res) => { res.sendFile(path.join(__dirname, 'service_history_log.html'))})
app.get('/booking', (req, res) => { res.sendFile(path.join(__dirname, 'booking.html'))})

app.listen(PORT, () => console.log(`server started on post ${PORT}`))