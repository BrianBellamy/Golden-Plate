//указатели на элементы (обащение к элементам HTML)
const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')
const shadow = document.querySelector('#shadow')

//добавление прослушиватель события
burger.addEventListener('click', (e) => {
    e.preventDefault(); //отменить стандартное действия клика по ссылке, e - "объект события"

    //добавить класс show для соответствующих элементов
    menu.classList.add('show')
    shadow.classList.add('show')
})

shadow.addEventListener('click', () => {
    //удалить класс show для соответствующих элементов
    menu.classList.remove('show')
    shadow.classList.remove('show')
})