const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
db.connect((err) => {
  if (err) {
    return console.error('error: ', err.message);
  }
  console.log('Connected to the MySQL server.');
});

//routes for dashboard
module.exports.getHostingEventsForDashboard = (hostId, cb) => {

  const query = 'SELECT e.title, u_e.pending FROM events AS e LEFT JOIN users_events_attending AS u_e ON e.event_id = u_e.event_id WHERE e.host_id = ?';
  db.query(query, [hostId], (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

module.exports.getAttendingEventsForDashboard = (userId, cb) => {
  const query = 'SELECT e.title, u_e.pending FROM events AS e INNER JOIN users_events_attending AS u_e ON e.event_id = u_e.event_id WHERE u_e.user_id = ?';
  db.query(query, [userId], (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

module.exports.getNameAndLocation = (userId, cb) => {
  const query = 'SELECT display_name, location_state, location_city FROM users WHERE user_id = ?'
  db.query(query, [userId], (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

// routes for event info

module.exports.getEventInfoForConditionalRender = (eventId, userId, cb) => {
  //mysql UNION expects the same # of columns in both queries. The query for 'user_id' serves only to add a second column to the second query
  const query = 'SELECT host_id, private FROM events WHERE event_id = ? UNION SELECT pending, user_id from users_events_attending WHERE event_id = ? AND user_id = ?';
  db.query(query, [eventId, eventId, userId], (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

module.exports.getEventInfoForHost = (eventId, cb) => {
  const query = 'select e.title, e.description, e.date, e.time, e.price, e.address_1, e.address_2, e.zipcode, e.city, e.state, e.attendance_max, e.attendance_current, u_e.pending, u.display_name from events AS e LEFT JOIN users_events_attending AS u_e ON e.event_id = u_e.event_id INNER JOIN users AS u ON u_e.user_id = u.user_id WHERE e.event_id = ?';
  db.query(query, [eventId], (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

module.exports.getEventInfoForNonHost = (eventId, hasAccess, cb) => {
  if (hasAccess) {
    const query = 'select title, description, date, time, price, address_1, address_2, zipcode, city, state, attendance_max, attendance_current FROM events WHERE event_id = ?';
    db.query(query, [eventId], (err, data) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, data);
    });
  } else {
    const query = 'select title, description, date, time, price, city, state, attendance_max, attendance_current FROM events WHERE event_id = ?';
    db.query(query, [eventId], (err, data) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, data);
    });
  }
};


module.exports.connection = db;
// module.exports.getCalendarEvents = (filters, cb) =>{

// }

// module.exports.logIn = (filters, cb) =>{

// }
