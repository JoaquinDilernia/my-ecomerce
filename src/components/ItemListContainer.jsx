import React from 'react'

const ItemListContainer = ({greeting}) => {
  const datos =[
    {id: 1, nombre: "PRODUCTO A", precio: 1000},
    {id: 2, nombre: "PRODUCTO B", precio: 1500},
    {id: 3, nombre: "PRODUCTO C", precio: 2000}
    ];
    const getDatos =()=> {
      return new Promise((resolve, reject)=>{
        if(datos.length === 0){
          reject(new Error("No hay datos"))
        }
        setTimeout(()=> {
          resolve (datos);
        },3000);
      })
    };
    
    getDatos()
    .then((datos)=> console.log(datos));
    
    async function fetchingData(){
      try{
        const datosFectched = await getDatos();
        console.log(datosFetched);
    
      }catch(err){
        console.log(err);
      }
    };
    fetchingData();
  return (
<>
</>
  )
}

export default ItemListContainer
