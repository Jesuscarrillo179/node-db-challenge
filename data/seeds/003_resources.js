
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource: 'instructions', description: ''},
        {resource: 'computer', description: 'for online searches'},
        {resource: 'teammate', description: 'for additional help'},
      ]);
    });
};
