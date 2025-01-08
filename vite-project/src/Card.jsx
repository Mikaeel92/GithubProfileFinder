import React from 'react'

const Card = ({user}) => {

    const {avatar_url, followers, following, public_repos, url, name, login, created_at} = user

    const crateDate = new Date(created_at)
    console.log(crateDate)

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <div>
            <img src={avatar_url} alt='user' className='size-96 rounded-md shadow-lg'/>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <a href={url} className='text-3xl font-bold'>{name || login}</a>
            <p className='text-xl'>User Joined on {`${crateDate.getDay()}/${crateDate.getMonth()}/${crateDate.getFullYear()}`} </p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <p className='font-bold text-blue-800'>Public Repos</p>
            <p className='font-bold'>{public_repos}</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <p className='font-bold text-blue-800'>Followers</p>
            <p className='font-bold'>{followers}</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
            <p className='font-bold text-blue-800'>Following</p>
            <p className='font-bold mb-8'>{following}</p>
        </div>
    </div>
  )
}

export default Card