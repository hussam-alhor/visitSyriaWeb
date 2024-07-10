import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './BlogImages.css'

function BlogImages({img1 , img2 , img3 ,img4}) {
  return (
    <Container className='BlogImages'>
      <Col x={12} md={12} >
      <Image src={img1} rounded />
      <Row>
        <Col xs={6} md={4}>
          <Image src={img2} rounded  style={{marginTop: "20px"}} />
        </Col>
        <Col xs={6} md={4}>
          <Image src={img3} rounded  style={{marginTop: "20px"}}/>
        </Col>
        <Col xs={6} md={4}>
          <Image src={img4} rounded  style={{marginTop: "20px"}}/>
        </Col>
      </Row>
      </Col>
    </Container>
  );
}

export default BlogImages;