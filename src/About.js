import React from 'react';
import { useSelector } from 'react-redux';

function About() {
  const data = useSelector(state => state.data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{data.nama}</h2>
      <p>{data.nim}</p>
    </div>
  );
}

export default About;
