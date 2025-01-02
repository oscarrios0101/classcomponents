import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
      return <p>Invalid rating. Please provide a number between 0 and 5.</p>;
    }

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'filled-star' : 'empty-star'}>
          ★
        </span>
      );
    }

    return <div className="rating">{stars}</div>;
  }
}

export default Rating;
