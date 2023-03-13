import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchFoodApi } from '../../redux/details/Details';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const foodsData = useSelector((state) => state.foodReducer[location.state]) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    if (foodsData.length === 0) {
      dispatch(fetchFoodApi(location.state));
    }
  }, [dispatch]);

  return (
    <main>
      <div className="back-btn" role="presentation" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left-long" />
        {' '}
        Back
      </div>
      <div className="categories-title">
        <h2>
          Category
          {' '}
          {location.state}
        </h2>
        <h3>
          Foods
          {' '}
          (
          {foodsData.length}
          )
        </h3>
      </div>
      <div className="grid">
        {
          foodsData.map((food) => (
            <div key={food.id} className="layout-container">
              <div className="image-container">
                <img alt="Food" src={food.image} className="food-img" />
              </div>
              <h3 className="food-name">{food.name}</h3>
            </div>
          ))
        }
      </div>
    </main>
  );
};

export default Details;
