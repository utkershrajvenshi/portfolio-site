import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50"/>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span>Ready to take </span>
          <span className="text-purple">your </span>
          <span>digital presence to the next level?</span>
        </h1>
        <p className="text-white-200 my-5 text-center md:mt-10">Reach out to me today and let's discuss how I can help you achieve your goals</p>
        <a href="mailto:utkarshrajvanshi2@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base font-light md:font-normal">
          Copyright © 2024, Utkersh Rajvenshi
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer