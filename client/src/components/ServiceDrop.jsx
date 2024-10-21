import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function ServiceDrop() {
  return (
    <div className='flex h-screen justify-center bg-neutral-900 py-10 '>
      <FlyoutLink href='/pricing' FlyoutContent={PricingContent}>
        Pricing
      </FlyoutLink>
    </div>
  )
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false)

  const showFlyout = open && FlyoutContent

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative h-fit w-fit'>
      <a href={href} className='relative text-2xl text-white'>
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className='absolute -bottom-1 -left-2 -right-2 h-0.5 origin-left rounded-full bg-blue-500 transition-transform duration-300 ease-out'
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{
              translateX: '-50%',
            }}
            className='absolute left-1/2 top-12 bg-white text-black '>
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent'></div>
            <div className='absolute left-1/2 top-0.5 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white'></div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PricingContent = () => {
  return <div className='h-24 w-64  bg-white p-6 shadow-xl'></div>
}

export default ServiceDrop
