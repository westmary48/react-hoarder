import React from 'react';

import './MyStuffCard.scss';

class MyStuffCard extends React.Component {
  render() {
    const { thing } = this.props;
    return (
      <div className="MyStuffCard">
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">{thing.type}</h5>
    <p className="card-text">{thing.location}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
  </div>
      </div>
    );
  }
}

export default MyStuffCard;
