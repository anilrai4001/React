import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import PropTypes from 'prop-types';

function BasicExample({title,price}) {
  return (
    <Card style={{ width: '18rem' , border: '2px solid gray'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          ${price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

BasicExample.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number.isRequired
}

BasicExample.defaultProps = {
  title: "sample product"
}

export default BasicExample;