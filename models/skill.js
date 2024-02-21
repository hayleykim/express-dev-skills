const skills = [
    {id: 1, skill: 'front-end'},
    {id: 2, skill: 'back-end'},
    {id: 3, skill: 'front and backend'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    //Need to add the id in a different way
    skill.id = Date.now() % 1000000;

    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const index = skills.findIndex(skill => skill.id === id);
    skills.splice(index, 1);
  }

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }