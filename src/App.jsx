
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //state to hold values from input field
 const [principle,setprinciple]=useState(0)
 const [rate,setrate]=useState(0)
 const [year,setyear]=useState(0)
 const [interest,setinterest]=useState(0)
  
// for conditinal rendaring
const [isprinciple,setisprinciple]=useState(true)
const [israte,setisrate]=useState(true)
const [isyear,setisyear]=useState(true)

 const validate =(e)=>{
  // console.log(e.target.value);
  // console.log(e.target.name);
  let name = e.target.name
  let value = e.target.value
  console.log(!!value.match(/^[0-9]*$/));

 if(!!value.match(/^[0-9]*$/)){
  if(name=='principle'){
    setprinciple(value)
    setisprinciple(true)
  }
  else if(name=='rate'){
    setrate(value)
    setisrate(true)
  }
  else{
    setyear(value)
    setisyear(true)
  }
 }
 else{
  if(name=='principle'){
    setprinciple(value)
    setisprinciple(false)
  }
  else if(name=='rate'){
    setrate(value)
    setisrate(false)
  }
  else{
    setyear(value)
    setisyear(false)
  }
 }
 }

 const handleReset =()=>{
 setprinciple(0)
 setrate(0)
 setyear(0)
 setisprinciple(true)
setisrate(true)
setisyear(true)
setinterest(true)
 }
 const calculate =()=>{
 setinterest(( principle*rate*year)/100)
 }

 
//  console.log('principle',principle);
//  console.log('rate',rate);
//  console.log('year',year);

  return (
    <div className='d-flex justify-content-center align-items-center ' style={{width:"100%",height:"100vh"}}>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
  <h1>Simple Interest App</h1>
  <p>calculate your simple interest easily</p>
  <div className='mt-4 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-3'>
    <h2 className='fs-1 fw-bold'> ₹ {interest}</h2>
    <p>Total simple interest</p>

  </div>
<form className='mt-5'>
<div className="mb-3">
<TextField id="outlined-basic" value={principle || ""}  label="principle amount" name='principle' onChange={(e)=>validate(e)}  variant="outlined" className='w-100' />
{!isprinciple &&
  <p className='text-danger'>*invalid input</p>}
</div>
<div className="mb-3">
<TextField id="outlined-basic" value={rate || ""}  label="rate of interest (p.a) %" name='rate' onChange={(e)=>validate(e)} variant="outlined" className='w-100' />
{!israte &&
  <p className='text-danger'>*invalid input</p>}
</div>
<div className="mb-3">
<TextField id="outlined-basic" value={year || ""}  label="Year (yr)" name='year' onChange={(e)=>validate(e)} variant="outlined" className='w-100' />
{!isyear &&
  <p className='text-danger'>*invalid input</p>}
</div>
<div className="d-flex justify-content-between w-100 mt-4">
<Button variant="contained"  color="success" style={{width:"190px", height:'60px'}} disabled={isprinciple && 
  israte && isyear?false:true} onClick={calculate}>calculate</Button>
      <Button variant="outlined" style={{width:"190px", height:'60px'}} onClick={handleReset}>reset</Button>
</div>

</form>

</div>

      </div>
      
    
  )
}

export default App
