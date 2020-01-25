
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "testGodzilla", password: "testpassword" },
        { username: "testGodzilla2", password: "testpassword" },
        { username: "testGodzilla3", password: "testpassword" }
      ]);
    });
};
