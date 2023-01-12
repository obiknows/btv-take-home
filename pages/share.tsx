import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const ShareReferralPage: NextPage = () => (
  <Layout title="Share | Black Oak TV">
    <div className="w-full h-full">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-tight text-white">
              Share. Earn. Easy.
            </h1>
            <p className="mt-1 md:text-xl  text-gray-200">
              Earn up to{" "}
              <span className="font-bold">$450 in Amazon Gift Cards</span> when
              your referrals shop for insurance.
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 border-gray-700">
              <h2 className="text-xl font-semibold  text-gray-200">
                Enter your email to get your referral link:
              </h2>

              <form>
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
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-hire-us-1"
                        id="hs-lastname-hire-us-1"
                        className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm  font-medium text-white">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="hs-work-email-hire-us-1"
                      id="hs-work-email-hire-us-1"
                      className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
                    />
                  </div>

                  {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label className="block text-sm  font-medium text-white">
                        Company
                      </label>
                      <input
                        type="text"
                        name="hs-company-hire-us-1"
                        id="hs-company-hire-us-1"
                        className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm  font-medium text-white">
                        Company Website
                      </label>
                      <input
                        type="text"
                        name="hs-company-website-hire-us-1"
                        id="hs-company-website-hire-us-1"
                        className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
                      />
                    </div>
                  </div> */}

                  {/* <div>
                    <label className="block text-sm  font-medium text-white">
                      Details
                    </label>
                    <textarea
                      id="hs-about-hire-us-1"
                      name="hs-about-hire-us-1"
                      rows={4}
                      className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 border-gray-700 text-gray-400"
                    ></textarea>
                  </div> */}
                </div>

                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 focus:ring-offset-gray-800"
                  >
                    Enter
                  </button>
                </div>
              </form>

              {/* <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ShareReferralPage;
