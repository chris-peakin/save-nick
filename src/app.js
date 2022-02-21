const express = require ('express');

const app = express();

const mojorouter = require('./route/mojoroute');

app.use('/', mojorouter);

// app.get('/:mojo', (req, res) => {
//     const { mojo } = req.params;
//     if ( mojo === 'nick' ) {
//         return res.status(200).json({
//             "data": "mmmooojjjooooo"
//          })
//     };
//     if ( mojo === 'evil' ) {
//         return res.status(200).json({
//             "data": "kaaabbblllleeewwweeeeeyyyy, sucks to be you"
//         })
//     }  
//     res.sendStatus(400);
// });

module.exports = app;