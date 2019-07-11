import React from 'react';

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
    return (
      <div className="Single Stuff">
        <h1>{thing.type}</h1>
        <h2>{thing.weight}</h2>
        <h3>{thing.color}</h3>
        <h4>{thing.age}</h4>
        <button className="btn btn-danger" onClick={this.deleteThing}>Delete</button>
      </div>
    );
  }
}

export default SingleStuff;
