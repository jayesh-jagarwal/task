import React from 'react';

const ListView = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ListView;
