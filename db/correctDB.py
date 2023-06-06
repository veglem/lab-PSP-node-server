import requests

requests.delete('http://localhost:8000/stocks/3')
requests.post('http://localhost:8000/stocks/', json={"id": 3, "name": "Фрукты", "num": 5, "src": "https://e2.edimdoma.ru/data/fat_tags/0000/1459/1459-ed4_wide.jpg?1515769035", "nov": "true"})

requests.delete('http://localhost:8000/goods/2')
requests.post('http://localhost:8000/goods/', json={"id": 2,"data": [{"id": 1,"name": "Lays","num": 1,"price": "100 руб"}, {"id": 2,"name": "Pringles","num": 2,"price": "200 руб"}, {"id": 3,"name": "Русская картошка","num": 10,"price": "80 руб"}]})
