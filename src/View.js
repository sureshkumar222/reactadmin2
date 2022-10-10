import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function View() {
    const params = useParams();
    const [searchparams] = useSearchParams()
    useEffect(() => {
            console.log(searchparams);
    }, []);
    
  return (
   <div className='container'>
    <div className='row'>
    <h1>ID: {params.id}</h1>
    <h2>ID: {searchparams.get("status")}</h2>
        
    
        
        
        <div className='col-lg-6'>
            Username : suresh
            
        </div>
        <div className='col-lg-6'>
        Email : sureshgsk22@gmail
            
        </div>
        <div className='col-lg-6'>
        Country : India
            
        </div>
        <div className='col-lg-6'>
        state : tn
            
        </div>
        <div className='col-lg-6'>
        city : tvm
            
        </div>
        <div className='col-lg-6'>
        phone : tn
            
        </div>
        <div className='col-lg-6'>
        dob : tn
            
        </div>
        <div className='col-lg-6'>
        gender : tn
            
        </div>
    </div>
   </div>
  )
}

export default View;