import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import homeStyles from '../styles/home.module.css'
import ImageRoom from '@/components/ImageRoom'
import CardBoard from '@/components/CardBoard'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className= {homeStyles.container}>
      <NavBar />
      
      <ImageRoom />
      <div className='flex gap-x-2'>
        <CardBoard />
        <CardBoard />
        <CardBoard />
        <CardBoard />
        
      </div>
      <div className='flex gap-x-2'>
        <CardBoard />
        <CardBoard />
        <CardBoard />
        <CardBoard />
        
      </div>
      <div className='flex gap-x-2'>
        <CardBoard />
        <CardBoard />
        <CardBoard />
        <CardBoard />
        
      </div>
      <Footer />
      
      <div className= {homeStyles.body_Container}>
       
      </div>
    </main>
  )
}
