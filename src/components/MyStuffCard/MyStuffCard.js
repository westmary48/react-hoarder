import React from 'react';

import PropTypes from 'prop-types';

import stuffShape from '../../helpers/propz/stuffShape';


import './MyStuffCard.scss';

class MyStuffCard extends React.Component {
  static propTypes = {
    scat: stuffShape.stuffShape,
    deleteScat: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { thing, deleteThing } = this.props;
    deleteThing(thing.id);
  }

  render() {
    const { thing } = this.props;
    return (
      <div className="MyStuffCard">
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">{thing.type}</h5>
    <p className="card-text">{thing.location}</p>
    <a href="#" className="btn btn-primary" onClick= {this.deleteMe}>Delete</a>  </div>
  </div>
      </div>
    );
  }
}

export default MyStuffCard;
