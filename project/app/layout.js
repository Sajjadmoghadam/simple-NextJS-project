import Header from '@/Components/header/Index'
import './globals.css'
import Footer from '@/Components/Footer/Index'
import 'bootstrap/dist/css/bootstrap.min.css'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main-container'>
        <Header/>{children}<Footer/>
        </div>
        
        </body>
    </html>
  )
}
