import React from 'react';

import firebase from 'firebase/app';

import 'firebase/auth';

import myStuffData from '../../helpers/data/myStuffData';
import MyStuffCard from '../MyStuffCard/MyStuffCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    things: [],
  }

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    myStuffData.getMyStuff(uid)
      .then(things => this.setState({ things }))
      .catch(err => console.error('could not get things', err));
  }

  render() {
    const makeStuffCards = this.state.things.map(thing => (
      <MyStuffCard
      key = {thing.id}
      thing = {thing}
      />
    ));

    return (
      <div className="Home">
        <h1>Home</h1>
        {makeStuffCards}
      </div>
    );
  }
}

export default Home;
