
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpenses from './Components/NewExpenses/NewExpenses';



function App() {
  const expenses = [
    {
      id: 'e1',
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 7, 22)
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
  const addExpenseHandler = (expense) => {
    console.log('IN app.js');
    console.log(expenses);
  }

  return (
    <div className="App">
      <h1 className='title-app'>Expense Tracker</h1>
      <NewExpenses onAddExpenses={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;