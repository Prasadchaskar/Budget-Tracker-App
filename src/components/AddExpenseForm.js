import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "../context/AppContext";

function AddExpenseForm() {
    const {dispatch} = useContext(AppContext);
    const[name,setName] = useState('');
    const[cost,setCost] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault()
        
        const expense = {
            id:uuidv4(),
            name:name,
            cost:parseInt(cost)
        }

        dispatch({
            type:'ADD_EXPENSE',
            payload:expense
        })
        setName('')
        setCost('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input
                        required='required'
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input
                        required='required'
                        type="text"
                        className="form-control"
                        id="cost"
                        value={cost}
                        onChange={(e)=>setCost(e.target.value)}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;