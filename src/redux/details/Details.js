import Axios from 'axios';

const FETCH_FOOD = 'thirdcapstone/food/FETCH_FOOD';

const fetchFood = (category, payload) => ({
  type: FETCH_FOOD,
  category,
  payload,
});

export const fetchFoodApi = (category) => async (dispatch) => {
  const returnValue = await Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = returnValue.data.meals;
  const food = [];
  for (let i = 0; i < data.length; i += 1) {
    const name = data[i].strMeal;
    const id = data[i].idMeal;
    const image = data[i].strMealThumb;
    const object = {
      id, name, image,
    };
    food.push(object);
  }
  dispatch(fetchFood(category, food));
};

const initialState = [];

const foodReducer = (state = initialState, action) => {
  const { category } = action;
  switch (action.type) {
    case FETCH_FOOD:
      return { ...state, [category]: action.payload };
    default:
      return state;
  }
};

export default foodReducer;