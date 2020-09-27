import React, { useState } from 'react';


const Navbar = ({ setSearch }) => {

   const [title, setTitle] = useState('');

   const handleChange = (e) => {
      setTitle(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(title);
   }


   return (
      <nav className="navbar navbar-expand-md navbar-light mx-2 mb-2">
         <a className="navbar-brand text-success" href="/"><i className="fa fa-lg fa-diamond mr-3"></i>Movies</a>
         <button className="navbar-toggler bg-success" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
               className="form-inline ml-auto my-2 my-lg-0"
               onSubmit={handleSubmit}
            >
               <input
                  className="form-control mr-sm-2"
                  type="search"
                  name={title}
                  placeholder="Search"
                  onChange={handleChange}
               />
               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
         </div>
      </nav>
   );
}

export default Navbar;