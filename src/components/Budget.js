import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Swal from "sweetalert2"

function Budget(){
    const {budget} = useContext(AppContext)
	const{dispatch} = useContext(AppContext)

    const handleEditClick = async()=>{
        const { value: newBudget } = await Swal.fire({
            input: 'number',
            inputPlaceholder: 'Type your budget here...',
            showCancelButton: true
          })
          
        dispatch({
            type:'ADD_BUDGET',
            payload: parseInt(newBudget) 
        })
    }
    return (
        <div className='alert alert-secondary'>
			<span>Budget: £{budget}</span>
            <button type="button" className="btn btn-primary float-end" onClick={handleEditClick}>
                Edit
            </button>
		</div>
    )
};

export default Budget