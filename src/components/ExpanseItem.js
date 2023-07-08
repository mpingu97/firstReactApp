import "./ExpenseItem.css";

function ExpanseItem() {
  const expenseDate = new Date(2022, 6, 10);
  const expenseTitle = "Car Insurance";
  const expensteAmount = 298.14;

  return (
    <div className="expense-item">
      <div> {expenseDate.toISOString}</div>
      <div className="expense-item__desciption">
        <h2> {expenseTitle} </h2>
        <div className="expense-item__price">{expensteAmount}</div>
      </div>
    </div>
  );
}

export default ExpanseItem;
