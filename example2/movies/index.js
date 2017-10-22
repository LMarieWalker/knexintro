'user struct';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

const sql = knex('movies').toString();

knex('movies').then((result) => {
  console.log(result);
  knex.destroy();
})
.catch((err) => {
  console.error(err);
  knex.destroy();
  process.exit(1);
});
//
// console.log(sql);
//
// knex.destroy();
