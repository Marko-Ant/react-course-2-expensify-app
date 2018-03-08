import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>{description}</Link> 
      <div> 
      {`amount: ${amount}, createdAt: ${createdAt}`}
      </div>
    </div>
  );
};


export default ExpenseListItem;