import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    let title = props.title;
    const clickHandler = () => {
        title = 'Updated!';
        console.log(title);
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div><br/>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;