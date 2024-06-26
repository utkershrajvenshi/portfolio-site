import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
  return (
    <section className="py-20" id="experience">
      <h1 className="heading">
        <span>My</span>
        <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius='1.75rem'
            duration={Math.floor(Math.random() * 10000) + 10000}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <picture><img src={card.thumbnail} alt={card.thumbnail} className="w-16 md:w-20 lg:w-32" /></picture>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  )
}

export default Experience