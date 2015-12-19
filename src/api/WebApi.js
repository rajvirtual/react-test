var Parse = require('parse').Parse;

const WebApi = {
  login(userName,password){
    if (userName =='testuser' && password == 'testuser'){
      return true;
    }
    return false;
  },
    initUsers(){
      console.log('WebApi initUsers');
      var Persons = Parse.Object.extend("Persons");
      var query = new Parse.Query(Persons);
      var promise = new Parse.Promise();
      query.find({
        success: function(persons) {
          for (var i = 0; i < persons.length; ++i) {
            console.log(persons[i].get('FullName'));
          }
          return promise.resolve(persons);
        },
        error: (_err) => {
            return promise.reject(_err);
        }
      });
      return promise;
    },
    addUser(item){
      console.log('WebApi addUser');
      var Persons = Parse.Object.extend("Persons");
     var person = new Persons();
      person.set("FullName",item.fullname);
      person.set("Email",item.email);
      person.set("Age",item.age);
      person.set("Address",item.address);
      var promise = new Parse.Promise();
      person.save(null, {
          success: function(per) {
            return promise.resolve(per);
          },
          error: function(per,err) {
            console.log(err);
           return promise.reject(err);
          }
        });
      return promise;
    },
    updateUser(item){
      var Persons = Parse.Object.extend("Persons");
      var query = new Parse.Query(Persons);
      var promise = new Parse.Promise();
      query.get(item.id, {
          success: function(person) {
            person.set("FullName",item.fullname);
            person.set("Email",item.email);
            person.set("Age",item.age);
            person.set("Address",item.address);
            var promise = new Parse.Promise();
            person.save(null, {
                success: function(per) {
                  return promise.resolve(per);
                },
                error: function(per,err) {
                  console.log(err);
                 return promise.reject(err);
                }
              });
          },
          error: function(person,err) {
            console.log(err);
           return promise.reject(err);
          }
        });
      return promise;
    },
    getUser(id){
      var Persons = Parse.Object.extend("Persons");
      var query = new Parse.Query(Persons);
      var promise = new Parse.Promise();
      query.get(id, {
          success: function(person) {
            return promise.resolve(person);
          },
          error: function(person,err) {
            console.log(err);
           return promise.reject(err);
          }
        });
      return promise;
    },
    deleteUser(item){
      var Persons = Parse.Object.extend("Persons");
      var query = new Parse.Query(Persons);
      var promise = new Parse.Promise();
      query.get(item.id, {
          success: function(person) {
            person.destroy({
              success: function(myObject) {
                return promise.resolve(myObject);
              },
              error: function(myObject, error) {
                 return promise.reject(error);
              }
            });
          },
          error: function(person,err) {
            console.log(err);
           return promise.reject(err);
          }
        });
      return promise;
    }
}

export default WebApi;
