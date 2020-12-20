//------------------First Task------------------------//

{
    alert('TASK 1');
    const firstValue = Number(prompt('Введите первое число'));
    const secondValue = Number(prompt('Введите второе число (от 2 до 36)'));
        if (firstValue && secondValue) {
            alert(firstValue.toString(secondValue));
        } else
            alert('Не удалось привести к числовому типу');
    
    
}

//-----------------Second Task-----------------------//

{
    alert('TASK 2');
    const firstValue = Number(prompt('Введите первое значение'));
    const secondValue = Number(prompt('Введите второе значение'));
    if (firstValue && secondValue) {
        const thirdValue = prompt('Введите третье значение', 'Результат');
        alert(`${thirdValue}: Сумма = ${firstValue + secondValue} Частное = ${firstValue / secondValue}`);
    } else
        alert('Не удалось привести к числовому типу');
}