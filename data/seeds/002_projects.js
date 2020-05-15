
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project: 'build desk', description: ''},
        {project: 'build pc', description: 'from scratch'},
        {project: 'build website', description: 'from scratch'},
      ]);
    });
};
