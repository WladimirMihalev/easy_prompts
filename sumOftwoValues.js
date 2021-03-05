makeSumOfTwoValues = () => {
    let value = parseInt(prompt('Input value'));
    let secValue = parseInt(prompt('Input second value'));
    if (Number(value) && Number(secValue)) {
       return console.log(`Ответ: ${value+secValue}, ${value/secValue}.`)
    } else {
        return console.log('Некорректный ввод!')
    }
}
makeSumOfTwoValues()