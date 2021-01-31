
exports.seed = function(knex) {
      return knex('project').insert([
      { project_name: "study", 
        description: "grab book and read", 
        completed: true
      },
      { project_name: "play cod",
        description: "controller and play",
        completed: false
      },
      { project_name:"clean house",
        description: "broom and mop",
        completed: true
      }
      ]);
};
