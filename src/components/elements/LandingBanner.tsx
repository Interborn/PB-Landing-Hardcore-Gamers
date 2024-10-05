import React from 'react'

const LandingBanner = () => {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="max-w-[68rem] w-full h-full mx-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="flex flex-col justify-center py-8 md:py-16 px-8 md:px-16 gap-4">
          <h2 className='text-[34px] font-bold'>Be Among the First to Experience Elite Game Trading!</h2>
          <p className='text-[17px] text-justify'>Serious gamers deserve serious protection. Sign up now to secure your spot on Player Bay and unlock exclusive rewards for high-value trades when we launch!</p>
          <div className="flex md:flex-row flex-col w-full gap-3 md:gap-6 md:max-h-[3.25rem]">
            {/* Updated email input */}
            <input
              type="email"
              name="hero-email-input"
              placeholder="Enter your email to sign up for early access"
              aria-label="Enter your email to secure your spot"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="w-full rounded-md px-4 py-2.5 transition duration-300 focus:border-white focus:outline-none focus:ring-1 focus:ring-white text-[14px]"
            />
            {/* Call to action button */}
            <button className="min-w-[10rem] rounded-md bg-white px-6 py-2.5 font-semibold text-blue-600 transition duration-300 hover:bg-slate-200 text-[14px]">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingBanner