import React from 'react';

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
  return (
    <div className="container">
      <h1 className="center">Contact</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse architecto vitae, dolor doloribus ab reiciendis nam, consectetur saepe, temporibus nihil praesentium hic nulla excepturi ad.
      </p>
    </div>
  )
}

export default Contact;
