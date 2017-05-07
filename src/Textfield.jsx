
import React, { PropTypes } from 'react';

const propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  multiLine: PropTypes.bool,
};

const defaultProps = {
  multiLine: false,
};

const Textfield = ({ input, label, multiLine, meta: { error, touched } }) => {
  const Tag = multiLine ? 'textarea' : 'input';

  return (
    <div className={`textfield-wrapper ${error && touched ? 'textfield-error' : ''}`}>
      <span className="label">
        {label}
      </span>
      <div>
        <Tag
          {...input}
          placeholder={label}
        />
        {touched && error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

Textfield.propTypes = propTypes;
Textfield.defaultProps = defaultProps;
export default Textfield;
