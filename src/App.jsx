import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import All from './pages/All'
import Man from './pages/Man'
import Women from './pages/Women'
import Jewelry from './pages/Jewelry'
import Electronics from './pages/Electronics'
import Login from './pages/Login'
import Member from './pages/Member'
import Payment from './pages/Payment'
import Cart from './pages/Cart'
import Userinfo from './pages/Userinfo'
import "./App.scss";
import ProductDetail from './pages/ProductDetail'
import { useProductStore } from './store/useProductStore'
import { useEffect } from 'react'
import ProductList from './components/ProductList'

function App() {
  const onFetchItems = useProductStore((state) => state.onFetchItems);
  const items = useProductStore((state) => state.items);
  useEffect(() => {
    onFetchItems()
  }, [items])

  if (!items.length) return <div>로딩중...</div>


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* 상세페이지 */}
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/:category/:subcategory' element={<ProductList />} />

        <Route path='/all' element={<All />} />
        <Route path='/men' element={<Man />} />
        <Route path='/women' element={<Women />} />
        <Route path='/jewelery' element={<Jewelry />} />
        <Route path='/electronics' element={<Electronics />} />

        <Route path='/login' element={<Login />} />
        <Route path='/member' element={<Member />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />

        <Route path='/userinfo' element={<Userinfo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
