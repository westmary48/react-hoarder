import React from 'react';

import { Link } from 'react-router-dom';

import myStuffData from '../../helpers/data/myStuffData';

import './SingleStuff.scss';

class SingleStuff extends React.Component {
  state = {
    thing: {},
  }

  componentDidMount() {
    const thingId = this.props.match.params.id;
    myStuffData.getSingleThing(thingId)
      .then(thingPromise => this.setState({ thing: thingPromise.data }))
      .catch(err => console.error('unable to get single thing', err));
  }

  deleteThing = () => {
    const thingId = this.props.match.params.id;
    myStuffData.deleteThing(thingId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { thing } = this.state;
    const editLink = `/edit/${this.props.match.params.id}`;
    return (
      <div className="Single Stuff">
        <h1>{thing.name}</h1>
        <h1>{thing.type}</h1>
        <h2>{thing.weight}</h2>
        <h3>{thing.color}</h3>
        <h4>{thing.age}</h4>
        <Link className="btn btn-primary" to={editLink}>Edit</Link>
        <button className="btn btn-danger" onClick={this.deleteThing}>Delete</button>
      </div>
    );
  }
}

export default SingleStuff;
