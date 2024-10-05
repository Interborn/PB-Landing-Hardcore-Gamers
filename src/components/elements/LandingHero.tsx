const LandingHero = () => {
  return (
    <main className="flex min-h-screen overflow-hidden bg-gradient-to-b from-blue-800 to-[#0a0a0a]">
      
      <div className="w-full max-w-[90rem] mx-4 maximum-4:mx-auto flex items-center justify-between gap-32">
        
        <div className="flex w-full flex-col gap-4 mx-4 lg:mx-16 maximum-4:mx-auto">
          {/* Main animated heading */}
          <h1 className="text-[31px] font-bold text-white">
            Maximize Your Gains – Trade, Earn, and Dominate with Player Bay
          </h1>

          {/* Supporting text */}
          <h3 className="text-[17.5px] text-white opacity-80 text-justify">
            Player Bay is your platform to trade rare items, sell valuable gear, and earn exclusive rewards.Join the waitlist for early access.
          </h3>

          <div className="flex w-full gap-6 mt-4">
            {/* Updated email input */}
            <input
              type="email"
              name="hero-email-input"
              placeholder="Enter your email to sign up for early access"
              aria-label="Enter your email to join the waitlist"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="w-full rounded-md border border-blue-500 bg-gradient-to-l from-blue-900 to-blue-950 px-4 py-2.5 transition duration-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 text-[14px]"
            />

            {/* Call to action button */}
            <button className="min-w-[10rem] rounded-md bg-blue-600 px-6 py-2.5 font-semibold text-white transition duration-300 hover:bg-blue-700 text-[14px]">
              Join the Waitlist
            </button>
          </div>
        </div>

        {/* Squid Container */}
        <div className="model-container w-full">

        </div>
      </div>

    </main>
  )
}

export default LandingHero
