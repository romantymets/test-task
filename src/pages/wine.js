import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "gatsby"
import { imgContainer, container, link, textCard } from "./wine.module.css"
import Layout from "../components/Layout"


const WinePage = ({ location }) =>  {
  const { state = {} } = location;
  return (
    <main>
    <Layout>
      <div className={container}>
        <img src={state.img} alt="...loading" className={imgContainer}/>
        <Card style={{ width: '60%' }}>
          <Card.Body>
            <Card.Title>{state.title}</Card.Title>
            <Card.Text>
              <span className={textCard}> Description:  </span> {state.description}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Price: </span>: {state.price} Є
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Designation: </span> {state.designation}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Points: </span> {state.points}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Province: </span> {state.province}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Region 1: </span> {state.region_1}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Region 2: </span>{state.region_2}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Country: </span> {state.country}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Variety: </span>{state.variety}
            </Card.Text>
            <Card.Text>
              <span className={textCard}> Winery: </span> {state.winery}
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