import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import TableComp from 'Components/Table/TableComp';

const CardComp = () => {
  return (
    <>
      <Card style={{ margin: 10 }}>
        <CardBody>
          <TableComp />
        </CardBody>
      </Card>
    </>
  );
};

export default CardComp;
Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string,
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};
