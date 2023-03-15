import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Category = (props) => {
  const navigate = useNavigate();

  const {
    category: {
      id, name, image,
    },
  } = props;

  return (
    <div className="layout-container">
      <div className="button-container">
        <h5>
          {id}
          )
        </h5>
        <div onClick={() => navigate(`/details/${name}`, { state: name })} role="presentation"><i className="fa-solid fa-arrow-right-long details-btn" /></div>
      </div>
      <div className="image-container">
        <img alt="Food" src={image} className="food-img" />
      </div>
      <h3 className="food-name">{name}</h3>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Category;