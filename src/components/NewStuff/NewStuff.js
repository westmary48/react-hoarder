import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import myStuffData from '../../helpers/data/myStuffData';

import './NewStuff.scss';

const defaultThing = {
  name: '',
  weight: '',
  color: '',
  type: '',
  age: '',
};

class NewStuff extends React.Component {
  state = {
    newThing: defaultThing,
  }

  formFieldStringState = (name, e) => {
    const tempThing = { ...this.state.newThing };
    tempThing[name] = e.target.value;
    this.setState({ newThing: tempThing });
  }

  nameChange = e => this.formFieldStringState('name', e);

  typeChange = e => this.formFieldStringState('type', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  ageChange = e => this.formFieldStringState('age', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newThing };
    saveMe.uid = firebase.auth().currentUser.uid;
    myStuffData.postThing(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const { newThing } = this.state;
    return (
      <div className="NewStuff">
        <h1>New Stuff</h1>
        <form onSubmit={this.formSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="clock"
              value={newThing.name}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sampleName">Type</label>
            <input
              type="text"
              className="form-control"
              id="type"
              placeholder="appliances"
              value={newThing.type}
              onChange={this.typeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              className="form-control"
              id="color"
              placeholder="Brown"
              value={newThing.color}
              onChange={this.colorChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              className="form-control"
              id="weight"
              placeholder="12g"
              value={newThing.weight}
              onChange={this.weightChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="12 years old"
              value={newThing.age}
              onChange={this.ageChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
          </form>
      </div>
    );
  }
}
export default NewStuff;
