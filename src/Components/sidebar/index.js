import React from 'react'
import './style.scss'

export  function Sidebar () {
  return (
    <main className='sidebar'>
      <section>
        <article className='sidebar__icon'>
          <div className='sidebar__icon--bar' />
          <div className='sidebar__icon--bar' id='yellow' />
          <div className='sidebar__icon--circle' />
        </article>
        <article className='sidebar__align'>
          <i className='fa fa-bell-o' aria-hidden='true' />
          <i className='fa fa-download' aria-hidden='true' />
        </article>
      </section>
      <div className='sidebar__middle'>
        <p className='sidebar__middle--text'>Upgrade</p>
      </div>
      <div className='sidebar__align'>
        <i className='fa fa-user-plus' aria-hidden='true' />
        <i className='fa fa-search' aria-hidden='true' />
        <i className='fa fa-question' aria-hidden='true' />
        <i className='fa fa-user-circle' aria-hidden='true' />
      </div>
    </main>
  )
}


