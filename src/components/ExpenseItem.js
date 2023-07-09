import "./ExpenseItem.css";

function ExpenseItem(probs) {
  const month = probs.date.toLocaleString("en-US", { month: "long" });
  const day = probs.date.toLocaleString("en-US", { day: "2-digit" });
  const year = probs.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__desciption">
        <h2> {probs.title} </h2>
        <div className="expense-item__price">€{probs.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
