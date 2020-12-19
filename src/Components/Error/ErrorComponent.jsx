import React, { memo } from 'react';

const ErrorComponent = () => {
  return (
    <div className="alert alert-danger" role="alert">
      REFRESH THIS PAGE
    </div>
  );
};

export default memo(ErrorComponent);
