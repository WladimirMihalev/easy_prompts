numeralSystemChanger = () => {
    let value = parseInt(prompt('Input value'));
    let numSys = parseInt(prompt('Input numeral system'));
    if (Number(value) && Number(numSys)) {
       return console.log((value).toString(numSys))
    } else {
        return console.log('Некорректный ввод!')
    }
}
numeralSystemChanger()