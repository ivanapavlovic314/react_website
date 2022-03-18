import './ExpenseItem.css';

function ExpenseItem(props) {



    return <div className="expense-item">
                <div className="expense-item__description">{props.date.toDateString()}</div>
                <div>
                    <h2 className="expense-item__price">{props.title}</h2>
                    <p>{props.amount}</p>
                </div>
            </div>;

}

export default ExpenseItem;