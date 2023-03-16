import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './Category';
import { fetchCategoriesApi } from '../../redux/categories/Categories';

function Home() {
  const categoriesData = useSelector((state) => state.categoriesReducer) || [];
  const [searchCategory, applySearchCategory] = useState('');
  const filteredCategories = categoriesData.filter(
    (category) => category.name.toLowerCase().includes(searchCategory.toLowerCase()),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoriesData.length === 0) {
      dispatch(fetchCategoriesApi());
    }
  }, [dispatch]);
  const handleChange = (e) => {
    e.preventDefault();
    applySearchCategory(e.target.value);
  };

  return (
    <main>
      <div className="categories-title">
        <h2>Choose your favorite category</h2>
        <h3>
          Categories
          {' '}
          (
          {categoriesData.length}
          )
        </h3>
        <input
          type="text"
          name="searchItem"
          placeholder="Search for a category"
          className="search-bar"
          onChange={handleChange}
        />
      </div>
      <div className="grid">
        {
         searchCategory.length ? (
           filteredCategories.map((category) => (
             <Category key={category.id} category={category} />
           ))
         ) : (

           categoriesData.map((category) => (
             <Category key={category.id} category={category} />
           )))
        }
      </div>
    </main>
  );
}

export default Home;
