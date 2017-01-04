import Sequelize from 'sequelize'

const { STRING } = Sequelize

const db = new Sequelize('photo-voter', 'photo-voter-app', 'kitteno', {
  host: 'localhost',
  dialect: 'mysql'
})

const TestModel = db.define('test_model', {
  firstName: {
    type: STRING,
    field: 'first_name'
  },
  lastName: {
    type: STRING
  }
}, { freezeTableName: true })

TestModel.sync({force: true}).then(() => {
  console.log('Yayy')
  TestModel.create({
    firstName: 'Abraham',
    lastName: 'Ibrahim'
  })
})

setTimeout(() => {TestModel.all().then(test => {
  console.log('got him', test)
})}, 3000)
