import React from 'react';

const Navbar = ({setSearchValue}) => {
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
      };
    
  return (
    <div className='d-flex' style={{ height: '8vh', alignItems: 'center', margin: '10px 20px', border: '1px solid black',paddingLeft:10, borderRadius: '15px', background: '#f2f5fc' }}>
      <div className='search'>
        <form className="d-flex " role="search">
          <input className="form-control me-2 no-border" type="search" placeholder="Search.." aria-label="Search" onChange={handleInputChange} style={{ height: '30px', width: '50vh', borderRadius: 10, fontSize: 18 }} />
          
        </form>
      </div>

      <div className='relevance' style={{ marginLeft: '10px' }}>
        <select className="form-select" aria-label="Relevance" style={{ fontSize: 18, background: '#f2f5fc', color: '#44455c', border: 'none',
  outline: 'none',boxShadow: 'none',appearance:'auto', padding:0}}>
          <option >Relevance</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className='brand' style={{ marginLeft: '10px' }}>
        <select className="form-select no-border" aria-label="All brands" style={{ fontSize: 18, background: '#f2f5fc', color: '#44455c', border: 'none',
  outline: 'none', appearance:'auto',boxShadow: 'none', padding:0 }}>
          <option>All brands</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
