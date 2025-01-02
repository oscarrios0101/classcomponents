import React from 'react';

class ProductCard extends React.Component {
  state = {
    showDetails: false,
  };

  toggleDetails = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const { product } = this.props;
    const { showDetails } = this.state;

    if (!product) {
      return <div>No product data provided.</div>;
    }

    return (
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <button onClick={this.toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            <p>{product.description}</p>
            {product.features && (
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ProductCard;
