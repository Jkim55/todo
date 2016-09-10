
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todo').insert({
          name: 'This is my first todo item',
          description: 'bla bla bla; details on item'
        }),
        knex('todo').insert({
          name: 'This is my second todo item',
          description: 'blllllla; details on item'
        }),
        knex('todo').insert({
          name: 'This is my third todo item',
          description: 'words words words'
        })
      ]);
    });
};
