const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/eventsApp');
// mongoose.connect(process.env.MLAB_URL || 'mongodb://localhost/fetcher')


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
});


let eventSchema = mongoose.Schema({
  id: String,
  name: String,
  date: String,
  dateTime: String,
  venue: String,
  image: String
});

let Event = mongoose.model('Event', eventSchema);


let save = (event) => {

  event = JSON.parse(event)

    let eachEvent = {
      id: event.id,
      name: event.name,
      date: event.dates.start.localDate,
      dateTime: event.dates.start.dateTime,
      venue: event._embedded.venues[0].name,
      image: event.images[1].url
    }

    // var newEvent = new Event(eachEvent);

    // return newEvent.save(newEvent)
    // .catch((err) => {})

    return Event.create(eachEvent).catch((err) => {console.log('failed save', err)})

}


let findEvents = () => {
  return Event.find({}).sort('date').exec()
}


let deleteEvent = (event) => {
  let parsedId = JSON.parse(event).id;


  // console.log(Event.find({id: parsedId}))

  return Event.find({ id: parsedId }).remove().exec();

}




module.exports.findEvents = findEvents;
module.exports.save = save;
module.exports.deleteEvent = deleteEvent;
