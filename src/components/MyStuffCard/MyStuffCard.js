import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import stuffShape from '../../helpers/propz/stuffShape';


import './MyStuffCard.scss';

class MyStuffCard extends React.Component {
  static propTypes = {
    thing: stuffShape.stuffShape,
    deleteThing: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { thing, deleteThing } = this.props;
    deleteThing(thing.id);
  }

  render() {
    const { thing } = this.props;
    const singleLink = `/thing/${thing.id}`;
    const editLink = `/edit/${thing.id}`;
    return (
      <div className="MyStuffCard">
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">{thing.name}</h5>
    <Link className="btn btn-success" to={singleLink}>View</Link>
    <p className="card-text">{thing.type}</p>
    <Link className="btn btn-primary" to={editLink}>Edit</Link>
    <button className="btn btn-primary" onClick= {this.deleteMe}>Delete</button>  </div>
  </div>
      </div>
    );
  }
}

export default MyStuffCard;
