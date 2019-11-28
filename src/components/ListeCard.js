import React from 'react';
import {Card,Button} from 'react-bootstrap';
import RateStars from './rateStars.js'
import UpdatedComponent from'./loadSpinner'
// import UpdatedComponent from'../loadSpinner.js'

function ListeCard({listMovies ,searchName,rate}) {
  return (
    <div>
    {listMovies.filter(el=>(el.movieTitle.toLowerCase().includes(searchName.toLowerCase()))&&(el.movieRate>=rate)).map(el=>(
      <div >
       <span key={Math.random()}></span> 
    	<Card style={{ width: '18rem' }}>
      		<RateStars rate={el.movieRate} />
      		<Card.Img variant="top" src={el.movieSrc}  alt ="img1"/>
	      <Card.Body>
        	<Card.Title>{el.movieTitle}</Card.Title>
        
        	<Card.Text>
	          Some quick example text to build on the card title and make up the bulk of
	          the card's content.
	        </Card.Text>
        
  			</Card.Body>
		</Card>
      </div>
    ))}
    
    </div>
  );
}

export default UpdatedComponent(ListeCard);