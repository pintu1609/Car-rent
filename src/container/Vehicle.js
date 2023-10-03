
import VehicleItem from './VehicleItem'
import car from'./data';


const ITEMS_PER_PAGE = 6;
const Vehicle = ({currentPage ,searchValue}) => {
   
 console.log (car);
        if (!car || car.length === 0) {
          
          return <div>No car data available.</div>;
        }

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const displayedCars = car.slice(startIndex, endIndex);

        
        
          const filteredCars = displayedCars.filter((element) =>{
            const { model } = element;
       
        const searchFields = [model];
       
        return searchFields.some((field) =>
          field.toLowerCase().includes(searchValue.toLowerCase())
        );
        })
   

  return (

    
    <div>
        <div className="row" >

             {filteredCars.map((element,index)=>{ 

           
             return <div className="col md-3 d-flex" key={index} style={{justifyContent:'center'}}>

                <VehicleItem title={element.model} year={element.year} mileage={element.mileage} image={element.imageURL} seat={element.seats} types={element.type}
                fuel={element.fuelType} rent={element.rentPrice}/>

            </div>

            })} 


        </div>



    </div>
  )
}

export default Vehicle