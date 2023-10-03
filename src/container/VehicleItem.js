import React from 'react'


const VehicleItem = (props) => {
  return (
    <div>
      <div className="card mx-2 my-2" style={{width: '18rem',height:'40vh', color:'#44455c', background: '#f2f5fc'}}>
            <img src={props.image} className="card-img-top" style={{padding:'5px', height:'20vh', borderRadius:'15px'}} alt="..."/>
            <div className="card-body d-flex justify-content-between my-1" style={{padding:0,height:'5vh', margin:'0 3px'}}>
                <h5 className="card-title" style={{fontSize:18}}>{props.title}</h5>
                <h5 className="card-title rounded-pill" style={{border:'2px dashed black', padding:'0 5px', marginRight:'25px', fontSize:'15px' }}>{props.year}</h5>
            </div>

            {/* <div className='d-flex flex-column '> */}
                <div>
                <div className="d-flex justify-content-between align-items-center my-2 " style={{fontSize:12}}>
                    <i className="fa-solid fa-person fa-sm mx-2" style={{color: '#315aa0'}}>  {props.seat} People</i>
                    <i className="fa-solid fa-gas-pump fa-sm mx-2" style={{color: '#315aa0'}}> {props.fuel}</i>            
                </div>
                </div>

                <div>

                 <div className="d-flex justify-content-between align-items-center my-2" style={{fontSize:12}}>
                <i className="fa-solid fa-gauge-simple fa-sm mx-2" style={{color: '#315aa0'}}> {props.mileage}</i>  
                <i className="fa-solid fa-gauge-high fa-sm mx-2" style={{color: '#315aa0'}}> {props.types}</i>            
               
               
                </div> 
                </div>

         

            

                <div className='d-flex justify-content-between alien-item-center mx-2 my-1' >
                    <div>

                        <h5 className="Price" style={{padding:2}}>$ {props.rent}</h5> 
                    </div>
                    <div className='d-flex flex-row  alien-item-center'>
                        <i className="fa-regular fa-heart fa-sm rounded my-3 mx-1" ></i>
                        <button type="button" className="btn btn-primary mx-1  rounded-pill">Rent Now</button>
                    </div>

                </div>
     </div>
    </div>
  )
}

export default VehicleItem
