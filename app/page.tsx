import HomeHeader from "@/components/HomeHeader"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Home | MacBro App',
}

export default function Home() {
  return (
   <header>
   <HomeHeader/>
   </header>
  )
}
