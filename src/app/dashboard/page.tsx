"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Header } from "../../components/Header/Header";

function Dashboard() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8 bg-white">
        {/* <Header 
        title="DashBoard Page"
        subtitle="This page demonstates how Navigation in React works"
        /> */}
        <div className="bg-sky-600 min-h-screen mt-10 rounded-md">
          <div className="flex flex-row pt-24 px-10 pb-4">
            <div className="w-2/12 mr-6">
              <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                <a
                  href="#"
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    dashboard
                  </span>
                  Home
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    tune
                  </span>
                  Some menu item
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-block text-gray-600 hover:text-black my-4 w-full"
                >
                  <span className="material-icons-outlined float-left pr-2">
                    file_copy
                  </span>
                  Another menu item
                  <span className="material-icons-outlined float-right">
                    keyboard_arrow_right
                  </span>
                </a>
              </div>
            </div>
            <div className="w-10/12">
              <div className="flex flex-row">
                <div
                  className="bg-no-repeat bg-sky-400 border border-sky-900 rounded-xl w-7/12 mr-2 p-6"
                  style={{
                    backgroundImage:
                      "url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)",
                    backgroundPosition: "90% center",
                  }}
                >
                  <p className="text-5xl text-indigo-900">
                    Welcome <br />
                    <strong>Lorem Ipsum</strong>
                  </p>
                  <span className="bg-sky-400 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                    <strong>01:51</strong>
                  </span>
                </div>

                <div
                  className="bg-no-repeat bg-sky-600 border border-sky-900 rounded-xl w-5/12 ml-2 p-6"
                  style={{
                    backgroundImage:
                      "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
                    backgroundPosition: "100% 40%",
                  }}
                >
                  <p className="text-5xl text-indigo-900">
                    Inbox <br />
                    <strong>23</strong>
                  </p>
                  <a
                    href="#"
                    className="bg-sky-600 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
                  >
                    <strong>See messages</strong>
                  </a>
                </div>
              </div>
              <div className="flex flex-row h-64 mt-6">
                <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                  <Link href="/useState/">
                    <button
                      className="text-lg font-semibold rounded-lg px-4 py-2 
                        bg-gradient-to-r from-green-400 to-blue-500"
                    >
                      useState
                    </button>
                  </Link>
                </div>
                <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
                  <Link href="/useEffect/">
                    <button
                      className="text-lg font-semibold rounded-lg px-4 py-2 
                        bg-gradient-to-r from-green-400 to-blue-500 transition:-translate-y-2"
                    >
                      useEffect
                    </button>
                  </Link>
                </div>
                {/* <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
                  c
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
