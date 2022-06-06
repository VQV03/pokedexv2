/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { descriptionArray } from './descriptionArray';

export default function Description(props) {
  const { stat } = props;
  const newData = descriptionArray[stat];

  return (
    <div>
      <h2>Description</h2>
      <p>{newData}</p>
    </div>
  )

}



Description.propTypes = {
  stat: PropTypes.number.isRequired,
};
