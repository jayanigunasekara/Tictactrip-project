import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Header/Navbar'
import Header from '../components/Header'
import Section01 from "../components/Section01"
import Layout from '@/Parent-Layout/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <Header/>
    <Section01/> */}
    <Layout/>
    

  

      
      
    </>
  )
}
