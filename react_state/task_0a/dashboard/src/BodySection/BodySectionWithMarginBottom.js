import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection'; // Assume BodySection is in the same directory
import './BodySectionWithMarginBottom.css';

const BodySectionWithMargin = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMargin.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMargin;
