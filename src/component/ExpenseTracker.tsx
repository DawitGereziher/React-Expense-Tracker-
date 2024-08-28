import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';


function ExpenseTracker(){
const [expense, setExpense] = useState([]);
const [newArr, setArr] = useState([]);
     
const [val, setVal] = useState('all');

 const { register, handleSubmit } = useForm();
   
    const deletObj = (description:string) => {
            setExpense( expense.filter(items => items.description !== description));
     }

return <>
<form onSubmit={handleSubmit(data => {
    if(data.catagory === 'utilities' || data.catagory=== 'groceries' || data.catagory === 'entertainment')
       setExpense([...expense, data]);
    else
       console.log()
})}>
        <div className="mb-3">
            <label htmlFor='description' className='form-label'>Description</label>
            <input {...register('description')} id='description' type='text' className= 'form-control'/>
        </div>
        <div>
            <label htmlFor='amount' className='form-label'>Amount</label>
            <input {...register('amount') } id='catagory' type='text' className='form-control'/>
        </div> 
        <div>
            <label htmlFor='catagory' className='form-label'>Catagory</label>
            <input {...register('catagory')} id='catagory' type='text' className='form-control'/>
        </div>

        <button className='btn btn-primary submit' type='submit'>Submit</button>
</form>
<select className='form-select' onChange={(event) =>{setVal(event.currentTarget.value);
}}>
    <option value={'all'}>AllCatagories</option>
    <option value={'utilities'}>Utilities</option>
    <option value={'entertainment'} >Entertainment</option>
    <option value={'groceries'}>Groceries</option>
</select>
<table className='table'>
   <thead>
      <th>Description</th>
      <th>Amount</th>
      <th>Catagory</th>
    </thead>
    <tbody>
        {val === 'all' ? expense.map((item) => 
        <>
        <tr>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.catagory}</td>
            <button className='btn btn-danger' onClick={() => deletObj(item.description)}>Delete</button>
        </tr>
    </>
) : expense.filter(i => i.catagory === val).map(item => 
    <>
        <tr>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.catagory}</td>
            <button className='btn btn-danger' onClick={() => deletObj(item.description)}>Delete</button>
        </tr>
    </>
)}
   </tbody>
</table>
</>

}

export default ExpenseTracker;