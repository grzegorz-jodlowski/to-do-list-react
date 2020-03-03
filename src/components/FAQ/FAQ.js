import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqPageContent } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqPageContent.title} imageURL={faqPageContent.image} />
    <p>{faqPageContent.description}</p>
  </Container>
);

export default FAQ;