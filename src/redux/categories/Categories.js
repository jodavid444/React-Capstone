import Axios from 'axios';

const FETCH_CATEGORIES = 'thirdcapstone/Categories/FETCH_CATEGORIES';

export const fetchCategories = (payload) => ({
  type: FETCH_CATEGORIES,
  payload,
});

export const fetchCategoriesApi = () => async (dispatch) => {
  const returnValue = await Axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = returnValue.data.categories;
  const categories = [];
  for (let i = 0; i < data.length; i += 1) {
    const name = data[i].strCategory;
    const id = data[i].idCategory;
    const image = data[i].strCategoryThumb;
    const object = {
      id, name, image,
    };
    categories.push(object);
  }
  dispatch(fetchCategories(categories));
};

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;