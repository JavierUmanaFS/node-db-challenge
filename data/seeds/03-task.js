
exports.seed = function(knex) {
      return knex('task').insert([
        { 
          description:" I had fun",
          notes: "no I really didnt",
          project_id:1,
          completed:true
        },
        { 
          description:" abc",
          notes: "dfg",
          project_id:1,
          completed: false
        },
        { 
          description:" lmao P",
          notes: "qrx",
          project_id:2,
          completed:true
        },
      ]);
};
