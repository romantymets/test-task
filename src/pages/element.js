import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "gatsby"
import { imgContainer, conteiner, link } from "./element.module.css"


export default function Element({location}) {
  const { state = {} } = location;
  const { wine } = state;
  return (
    <div className={conteiner}>
      <img  src={wine.img} className={imgContainer}/>
      <Card style={{ width: '50rem'}}>
        <Card.Body>
          <Card.Title>{wine.title}</Card.Title>
          <Card.Text>
            description:  {wine.description}
          </Card.Text>
          <Card.Text>
            price: {wine.price} Є
          </Card.Text>
          <Card.Text>
            designation: {wine.designation}
          </Card.Text>
          <Card.Text>
            points: {wine.points}
          </Card.Text>
          <Card.Text>
            province: {wine.province}
          </Card.Text>
          <Card.Text>
            region 1: {wine.region_1}
          </Card.Text>
          <Card.Text>
            region 2: {wine.region_2}
          </Card.Text>
          <Card.Text>
            country: {wine.country}
          </Card.Text>
          <Card.Text>
            variety: {wine.variety}
          </Card.Text>
          <Card.Text>
            winery: {wine.winery}
          </Card.Text>
          <Button variant="primary"> <Link to="/" className={link}>Home</Link></Button>
        </Card.Body>
      </Card>
    </div>
  )
}