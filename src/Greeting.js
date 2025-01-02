import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name, message, excitementLevel } = this.props;

    let fireEmojis = '';
    if (excitementLevel === 1) {
      fireEmojis = '🔥';
    } else if (excitementLevel === 2) {
      fireEmojis = '🔥🔥';
    } else if (excitementLevel >= 3) {
      fireEmojis = '🔥🔥🔥';
    }

    const excitedMessage = message + fireEmojis;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{excitedMessage}</p>
      </div>
    );
  }
}

Greeting.defaultProps = {
  name: 'Guest',
  message: 'Welcome',
  excitementLevel: 1,
};

export default Greeting;
