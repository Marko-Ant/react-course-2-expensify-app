import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
  const items = props.expenses.map(expense => (
    <ExpenseListItem {...expense} key={expense.id}/>
  ));
  return (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        items        
      )
    }
  </div>
)};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}  

export default connect(mapStateToProps)(ExpenseList);