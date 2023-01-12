import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "BlackOakTV" }: Props) => {
  const links = [
    { id: 1, name: "Refer", url: "/share", isLoggedIn: true },
    { id: 1, name: "Watch", url: "/watch" },
    { id: 1, name: "Stream", url: "/stream", isNew: true },
  ];

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/*  */}
      <body className="bg-slate-900 min-h-screen w-screen">
        {/* Header */}
        <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
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
                  className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm bg-gray-800 hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800"
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
                {links.map(({ id, name, url, isLoggedIn, isNew }) => (
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

                {/* Dropdown Menu */}
                {/* <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                  <button
                    type="button"
                    className="flex items-center w-full  font-medium text-gray-400 hover:text-gray-500 "
                  >
                    Dropdown
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2 bg-gray-800 md:border border-gray-700 divide-gray-700 before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                      href="#"
                    >
                      About
                    </a>
                    <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
                      <button
                        type="button"
                        className="w-full flex justify-between items-center text-sm rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 text-gray-400  hover:text-gray-300"
                      >
                        Sub Menu
                        <svg
                          className="md:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </button>

                      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2 bg-gray-800 md:border border-gray-700 divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                          href="#"
                        >
                          About
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                          href="#"
                        >
                          Downloads
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                          href="#"
                        >
                          Team Account
                        </a>
                      </div>
                    </div>

                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                      href="#"
                    >
                      Downloads
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm  focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                      href="#"
                    >
                      Team Account
                    </a>
                  </div>
                </div> */}

                <a
                  className="flex items-center font-medium  text-gray-400"
                  href="/signup"
                >
                  Sign Up
                </a>
                <a
                  className="flex items-center gap-x-2 font-medium  md:border-l md:border-gray-300 md:my-6 md:pl-6 border-gray-700 text-gray-400 hover:text-blue-500"
                  href="/login"
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
                </a>
              </div>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </div>
  );
};

export default Layout;
