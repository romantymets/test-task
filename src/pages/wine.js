import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "gatsby"
import { imgContainer, container, link, textCard } from "./wine.module.css"
import Layout from "../components/Layout"


const WinePage = ({ location} ) =>  {
  const { state = {} } = location;
  const { wine } = state;
  return (
    <main>
    <Layout>
      <div className={container}>
        <img src={wine.img} alt="...loading" className={imgContainer}/>
        <Card style={{ width: '60%' }}>
          <Card.Body>
            <Card.Title>{wine.title}</Card.Title>
            <Card.Text>
              <span className={textCard}> Description:  </span> {wine.description}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Price: </span>: {wine.price} Є
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Designation: </span> {wine.designation}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Points: </span> {wine.points}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Province: </span> {wine.province}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Region 1: </span> {wine.region_1}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Region 2: </span>{wine.region_2}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Country: </span> {wine.country}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Variety: </span>{wine.variety}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Winery: </span> {wine.winery}
            </Card.Text>
          </Card.Body>
          <Link to="/" className={link}><Button
            style={{ "width": "100%", "background": "#212529" }}> Home</Button></Link>
        </Card>
      </div>
    </Layout>
    </main>
  )
};

export default WinePage;