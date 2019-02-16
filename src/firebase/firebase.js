import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };

// db.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// // child_removed
// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('Removed child:', snapshot.key, snapshot.val());
// });

// // child_changed
// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('Changed child values:', snapshot.key, snapshot.val());
// });

// // child_added - prints even for the child already in DB
// db.ref('expenses').on('child_added', (snapshot) => {
//   console.log('Added child values:', snapshot.key, snapshot.val());
// });

// // db.ref('expenses').push({
// //   description: 'House rent',
// //   note: 'Feb month rent',
// //   amount: 1500000,
// //   createdAt: 1000
// // });

// // db.ref('expenses').push({
// //   description: 'Land EMI',
// //   note: 'Feb month emi',
// //   amount: 1039000,
// //   createdAt: 2000
// // });

// // db.ref('expenses').push({
// //   description: 'House expenses',
// //   note: 'Feb month household item expenses',
// //   amount: 500000,
// //   createdAt: 100000
// // });

// // const onValueChange = db.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// // }, (e) => {
// //   console.log('Error in fetching data', e);
// // });

// // setTimeout(() => {
// //   db.ref().update({
// //     'job/company': 'VMware',
// //     'job/title': 'Member of Technical Staff',
// //     'location/city': 'Bengaluru'
// //   });
// // }, 3000);

// // db.ref().off('value', onValueChange);

// // setTimeout(() => {
// //   db.ref().update({
// //     'job/company': 'eShopWorld',
// //     'job/title': 'Senior Frontend Developer',
// //     'location/city': 'Dublin'
// //   });
// // }, 3000);



// // db.ref()
// // .once('value')
// // .then((snapshot) => {
// //   console.log(snapshot.val());
// // });

// // db.ref().set({
// //   name: 'Dinesh Haribabu',
// //   age: 28,
// //   isSingle: false,
// //   stressLevel: 6,
// //   job: {
// //     title: "Software Developer",
// //     company: "Google"
// //   },
// //   location: {
// //     city: 'Bangalore',
// //     country: 'India'
// //   }
// // }).then(() => {
// //   console.log('Data saved for first time');
// // }).catch((e) => {
// //   console.log(e);
// // });

// // db.ref('attributes').set({
// //   height: 165,
// //   weight: 72
// // }).then(() => {
// //   console.log('Data updated');
// // }).catch((e) => {
// //   console.log(e);
// // });

// // db.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Data removed');
// //   })
// //   .catch(() => {
// //     console.log('couldn\'t delete data');
// //   });

// // db.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });