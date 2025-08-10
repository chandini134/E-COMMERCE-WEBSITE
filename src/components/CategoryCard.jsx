import Card from 'react-bootstrap/Card';

function CategoryCard({filename,categoryname}) {
  return (
    <Card className=" text-white align-items-center" style={{width:'15rem',height: '200px' }}>  
      <Card.Img src={filename} alt="Card image" style={{ width: '15rem',height:"200px" }}  />
      <Card.ImgOverlay style={{background:'rgba(0,0,0,0.7)'}}>
        <Card.Title>{categoryname}</Card.Title>
       
      </Card.ImgOverlay>
    </Card>
  );
}

export default CategoryCard;