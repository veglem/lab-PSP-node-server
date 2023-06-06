import requests

requests.delete('http://localhost:8000/stocks/3')
requests.post('http://localhost:8000/stocks/', json={"id": 3, "name": "Фрукты", "num": 5, "src": "https://i.postimg.cc/3rBkWp9k/3.jpg", "nov": "true"})

requests.delete('http://localhost:8000/goods/2')
requests.post('http://localhost:8000/goods/', json={"id": 2,"data": [{"id": 1,"name": "Lays","num": 1,"price": "100 руб"}, {"id": 2,"name": "Pringles","num": 2,"price": "200 руб"}, {"id": 3,"name": "Русская картошка","num": 10,"price": "80 руб"}]})
