
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'take parts out of the box', notes: '', project_id:'1'},
        {description: 'screw everything together', notes: '', project_id:'1'},
        {description: 'buy parts', notes: '', project_id:'2'},
        {description: 'set up case', notes: '', project_id:'2'},
        {description: 'add parts together', notes: '', project_id:'2'},
        {description: 'plug it in', notes: '', project_id:'2'},
        {description: 'install necessary programs', notes: '', project_id:'3'},
        {description: 'build front end', notes: '', project_id:'3'},
        {description: 'add validation', notes: '', project_id:'3'},
        {description: 'build backend', notes: '', project_id:'3'},
        {description: 'test evrything', notes: '', project_id:'3'},
      ]);
    });
};
