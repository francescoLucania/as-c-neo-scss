import {CarOrderCard} from "./car-order-card";

export default { title: 'CarOrderCard' }

let data = {
      "id": "skshj12312",
      "brand": "BMW",
      "img": "https://img1.autospot.ru/resize/800x-/bmw/3/892305/",
      "address": "Sed perspiciatis",
      "tags": [
        "Новинка",
        "Авто и ПТС в наличии",
        "BMW Repair Inclusive"
      ],
      "region": "Москва",
      "specifications": "Дизель, 2.0, Автомат, Задний",
      "model": "3 series",
      "equipment": "318i",
      "color": {
        "name": "Alpine White",
        "borderColor": "#1A1A1A",
        "backgroundColor": "#fff"
      },
      "allOptions": {
        "count": "64",
        "url": "https://autospot.ru/brands/bmw/3gt/hatchback/offer/134103/"
      },
      "views": "64",
      "price": "2380000",
      "lowerPrice": "2380000"
    }

export const CarOrderCardBase = () => ({
  component: CarOrderCard,
  props: {
    currentAuto: data,
  }
});
