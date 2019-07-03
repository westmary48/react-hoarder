import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  }

  render() {
    const stuffLink = '/stuff/12345';
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className= "btn btn-danger" onClick = {this.editEvent}>Edit a thing</button>
        <Link to={stuffLink}>View Stuff</Link>
      </div>
    );
  }
}

export default Home;