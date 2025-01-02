import React from 'react';
import Greeting from './Greeting';
import ProductCart from './ProductCart';
import Rating from './Rating';
import WorkflowExplanation from './WorkflowExplanation';

const productData = {
  image: 'https://via.placeholder.com/150',
  title: 'Awesome Product',
  description: 'This is a fantastic product with great features.',
  price: 29.99,
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
};

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" message="Have a great day" excitementLevel={3} />
      <Greeting name="Bob" message="Good to see you" />
      <Greeting />
      <ProductCart product={productData} />
      <Rating rating={4} />
      <WorkflowExplanation />
    </div>
  );
}

export default App;
