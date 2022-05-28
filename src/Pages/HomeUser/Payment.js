import React from 'react'
import { NavbarUser } from '../../Components'
import Content from './Payment/Content'
import HeaderPayment from './Payment/Header'

const Payment = () => {
  return (
    <>
        <NavbarUser  tag="Our Service" />
        <HeaderPayment />
        <Content />
    </>
  )
}

export default Payment