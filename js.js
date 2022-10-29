const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const request = new XMLHttpRequest(); //создание запроса
    request.open("GET", "data.json"); //указываем метод запроса и указываем путь запроса
    request.setRequestHeader("Content-type", "application/json"); //добавляем тип данных
    request.send(); //отправка запроса
    request.addEventListener("load", () => {
        console.log(JSON.parse(request.response));
        const data = JSON.parse(request.response);
        document.querySelector('.name').innerHTML = data.name;
        document.querySelector('.surname').innerHTML = data.surname;
        document.querySelector('.age').innerHTML = data.age;
        document.querySelector('.work').innerHTML = data.work;
        document.querySelector('.status').innerHTML = data.status;
        document.querySelector('.status_2').innerHTML = data.status_2;
    })
})