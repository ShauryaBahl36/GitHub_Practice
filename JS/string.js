let person = {
    name: 'Lucas',
    age: 30,
    city: 'New York',
    hobbies: {
        sports: ['football', 'basketball'],
        music: ['rock', 'jazz']
    }
}

// console.log(person);
// console.log(typeof person);

person.country = 'USA';

person.name = ['Lucas', 'John', 'Michael'];
// console.log(person);

delete person.city;
// console.log(person);

console.log(person.hobbies.music.includes('rock'));