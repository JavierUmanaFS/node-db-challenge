
exports.seed = function(knex) {
  return knex('resource').insert([
      { resource_name: "minivan", description: "take a trip" },
      { resource_name: "iphone", description: "contact persons"},
      { resource_name: "computer", description: "search the web"}
      ]);
};
