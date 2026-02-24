import React from 'react'

export default function PriceFooter({value}:{ value:number}) {
  return (
   <div className="footer ">
            <p>
              <h2>Cena</h2>
              <h1>{value}zł</h1>
            </p>
            <p className="text-right font-medium">
              Chcesz <strong>zamówić?</strong>
              <br /> <strong>Wyślij</strong> do nas e-maila
              <br />
             <strong>printing.internationalpl@gmail.com</strong> 
            </p>
          </div>
  )
}
