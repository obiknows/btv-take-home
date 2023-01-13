import React, { ReactNode } from "react";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const MarketingLayout = ({ children, title = "BlackOakTV" }: Props) => {
  const { data: session, status } = useSession();
  const links = [
    { id: 1, name: "Refer", url: "/share" },
    { id: 2, name: "Watch", url: "/watch" },
    { id: 3, name: "Stream", url: "/stream", isNew: true },
  ];

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*  */}
      <section className="bg-slate-900 min-h-screen w-screen ">
        {/* Header */}
        <header className="sticky top-4 inset-x-0 flex flex-col items-center flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
          <nav
            className="relative max-w-[85rem] w-full border  rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto bg-gray-800 border-gray-700"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <a
                className="flex-none text-xl font-semibold text-white"
                href="/"
                aria-label="Brand"
              >
                BlackOakTV
              </a>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium  shadow-sm align-middle  focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-600 transition-all text-sm bg-gray-800 hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden w-4 h-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden w-4 h-4"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
                {links.map(({ id, name, url, isNew }) => (
                  <a
                    key={id}
                    className="font-medium md:py-6 text-white hover:text-blue-500 uppercase"
                    href={url}
                    aria-current="page"
                  >
                    {name}
                    {isNew && (
                      <span className="ml-2 font-light lowercase text-xs tracking-wide">
                        New
                      </span>
                    )}
                    {/* {isLoggedIn && <span></span>} */}
                  </a>
                ))}

                {status === "unauthenticated" && (
                  <a
                    className="flex items-center font-medium  text-gray-400"
                    href="/signup"
                  >
                    Sign Up
                  </a>
                )}

                {status === "authenticated" ? (
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-x-2 font-medium  md:border-l md:border-gray-300 md:my-6 md:pl-6 border-gray-700 text-gray-400 hover:text-blue-500"
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    onClick={() => signIn()}
                    className="flex items-center gap-x-2 font-medium  md:border-l md:border-gray-300 md:my-6 md:pl-6 border-gray-700 text-gray-400 hover:text-blue-500"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Log in
                  </button>
                )}
              </div>
            </div>
          </nav>
          {/* Banner */}
          {/* <div className="bg-white/[.6] backdrop-blur-lg dark:bg-slate-900/[.6] max-w-[85rem] w-full">
            <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
              <div className="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
                <div className="flex items-center gap-x-3 md:gap-x-5">
                  <svg
                    className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="6"
                      fill="currentColor"
                      className="fill-blue-600"
                    />
                    <path
                      d="M8 32.5V19.5C8 12.8726 13.3726 7.5 20 7.5C26.6274 7.5 32 12.8726 32 19.5C32 26.1274 26.6274 31.5 20 31.5H19"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M12 32.5V19.66C12 15.1534 15.5817 11.5 20 11.5C24.4183 11.5 28 15.1534 28 19.66C28 24.1666 24.4183 27.82 20 27.82H19"
                      stroke="white"
                      stroke-width="2"
                    />
                    <circle cx="20" cy="19.5214" r="5" fill="white" />
                  </svg>

                  <div>
                    <p className="md:text-xl text-gray-800 font-semibold dark:text-gray-200">
                      Get started today.
                    </p>
                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">
                      Sign up to get unlimited updates.
                    </p>
                  </div>
                </div>

                <div className="text-center sm:text-left flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
                  <a
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md sm:rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm md:py-3 md:px-4"
                    href="#"
                  >
                    Free trial
                  </a>
                  <a
                    className="py-[.4125rem] px-3 inline-flex justify-center items-center gap-2 rounded-md sm:rounded-full border-2 border-gray-900 font-semibold text-gray-800 hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm md:py-[.688rem] md:px-4 dark:hover:bg-white dark:border-gray-200 dark:hover:border-white dark:text-white dark:hover:text-gray-800 dark:focus:ring-white dark:focus:ring-offset-gray-800"
                    href="#"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </header>
        {/* Content */}
        <main className="pt-8">{children}</main>
      </section>
    </div>
  );
};

export default MarketingLayout;
