
const obj1 ={}; //자바스크립트에서 객체만드는 방법1 'object literal' syntax
const obj2 = new Object();//자바 스크립트에서 객체 만드는 방법2 'object constructor' syntax
                        //object = {key : value};

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const son = {name: 'son' , age: 4}; //객체 생성 ex key: name (접근 가능한 변수) value (그 변수에 넣은 값)
print(son); //출력

//2. Computed properties
//자바스크립트에서 객체의 데이터에 접근하는 방법 2가지
console.log(ellie.name);
console.log(ellie['name']); //주의 property는 반드시 String타입으로 해야됨

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3.Property value shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = new Person('son', 30);
console.log(person3);

//4.Constuctor Function 생성자
function Person(name, age){ //생성자
    this.name = name;
    this.age = age;
}

//5. inoperator : property existence check (key in obj)
console.log('name' in son); // son이라는 객체안에 name이라고 하는 key 값이 존재하는가? 여부를 확인하는것
console.log('random' in son); // son 이라고 하는 객체안에 random이라고 하는 key 값이 존재하지 않으므로 false

//6. for..in vs for..of
//for(kkey in obj)
console.clear(); //모든 출력결과 삭제
for (key in son){ //son 객체 안에 있는 모든 key 값을 받아서
    console.log(key); //반복문으로 모든 key 값을 출력
}

//for (value of iterable)
const array = [1,2,3,4];
for(value of array){
    console.log(value);
}

//7. cloning
const user = {name : 'son', age : '20'};
const user2 = user;
user2.name = 'color';
console.log(user); //출력결과 color로 ref값에 영향을 직접미침

const user4 = Object.assign({}, user); //객체생성 객체 복사하려는 객체
console.log(user4);

//another
const fruit1 = { color: 'red'};
const fruit2 = {color : 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
