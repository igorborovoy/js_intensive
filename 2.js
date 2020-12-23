console.log('%c//------------------First Task------------------------//', 'background-color: yellow;');

const person = {
    name: 'igor',
    surname: 'borovoy',
    passport: {
        seria: 'bm',
        number: '12345235'
    }
}

function deepCopy(obj) {
    let obj_copy = {};
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            obj_copy[key] = deepCopy(obj[key]);
        } else
            obj_copy[key] = obj[key]
    }
    return obj_copy;
}

const personCopy = deepCopy(person);
console.log('Копируемый объект');
console.log(personCopy);
console.log('Сделали изменения во вложенном объекте');
person.passport.number = '00000000';
console.log(person);
console.log('Копия объекта не поменялась');
console.log(personCopy);
alert('TASK 1 DONE (SEE CONSOLE)');

//-----------------------------------------------------//

alert('TASK 2');
console.log('%c//-----------------Second Task-----------------------//', 'background-color: yellow;');

function takeFromInterval(arr, startInterval, endInterval) {
    if (!startInterval || !endInterval || endInterval > arr.length || startInterval < arr[0])
        return [];

    function arrFilter(elem) {
        if (startInterval < endInterval) {
            if (elem >= startInterval && elem <= endInterval)
                return true;
        } else {
            if (elem <= startInterval && elem >= endInterval)
                return true;
        }
    }

    return arr.filter(arrFilter);

}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(`Исходный массив ${array}`);
const start = Number(prompt('Введите первое значение интервала'));
const end = Number(prompt('Введите второе значение интервала'));
console.log('Исходный массив ');
console.log(array);
console.log('Результат');
console.log(takeFromInterval(array, start, end));

//-----------------------------------------------------//

alert('TASK 3');
console.log('%c//----------------Third Task---------------------------//', 'background-color: yellow;');

function IteratedObject(from, to) {
    if (from > to) {
        this.from = to;
        this.to = from;
    } else {
        this.from = from;
        this.to = to;
    }
}

const iterateFrom = Number(prompt('Введите первое значение для объекта (цифры)', 0));
const iterateTo = Number(prompt('Введите второе значение для объекта (цифры)', 0));
const myIterable = new IteratedObject(iterateFrom, iterateTo);

myIterable[Symbol.iterator] = function () {
    return {
        current: this.from,
        to: this.to,
        next() {
            if (this.current <= this.to) {
                return {
                    done: false,
                    value: this.current++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

console.log('Созданный объект ');
console.log(myIterable);
console.log('Результат выполнения цикла for');
for (let val of myIterable) {
    console.log(val);
}
alert('ALL TASKS DONE, SEE CONSOLE');