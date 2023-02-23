
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 7, 28)
    },
    {
      id: 'e2',
      title: "New TV",
      amount: 694.67,
      date: new Date(2021, 0, 28)
    },
    {
      id: 'e3',
      title: "Car Insurense",
      amount: 294.67,
      date: new Date(2021, 1, 28)
    },
    {
      id: 'e4',
      title: "New Dex (Wooden)",
      amount: 594.67,
      date: new Date(2021, 4, 28)
    },

  ];
  return (
    <div className="App">
      <h1 className='title-app'>Expense Tracker</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>

    </div>
  );
}

export default App;