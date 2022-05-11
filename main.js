// 1. Clase persona y metodo obtDetalles()

class Persona {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    obtDetalles() {
      console.log(
        `Te llamas ${this.name}, tienes ${this.age} años y eres ${this.gender}.`
      );
    }
  }
  
  let Juan = new Persona('María', 20, 'chica');
  Juan.obtDetalles();
  
  // 2. clase estudiante y metodo registrar().
  
  class estudiante extends Persona {
    constructor(name, age, gender, course, group) {
      super(name, age, gender);
      this.course = course;
      this.group = group;
    }
    registrar() {
      console.log(
        `Te llamas ${this.name}, tienes ${this.age} años, eres ${this.gender} y vas a ${this.course} en el grupo ${this.group}.`
      );
    }
  }
  
  let p2 = new estudiante('Sergio', 20, 'chico', 'segundo ', 'A');
  p2.registrar();
  
// 3. Clase profesor y asignar()
class profesor extends Persona{
  constructor(name, age, gender, course, group, subject, level){
  super(name, age, gender, course, group);
  this.course = course;
  this.group = group;
  this.subject = subject;
  this.level = level;
}
asignar() {
  console.log(
    `Te llamas ${this.name}, tienes ${this.age} años, eres ${this.gender}, vas a ${this.course} en el grupo ${this.group} y diriges la asignatura de ${this.subject} de nivel ${this.level}.`
  )
}
}

let p3 = new profesor('Albert', 52, 'hombre', 'tercero', 'C', 'Historia', 'Avanzada');
p3.asignar();
