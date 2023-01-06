/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import React, { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { urlFor } from "../sanity";
const Header = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },

    { name: "Current Operations", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="sticky">
      <div className="hidden  md:flex w-full h-24 items-center z-50 justify-around bg-[#ffffff] shadow-sm shadow-gray-200 fixed ">
        <div>
          {logo.map((l, i) => {
            return (
              <img
                key={i}
                src={urlFor(l.mainImage).url()}
                alt={l.title}
                height={50}
                width={50}
              />
            );
          })}
        </div>
        <ul className="flex flex-row gap-4 text-[#228b22] ">
          {menu.map((item) => (
            <li key={item.name}>
              <Link legacyBehavior prefetch={false} href={item.path}>
                <a
                  className="text-lg px-4 font-semibold hover:text-black hover:transition-all hover:duration-500  text-[20px] transition-all duration-400 font-sm"
                  href={item.path}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Link href="/about">
            <div className="w-28 flex items-center justify-around px-1 py-1 h-14  text-white rounded-full bg-[#228b22] hover:bg-black hover:transition-all hover:duration-150 transition duration-200">
              Feedback
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full h-16 md:hidden items-center bg-[#228b22] fixed">
        <div className="flex items-center justify-between px-4 h-full relative">
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-96 items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all h-96">
                      <div className="mt-4">
                        <button type="button" onClick={closeModal}>
                          <span className="absolute right-2 top-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="mt-2">
                        <ul className="flex flex-col gap-10 items-center justify-center">
                          {menu.map((item) => (
                            <li key={item.name}>
                              <Link
                                legacyBehavior
                                prefetch={false}
                                href={item.path}
                              >
                                <a
                                  className="text-lg px-4 font-semibold text-black"
                                  href={item.path}
                                >
                                  {item.name}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const logo = await client.fetch(groq`*[_type == "logo"]{...,}`);

  return {
    props: { logo }, // will be passed to the page component as props
  };
}

export default Header;
