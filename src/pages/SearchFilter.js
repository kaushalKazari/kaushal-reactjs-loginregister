import React, { useEffect } from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { useSearchParams } from 'react-router-dom';
import { URL } from '../helpers/helpers';


export default function SearchFilter() {
  // 2.1
  const [searchParams, setSearchParans] = useSearchParams();


  useEffect(()=>{
    console.log('cat_name ----->', searchParams.get('cat_name'))
    // http://localhost:1337/api/businesses?populate=*&filters[business_categories][name][$containsi]=Home Decor

    fetch(`${URL}/api/businesses?populate=*&filters[business_categories][name][$containsi]=${searchParams.get('cat_name')}`)
    .then(res=>res.json())
    .then((data)=>{
      console.log('business_categories ------------>', data);
    })
    .catch(err=>err)
  },[]) 

  // 2.2

  return (
    <>


      <Row>
        <Col sm={9}>
          <Card className='p-3 m-2'>
            <Row>
              <Col sm={3}>
                <Card.Img className='img-fluid' variant='top' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/464303942.jpg?k=24e506ebac37b9faee6d31c754f97af1b1362355fc4a28cf7bb4ec72624cfc5d&o=&hp=1" alt="Card image" />
              </Col>
              <Col sm={9}>
                <Card.Body>
                  <Card.Title>The Biryani Mall</Card.Title>
                  <Badge bg="primary" className='fs-6 m-1'>3.9</Badge>
                  <span><FontAwesomeIcon icon={faStar} className='text-warning' /></span>
                  <span><FontAwesomeIcon icon={faStar} className='text-warning' /></span>
                  <span><FontAwesomeIcon icon={faStar} className='text-warning' /></span>
                  <span><FontAwesomeIcon icon={faStar} className='text-warning' /></span>
                  <span><FontAwesomeIcon icon={faStar} className='text-secondary' /></span>

                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Show Number</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}
