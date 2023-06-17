import React from 'react'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SocialMediaLinks() {
  return (
    <div className='flex justify-around items-center gap-5  mt-32 '>
        <Link>
        <FaTwitter className='text-primary-color hover:text-secondary-color transform hover:translate-y-1 text-3xl'/>
        </Link>
        <Link>
        <FaFacebook className='text-primary-color hover:text-secondary-color transform hover:translate-y-1 text-3xl'/>
        </Link>
        <Link>
        <FaGoogle className='text-primary-color hover:text-secondary-color transform hover:translate-y-1 text-3xl'/>
        </Link>

    </div>
  )
}
