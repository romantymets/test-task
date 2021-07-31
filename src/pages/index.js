import * as React from "react"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import Layout from "../components/Layout"
import { Link } from 'gatsby'
import {container, list, card, link, rootContainer, img, cardText} from './index.module.css'

export const query = graphql`
 query {
  allWines {
   nodes {
      country
      description
      designation
      img
      id
      points
      price
      province
      region_1
      region_2
      taster_name
      taster_twitter_handle
      title
      variety
      winery
    }
  }
}
  `;

const IndexPage = ({ data }) => {
  const { allWines } = data;
  const { nodes } = allWines;
  return (
    <Layout>
      <div className={rootContainer}>
        <h5>Please select your wine</h5>
        <ul className={container}>
          {
            nodes.map((wine) => <li key={wine.title} className={list}>
                <Link className={link} to="wine" state={{ wine }}>
                  <Card className={card}>
                    <Card.Img variant="top" src={wine.img} alt="Loading" className={img}/>
                    <Card.Text className={cardText}>
                      {wine.title}
                    </Card.Text>
                  </Card>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </Layout>
  )
};

export default IndexPage
