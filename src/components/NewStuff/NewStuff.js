import React from 'react';

import './NewStuff.scss';

const defaultThing = {
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

  typeChange = e => this.formFieldStringState('type', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  ageChange = e => this.formFieldStringState('age', e);

  render() {
    const { newThing } = this.state;
    return (
      <div className="NewStuff">
        <h1>New Stuff</h1>
        <form>
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewStuff;
