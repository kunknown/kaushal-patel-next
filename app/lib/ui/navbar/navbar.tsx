"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import classNames from "classnames";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { NAVIGATION_MENU } from "@/lib/constants/constants";
import { useSession } from "next-auth/react";
import { logout } from "@/app/actions/user-actions";
import SwitchToggle from "@/app/lib/ui/switch-toggle/switch-toggle";
import { DarkThemeContext } from "@/lib/context/dark-theme-context";

export default function Navbar() {
  const { data: sessionData } = useSession();
  const isAuthenticated = sessionData?.user?.id;
  const pathname: string | null = usePathname();
  const { isDarkTheme, setIsDarkTheme } = useContext(DarkThemeContext);
  return (
    <Disclosure as="nav" className="bg-gray-300 dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Desktop viewport main menu */}
              <div className="hidden sm:flex items-center justify-center">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {NAVIGATION_MENU.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? "bg-gray-400 text-black dark:bg-gray-900 dark:text-white"
                            : "text-gray-800 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                        aria-current={
                          item.href === pathname ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* TODO: Notifications */}
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-300 dark:bg-gray-800 p-1 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white focus:outline-none focus:ring-black dark:focus:ring-whit focus:ring-offset-2 focus:ring-offset-gray-800 dark:ring-offset-gray-300"
                >
                  <span className="sr-only">Notifications</span>
                  <span className="absolute -inset-1.5" />
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <div className="px-4">
                  <SwitchToggle
                    isToggleOn={isDarkTheme}
                    setIsToggleOn={() => setIsDarkTheme(!isDarkTheme)}
                    labelTop={"Dark Theme"}
                    showDarkModeIcon={true}
                  />
                </div>
                {isAuthenticated ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 dark:bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:ring-offset-gray-300">
                        <span className="absolute -inset-1.5" />
                        <Image
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                          className="h-8 w-8 rounded-full"
                          width={100}
                          height={100}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/profile"
                              className={classNames(
                                active ? "bg-gray-100 dark:bg-gray-600" : "",
                                "block px-4 py-2 text-sm text-gray-800 dark:text-gray-300",
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/settings"
                              className={classNames(
                                active ? "bg-gray-100 dark:bg-gray-600" : "",
                                "block px-4 py-2 text-sm text-gray-800 dark:text-gray-300",
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={async () => logout()}
                              className={classNames(
                                active ? "bg-gray-100 dark:bg-gray-600" : "",
                                "block px-4 py-2 w-full text-sm text-left text-gray-800 dark:text-gray-300",
                              )}
                            >
                              Log out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  // <Link
                  //   href={"/settings"}
                  //   className={classNames(
                  //     pathname === "/login"
                  //       ? "bg-gray-400 text-black dark:bg-gray-900 dark:text-white"
                  //       : "text-gray-800 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                  //     "rounded-md px-3 py-2 text-sm font-medium",
                  //   )}
                  //   aria-current={pathname === "/settings" ? "page" : undefined}
                  // >
                  //   Settings
                  // </Link>
                  <Link
                    href={"/login"}
                    className={classNames(
                      pathname === "/login"
                        ? "bg-gray-400 text-black dark:bg-gray-900 dark:text-white"
                        : "text-gray-800 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                    aria-current={pathname === "/login" ? "page" : undefined}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
          {/* Mobile main menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NAVIGATION_MENU.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    item.href === pathname
                      ? "bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.href === pathname ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
