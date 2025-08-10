import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({product}) {
  return (
    <Card style={{ width: '15rem' }}>
     
      <Card.Img variant="top" src={product.thumbnail} style={{height:"200px",width:"200px"}} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>{product.id}</Card.Title>
        <Card.Text>
          Category:{product.category} <br/>
        </Card.Text>
        <Card.Text>
          Price:${product.price} <br/>
        </Card.Text>
       
        <Link to={`/product/${product.id}`}>
        
        <Button variant="primary">Product details</Button>
      
      </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;