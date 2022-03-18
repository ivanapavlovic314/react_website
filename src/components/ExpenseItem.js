import './ExpenseItem.css';

function ExpenseItem() {

    return <div className="expense-item">
                <div className="expense-item__description">March 28th 2022</div>
                <div>
                    <h2 className="expense-item__price">Car Insurance</h2>
                    <p>$294.67</p>
                </div>
            </div>;

}

export default ExpenseItem;