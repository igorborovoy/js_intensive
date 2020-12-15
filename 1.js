

//------------------First Task------------------------//


const firstValue = Number(prompt('Введите первое число'));
const secondValue = Number(prompt('Введите второе число'));
if (firstValue && secondValue) {
    alert(firstValue.toString(secondValue));
} else
    alert('Не удалось привести к числовому типу');


//------------------Second Task-----------------------//


const firstValue = Number(prompt('Введите первое число'));
const secondValue = Number(prompt('Введите второе число'));
if (firstValue && secondValue){
    const thirdValue = prompt('Введите третье значение', 'Result');
    alert(`${thirdValue} ${firstValue + secondValue} ${firstValue / secondValue}`);
} else
    alert('Не удалось привести к числовому типу');