import { useSession } from "next-auth/react";

const HomeHero = () => {
  const { data: session, status } = useSession();

  const Inputs = () => {
    if (status == "authenticated") {
      return (
        <div className="mt-5 lg:mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full sm:w-auto hidden">
            <label className="sr-only">Search</label>
            <input
              type="text"
              id="hero-input"
              name="hero-input"
              className="py-3 px-4 block w-full xl:min-w-[18rem]  shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
              placeholder="Email Address"
            />
          </div>
          <a
            className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2  transition py-3 px-4 focus:ring-offset-gray-800"
            href="/watch"
          >
            Enter Your Dashboard
          </a>
        </div>
      );
    }

    return (
      <div className="mt-5 lg:mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <div className="w-full sm:w-auto">
          <label className="sr-only">Search</label>
          <input
            type="text"
            id="hero-input"
            name="hero-input"
            className="py-3 px-4 block w-full xl:min-w-[18rem]  shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
            placeholder="Email Address"
          />
        </div>
        <a
          className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2  transition py-3 px-4 focus:ring-offset-gray-800"
          href="/signup"
        >
          Start Your Free Trial
        </a>
      </div>
    );
  };

  return (
    <section className="w-full h-full text-white">
      <div className="max-w-[85rem] mx-auto">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl text-center font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-white">
              The new home for Black content
            </h1>

            {Inputs()}
          </div>

          <div className="relative lg:col-span-4 mt-10 lg:mt-0">
            <div className="absolute w-full h-full bg-black/2"></div>
            <img
              className="w-full rounded-xl bg-black"
              src="/hero.png"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
