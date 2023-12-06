import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './componets/home';
import Service from './componets/service';
import Content from './componets/content';
import '../src/index.css'
import  $ from 'jquery'
export default function App(){
  
    $(document).ready(function(){
    $('#btn').click(function(){
    $('.tog').fadeToggle(10000)
    })
});
    
    return(
        <>
        <BrowserRouter>
        <nav className=' sticky flex w-full px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 justify-between items-center  bg-slate-200 '>
            <a href='/' className='text-2xl md:text-3xl font-bold uppercase  text-slate-500'>neogym</a>
<div className='tog hidden lg:flex mr-10 w-full justify-end md absolute top-32 left-1/2 right-1/2  '>
    <ul className='md:flex gap-10   items-center '>
             <li className='font-bold text-2xl uppercase text-slate-500' ><Link to={"/"}>home</Link></li>
             <li className='font-bold text-2xl uppercase text-slate-500' ><Link to={'/service'}>service</Link></li>
             <li className='font-bold text-2xl uppercase text-slate-500' ><Link to={'/content'}>content</Link></li>
        </ul>
</div>
<button id='btn' className='text-slate-500 uppercase border border-slate-300  px-3 py-2 hover:bg-slate-300 hover:text-black font-bold hover:shadow-lg lg:hidden text-2xl md:text-3xl'><span >Toogler</span></button>
        </nav >
        
        

        <Routes>
            <Route>
                <Route path='/' element={<Home/>}/>
                <Route  path='service' element={<Service/>}/>
                <Route path='content' element={<Content/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}