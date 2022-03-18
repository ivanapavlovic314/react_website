import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2022, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;



    return <div className="expense-item">
                <div className="expense-item__description">{expenseDate.toISOString()}</div>
                <div>
                    <h2 className="expense-item__price">{expenseTitle}</h2>
                    <p>{expenseAmount}</p>
                </div>
            </div>;

}

export default ExpenseItem;