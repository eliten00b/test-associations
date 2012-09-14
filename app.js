// start file
//utils
const Sequelize = require("sequelize")
    , fs        = require("fs")

// load config
const config  = JSON.parse(fs.readFileSync("./config/config.json"))

// init sequelize
var sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  dialect: 'sqlite',
  storage: 'database.sqlite'
})

// init db models
const Person    = sequelize.import(__dirname + "/models/person")
    , Task      = sequelize.import(__dirname + "/models/task")

// associations for db

Person.hasMany(Task)
Task.hasMany(Person)

console.log('INFO: will sync')

sequelize.sync({force: true}).success(function() {
  console.log('INFO: db created')

  console.log('INFO: will add')

  Person.create({name: 'Martin'}).success(function(person) {
    console.log('INFO: new person ', person.name)

    Task.create({title: 'Mobile', details: 'new version'}).success(function(task) {
      console.log('INFO: new task ', task.title)

      Person.setTasks([task]).success(function() {
        console.log('INFO: ', person.name, ' has new task ', task.name)
      })
    })
  })
})
