import React from 'react'
import dashbarStyles from '../styles/dashbar.module.css'
import Image from 'next/image'

function DashBar() {
  return (
    <>
        <main className={dashbarStyles.container}>
            <div className={dashbarStyles.horizontal}>
                <div className={dashbarStyles.items}>
                    <Image src="/images/dashboard.png" alt="dashboard" width={30} height={30} />
                    <p id= {dashbarStyles.parag}>Dashboard</p> 
                </div>
                <div className={dashbarStyles.items}>
                    <Image src="/images/new-product.png" alt="dashboard" width={30} height={30} />
                    <p id= {dashbarStyles.parag}>Add A Product</p>
                </div>
                <div className={dashbarStyles.items}>
                    <Image src="/images/notes.png" alt="dashboard" width={30} height={30} />    
                    <p id= {dashbarStyles.parag}>Record</p>
                </div>
                <div className={dashbarStyles.items}>
                    <Image src="/images/invoice.png" alt="dashboard" width={30} height={30} />
                    <p id= {dashbarStyles.parag}>Generate Invoice</p>
                </div>
                <div className={dashbarStyles.items}>
                    <Image src="/images/remove-from-cart.png" alt="dashboard" width={30} height={30} />
                    <p id= {dashbarStyles.parag}>Remove Product</p>
                </div>

                <div className={dashbarStyles.items}>
                    <Image src="/images/customer-support.png" alt="dashboard" width={30} height={30} />
                    <p id= {dashbarStyles.parag}>Reply Customer</p>
                </div>
                
            </div>
        </main>
    </>
  )
}

export default DashBar