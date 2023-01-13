import type { NextPage } from "next";
import Link from "next/link";
import Marketing from "../../components/Marketing";

import { useSession } from "next-auth/react";

const ShareReferralPage: NextPage = () => {
  const { data: session, status } = useSession();

  const ReferralForm = () => {
    if (status === "authenticated") {
      return (
        <div className="relative">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 border-gray-700">
            <h2 className="text-xl font-semibold  text-gray-200">
              Here's your referral link:
            </h2>

            <form method="post" action="/share/confirm">
              <div className="mt-6">
                <label className="block text-sm  font-medium text-white">
                  Copy And Share
                </label>
                <div className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400">
                  https://share.blackoak.tv/admin
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2  focus:ring-offset-2 transition py-3 px-4 focus:ring-offset-gray-800"
                >
                  Share
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 border-gray-700">
            <h2 className="text-xl font-semibold  text-gray-200">
              Enter your email to get your referral link:
            </h2>

            <form method="post" action="/share/confirm">
              <div className="mt-6">
                <label className="block text-sm  font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="hs-work-email-hire-us-1"
                  id="hs-work-email-hire-us-1"
                  className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
                />
              </div>
              <div className="mt-6 grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm  font-medium text-white">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-hire-us-1"
                      id="hs-firstname-hire-us-1"
                      className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm  font-medium text-white">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="hs-lastname-hire-us-1"
                      id="hs-lastname-hire-us-1"
                      className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2  focus:ring-offset-2 transition py-3 px-4 focus:ring-offset-gray-800"
                >
                  Enter
                </button>
              </div>
            </form>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                You have to be at least 18 years of age to participate in the
                referral program
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Marketing title="Share | Black Oak TV">
      <div className="w-full h-full">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* section 1 */}
          <div className="grid md:grid-cols-2 items-center gap-12 mb-24">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight text-white">
                Share. Earn. Easy.
              </h1>
              <p className="mt-1 md:text-xl  text-gray-200">
                Earn up to{" "}
                <span className="font-bold">$450 in Amazon Gift Cards</span>{" "}
                when your referrals sign for a subscription.
              </p>
            </div>

            {ReferralForm()}
          </div>

          {/* section 2: how it works */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
              <div>
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                  alt="Image Description"
                />
              </div>

              <div className="mt-5 sm:mt-10 lg:mt-0">
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl  text-gray-200">
                      How it works
                    </h2>
                    <p className="text-gray-500">
                      Besides working with start-up enterprises as a partner for
                      digitalization, we have built enterprise products for
                      common pain points that we have encountered in various
                      products and projects.
                    </p>
                  </div>

                  <ul role="list" className="space-y-2 sm:space-y-4">
                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-6 w-6  text-blue-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                          fill="currentColor"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                          fill="currentColor"
                        />
                      </svg>

                      <span className="text-sm sm:text-base text-gray-500">
                        <span className="font-bold">Easy & fast</span> designing
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-6 w-6  text-blue-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                          fill="currentColor"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                          fill="currentColor"
                        />
                      </svg>

                      <span className="text-sm sm:text-base text-gray-500">
                        Powerful <span className="font-bold">features</span>
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-6 w-6  text-blue-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                          fill="currentColor"
                          fillOpacity="0.1"
                        />
                        <path
                          d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                          fill="currentColor"
                        />
                      </svg>

                      <span className="text-sm sm:text-base text-gray-500">
                        User Experience Design
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Marketing>
  );
};
export default ShareReferralPage;
