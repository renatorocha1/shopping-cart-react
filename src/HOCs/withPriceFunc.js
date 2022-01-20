import React from "react"

export function withPriceFunc(component){
  const Component = component

  function parsePrice(price){
    return price.toLocaleString('en-NZ', {
      style: 'currency',
      currency: 'NZD'
    })
  }

  function sumItem(item){
    return parsePrice(item.qty * item.price)
  }

  return function(props){
    return <Component sumItem={sumItem} parsePrice={parsePrice} {...props} />
  }
}