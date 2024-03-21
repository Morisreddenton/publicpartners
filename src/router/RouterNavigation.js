import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { About, AdAuth, Auth, Blogs, Career, Contact, Dash, Error, Faqs, Home, Overview, Setup, Support } from '../pages'
import { Community } from '../components'


const RouterNavigation = () => {
  return (
     <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/community' element={<Community />} />
        <Route path='/support' element={<Support />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/just-a-moment/:id' element={<Setup />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/ppa-auth' element={<AdAuth />} />
        <Route path='/ppa-admin' element={<Dash />} />
        <Route path='*' element={<Error />} />
     </Routes>
  )
}

export default RouterNavigation