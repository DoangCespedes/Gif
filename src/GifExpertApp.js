import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Toaster, toast } from 'react-hot-toast';


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['tom and jerry']);

    return (
        <>  <div className="hero">
		        <h2 className="texto">GifExpertApp</h2>
	        </div>  
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark  justify-content-center">
                <div className="container">
                
                <button className="btn btn-light my-s my-sm-0" onClick={ () => toast('Esta es una App con la finalidad de buscar por la barra de busqueda, cualquier tipo de GIF que se encuentre en la base de datos de los servidores de GIPHY.com  ~EJM Tom-and-jerry~', {
                    duration: 12000,
                })}>
                    Que es?
                </button>
                   
                    
                   <div className='contenedor d-flex justify-content-center'>
                            <form action="" className="form-inline my-2 my-lg-0 ">
                                <AddCategory setCategories={ setCategories } className="form-control mr-sm-2 " placeholder="Buscar" arial-label="Buscar"/>
                                
                            </form>
                        </div>
                </div>
            </nav>
           
            <hr />
   
            <div className='container align-content-around alert alert-dark mt-5'>
                <ol className=''>
                    {
                        categories.map( category  => (
                            <GifGrid 
                                key={ category }
                                category={ category }
                            />
                        ))
                    }
                    <Toaster toastOptions={
                        {style: {
                            background: '#363636',
                            color: '#fff',
                          },}
                    }/>
                </ol>

            </div>


        </>
    )
}
