import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fire from '../assets/img/fire.png'
import ice from '../assets/img/ice.png'
import elec from '../assets/img/elec.png'


const cards = [
  {
    id: 1,
    title: 'Card 1',
    text: 'Text for card 1',
    imgSrc: fire,
    path: '/Fire',
  },
  {
    id: 2,
    title: 'Card 2',
    text: 'Text for card 2',
    imgSrc: ice,
    path: '/Ice',
  },
  {
    id: 3,
    title: 'Card 3',
    text: 'Text for card 3',
    imgSrc: elec,
    path: '/Elec',
  },
];

const Cards = () => {
  return (
    <CardsContainer>
      {cards.map(card => (
        <StyledCard key={card.id}>
          <Card.Header>{card.title}</Card.Header>
          <Card.Img
            className="text-center"
            src={card.imgSrc}
            alt={`Image for card ${card.id}`}
          />
          <Card.Body>
            <Card.Text>{card.text}</Card.Text>
            <Link to={card.path}>
              <Button variant="primary">This is a Link  </Button>
            </Link>
          </Card.Body>
        </StyledCard>
      ))}
    </CardsContainer>
  );
};

export default Cards;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledCard = styled(Card)`
  margin: 10px;
  width: 300px;
  text-align: center;
  color: black;
`;
