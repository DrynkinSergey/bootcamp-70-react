# REDUX GUIDE

## 1. Instalation redux

1. `npm i redux react-redux`
2. `npm install @redux-devtools/extension`

## 2. Налаштування структури

1. Створюємо папку `redux`
1. Створюємо фічу (якась папка з функціоналом, наприклад `counter` `todos` `contacts`)
1. Створити головні файли в папці:
   - `reducer.js`
   - `constants.js`
   - `actions.js`
   - `selectors.js`
1. Створити файлик `store.js`

## 3. Boilerplate - (код для запуску)

1. В файлі `reducer.js` створюємо `initialState` - початковий стан для редьюсера
1. Створюємо `reducer` - функція обробник для всієї логіки

```
const userReducer = (state=initialState, action) => {
  switch(action.type){
    case DELETE: {
      return {
        ...state,
        user: state.user(user => user.id !==action.payload)
      }
    }
    default:
      return initialState
  }
}
```

- userReducer - назва редьюсера
- state - стан для редьюсера
- action - інформація з компонента(тип, та пейлоад)
- action.type - тип екшена
- action.payload - корисна нагрузка з компонента (може бути як id, так і массив, строка, об'єкт...)

3. Перейти до `store.js` створити стор для роботи

```
import { devToolsEnhancer } from '@redux-devtools/extension'
import {  createStore } from 'redux'
import { userReducer } from './user/reducer'

const enhancer = devToolsEnhancer()
export const store = createStore(userReducer,enhancer)
```

## Підключення до React

1. Ідемо в `main.js` огортаємо `<App/>` провайдером

```
<Provider stor={store}>
  <App/>
</Provider>
```

## Використання

1. Отримання даних - `const user = useSelector(selectUser)`
1. Відправка даних або події - `const dispatch = useDispatch()`
