import React from 'react';
import {
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const Artist = props => {
  return (
    <Row>
      <Col xs="12">
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Name</CardTitle>
            <CardSubtitle>Year</CardSubtitle>
            <Button>Detalhes</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Artist;
