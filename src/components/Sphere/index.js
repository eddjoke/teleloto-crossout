import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';
import { padZero } from '../../utils';

const Sphere = ({ value, className }) => {
  const getSphereColor = () => {
    if (value > 0 && value < 16) return 'Sphere--blue';
    if (value >= 16 && value < 31) return 'Sphere--black';
    if (value >= 31 && value < 46) return 'Sphere--red';
    if (value >= 46 && value < 61) return 'Sphere--yellow';
    if (value >= 61 && value < 76) return 'Sphere--green';
    return '';
  };

  return (
    <div className={cx('Sphere', className, getSphereColor())}>
      {padZero(value)}
    </div>
  );
};

Sphere.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Sphere.defaultProps = {
  className: undefined,
};

export default Sphere;
