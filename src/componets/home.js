import React from 'react'
import { Link } from 'react-router-dom'
import Content from './content'

export default function Home() {
  return (
    <>
    <section className=' overflow-x-hidden h-screen w-screen bg-slate-100 flex justify-center items-center text-center'>
        <div className=''>
            <div className='flex'>
                <div className='flex  flex-col  '>
                    <div className='mt-12'>
                        <h5 className='font-bold uppercase text-2xl text-slate-300'>fitness</h5>
                        <h3 className='text-3xl font-bold uppercase text-slate-300'>training</h3>
                        <h1 className='text-5xl uppercase font-bold text-slate-300'>neogym</h1>

                        <br/>
                        <p className='px-8 py-4  text-slate-300'>lorem ipsum dolor sit amat,
                            consection adiptiond kasdke elifius exsdi sdjhufhr kasjdhwkuhiewu jaud8eheic aghsiw7wgei gdieb bnhdjd hdj dhdi ddyeu shdikfheic shjdjffeiufh shd r fer fwere wewe eewethy yukui fryju gtyhju smdjhk u hu yt oiuhj uu yi yy6 r ijh yf ih yhh uigy f uhihyuygyu iyhyhyyh gihy7ugf ohyhyg ohuyh ihujug juihih oujuihih ihhug oujuhih ihuh tgrd tr huyr56 rug r yyt u o8y9t biuoigut8yopyg yiuy o yghiouytfg hou.
                        </p>
                    </div>
<div className='list-none'>
<li className='border border-slate-300 mb-5 mx-auto w-fit px-3 py-2 mt-10 text-lg font-bold rounded-sm uppercase hover:bg-slate-400 hover:shadow-xl hover:text-black hover:border-none  '><Link to={'/contact'}>contact us</Link></li>
<br>
</br>
<div className='grid gap-2 grid-flow-col mx-auto w-36'>
    <i className=' ring-2 ring-offset-red-500 rounded-full'>O</i>
    <i className=' ring-2 ring-offset-red-500 rounded-full'>O</i>
    <i className=' ring-2 ring-offset-red-500 rounded-full'>O</i>
    <i className=' ring-2 ring-offset-red-500 rounded-full'>O</i>
    <i className=' ring-2 ring-offset-red-500 rounded-full'>O</i>
</div>
</div>
  
                </div>
                
            </div>
        </div>
    </section>
<Content/>
    </>

  )
}
