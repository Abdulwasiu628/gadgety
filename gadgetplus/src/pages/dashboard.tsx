import React from 'react'
import dashboardStyles from '../styles/dashboard.module.css'
import NavBar from '@/components/NavBar'
import DashBar from '@/components/DashBar'
import Card from '@/components/Card'

function dashboard() {
  return (
    <main className={dashboardStyles.container}>
        <DashBar />
        <div className={dashboardStyles.container_two}>
            <div className={dashboardStyles.card}>
              <Card type='Payment From Previous Invoice' number={20} description="" />
              <Card type='Total Amount Recieved' number={30} description=""/>
              <Card type='Current Outstanding Amount' number={45} description="" />
              <Card type='Total Number of Customers' number={45} description="" />
            </div>
            <div className = {dashboardStyles.outerLayer}>
            <div className={dashboardStyles.card2}>
                  <div
                      className= {dashboardStyles.card3}>
                      Chart
                  </div>
                  <div className="p-6">
                      <h5
                      className="mb-2 text-xl font-medium leading-tight">
                      In Built Chart for the month
                      </h5>
                      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Description of the chart
                      </p>
                      
                  </div>
                  
                  
              </div>
              <div className={dashboardStyles.card2}>
                  <div
                      className= {dashboardStyles.card3}>
                      Chart
                  </div>
                  <div className="p-6">
                      <h5
                      className="mb-2 text-xl font-medium leading-tight">
                      In Built Chart for the month
                      </h5>
                      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Description of the chart
                      </p>
                      
                  </div>
                  
                  
              </div>

              
            </div>
            <div className={dashboardStyles.card}>
              <Card type='Total Number of Products In Stock' number={20} description="" />
              <Card type='Total Number Sold Today' number={30} description=""/>
              <Card type='Total Number of Product sold this week' number={45} description="" />
            </div>
            <div>
            
            </div>
        </div>
    </main>
  )
}

export default dashboard