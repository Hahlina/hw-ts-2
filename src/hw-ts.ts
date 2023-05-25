// Задача 1: Об'єднання ізольованих даних
//
// Створіть тип даних Tuple, який містить ім'я користувача (string) і його вік (number). Потім створіть змінну, використовуючи цей тип, і присвойте їй значення.
//
// Задача 2: Фільтрація масиву об'єктів
//
// Напишіть функцію, яка приймає масив об'єктів і рядкову властивість, і повертає новий масив, який містить тільки об'єкти, у яких властивість має задане значення.
//
//     Задача 3: Пошук об'єкта за властивістю
//
// Напишіть функцію, яка приймає масив об'єктів і рядкову властивість, і повертає перший об'єкт з масиву, у якого властивість має задане значення.
//
//     Задача 4: Розрахунок середнього значення
//
// Напишіть функцію, яка приймає масив об'єктів з числовими властивостями і повертає середнє значення цих властивостей.

//Task 1

type TTuple = [string, number];
const userInfo:TTuple = ["Jack", 0, ];

//Task 2

interface IUser {
    name: string;
    age: number;
}

function filterArrayByProperty(arr: IUser[], property: keyof IUser, value: IUser[keyof IUser]): IUser[] {
    return arr.filter(obj => obj[property] === value);
}

//Task 3

const findObjByProperty = (arr: IUser[], property: keyof IUser, value: IUser[keyof IUser]) : IUser | undefined =>{
    return arr.find(obj => obj[property] === value);

}

//Task 4
interface INumber{
    [key: string]: number
}
const arrTask4 : INumber[] = [{number: 1}, {number: 19}, {number: 910}, {number: 90}];

const calcAverage = (arr: INumber[]) : number =>{
    const sum:number = arr.reduce((prev, el)=> prev +  Object.values(el)[0], 0);
    return sum / arr.length
}

