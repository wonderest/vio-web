import React, { memo } from 'react';

const LoadingComponent = () => {
  return (
    <div className="container text-center mt-5">
      <div className="spinner-grow text-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default memo(LoadingComponent);
