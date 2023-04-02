//funcion que formatea la cantidad de pesos ***.***.-

const currencyFormat = (num) => {
  return (
    
    'U$ ' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     
  )
}

export default currencyFormat