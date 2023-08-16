import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const Carousel = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const goToNext = () => {
    const isLastSlide = slideIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : slideIndex + 1

    setSlideIndex(newIndex)
  }

  const goToPrev = () => {
    const isFirstSlide = slideIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1

    setSlideIndex(newIndex)
  }

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center w-full gap-12"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div className="flex w-full items-center">
        {slides[slideIndex - 1] && (
          <GoChevronLeft
            className="text-3xl mr-6 opacity-50 hover:opacity-100 transition-all cursor-pointer"
            onClick={goToPrev}
          />
        )}

        <motion.div
          className="relative hover:bg-opacity-100 transition-all rounded-md w-full h-48 lg:h-72 flex items-center justify-center overflow-hidden"
          animate={{ scale: [0.95, 1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <AnimatePresence>
            <motion.img
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              src={slides[slideIndex].image}
              className="rounded-sm z-0 absolute object-fit"
              style={{ scale: 0.95 }}
              key={slideIndex}
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileHover={{ scale: 0.9 }}
            />
          </AnimatePresence>
        </motion.div>

        {slides[slideIndex + 1] && (
          <GoChevronRight
            className="text-3xl ml-6 opacity-50 hover:opacity-100 transition-all cursor-pointer"
            onClick={goToNext}
          />
        )}
      </motion.div>

      <motion.div
        className="w-full overflow-hidden"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          className="flex flex-col justify-center bg-secondary py-6 px-8 font-['Outfit'] text-sm rounded-md cursor-default"
          key={slideIndex}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1000 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl">
            {`{`}{' '}
            <span className="text-alt"> {slides[slideIndex].project} </span>{' '}
            {`}`}
          </h1>

          <p className="mt-4 overflow-y-scroll h-24 scroll">
            {slides[slideIndex].desc}
          </p>

          <div className="flex mt-4 2xl:mt-1 gap-4 text-xs flex-wrap">
            {slides[slideIndex].tags &&
              slides[slideIndex].tags.map((slide, index) => (
                <motion.div
                  key={index}
                  className="rounded-sm px-4 py-2"
                  style={{ backgroundColor: `${slide.color}` }}
                >
                  {slide.name}
                </motion.div>
              ))}
          </div>

          <div className="flex flex-wrap mt-6 gap-4 text-xs">
            {slides[slideIndex].links &&
              slides[slideIndex].links.map((slide, index) => (
                <motion.div
                  key={index}
                  className="rounded-sm px-3 py-2 bg-primary flex items-center"
                >
                  <a href={`${slide.link}`}>{slide.name}</a>
                  <span className="ml-2">{slide.icon}</span>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Carousel
