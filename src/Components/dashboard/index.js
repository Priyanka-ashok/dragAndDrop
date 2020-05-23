import React, { useState } from 'react'
import { BoardNames } from './BoardNames'
import { v4 as uuidv4 } from 'uuid'
import './style.scss'

export function Dashboard () {
  const [isAddBoard, setBoardName] = useState(true)
  const [addBoardName, setAddBoardName] = useState('')
  const [boardNames, setBoardNames] = useState([])

  const handleAddBoard = () => setBoardName(false)
  const handleBoardName = e => setAddBoardName(e.target.value)
  const handleCreateBoard = e => {
    if (e.keyCode === 13) {
      const board = {
        name: e.target.value,
        id: uuidv4()
      }
      setAddBoardName('')
      setBoardNames([...boardNames, board])
    }
  }

  return (
    <>
      <div className='dashboard-container'>
        <div className='dashboard__top'>
          <p className='dashboard__top--title'>Workspaces</p>
          <div className='dashboard__top--search'>
            <span>
              <i className='fa fa-search' aria-hidden='true' />
              <input
                type='search'
                id='search-icon'
                placeholder='Filter boards..'
              />
            </span>
          </div>
          {isAddBoard
            ? (
              <div className='dashboard__top--addItem' onClick={handleAddBoard}>
        Add
              </div>)

            : (
              <input
                type='text'
                placeholder='Enter Board Name'
                onChange={handleBoardName}
                onKeyDown={handleCreateBoard}
                value={addBoardName}
              />)}

          <ul>
            <BoardNames boardNames={boardNames} />
          </ul>

        </div>
        <div className='dashboard__bottom'>
          <p className='dashboard__bottom--title'>Dashboards</p>
          <span className='dashboard__bottom--playstore'>
            <h4 className='dashboard__bottom--playstore-icons'>
            Get the mobile app <i className='fa fa-apple' />
            </h4>
          </span>
        </div>
      </div>
      <div className='circle'>
        <i className='arrow left' />
      </div>
    </>
  )
}
