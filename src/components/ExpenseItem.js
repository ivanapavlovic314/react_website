import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return <div className="expense-item">
                <div>
                    <div>{month}</div>
                    <div>{day}</div>
                    <div>{year}</div>
                </div>
                <div className="expense-item__description">{props.date.toDateString()}</div>
                <div>
                    <h2 className="expense-item__price">{props.title}</h2>
                    <p>{props.amount}</p>
                </div>
            </div>;

}

export default ExpenseItem;