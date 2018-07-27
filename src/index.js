'use strict';

(function () {
  'use strict';

  const simpleFormGroup = {
    'marginBottom': '1rem'
  };
  const simpleTextLabel = {
    'display': 'block',
    'color': 'red'
  }
  const simpleTextInput = {
    'display': 'inline-block',
    'marginBottom': '0.5rem',
    'fontSize': '16px',
    'fontWeight': '400',
    'color': 'rgb(33, 37, 41)'
  }

  var React = require('React');
  /*
  Added by Prince Cheruvathur
  */
  function TextInput({ type = "text", label, value, onChange }) {
    return (
      <div style={simpleFormGroup}>
        {label && <label style={simpleTextLabel}>{label}</label>}
        <input
          type={type}
          style={simpleTextInput}
          value={value}
          onChange={e => onChange && onChange(e.target.value)}
          onClick={e => onChange && onChange(e.target.value)}
        />
      </div>
    );
  }

  module.exports = Object.freeze({
    default: {
      TextInput: TextInput,
    }
  });
})();
