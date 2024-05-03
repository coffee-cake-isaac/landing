import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl mt-20">
        <div className="flex justify-center"></div>
        <div className="flex justify-center"></div>
        <div className="text-5xl md:text-8xl font-bold text-center w-full">
          Your website is your handshake to your
        </div>
        <h1 class="text-center text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-900 to-blue-200">
          community.
        </h1>
      </div>

      <div className="flex">
        <div className="grid md:grid-cols-2">
          <p className="text-4xl text-center md:text-6xl font-extralight ">
            Let's make a lasting first impression with your future guests and
            customers.
          </p>
          <div className="flex text-center justify-center">
            <ul className="flex flex-col justify-around m-2">
              <li className="">
                <div class="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-slate-100">
                  <div class="p-4">
                    <div class="font-bold text-xl mb-2 underline">
                      Erin Emily Photography
                    </div>
                    <p className="italic text-left">
                      A beautiful website for a photographer with a heart as big
                      as her dreams
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-slate-100">
                  <div class="p-4">
                    <div class="font-bold text-xl mb-2 underline">
                      Blue Otter Studios
                    </div>
                    <p className="italic text-left">
                      We wouldn't publish a website that we wouldn't use as our
                      own front door to the world.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-10">
          <div className="text-center">
            <p className="text-5xl font-extralight">10+</p>
            <p className="text-5xl font-semibold">years of experience</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-extralight">150</p>
            <p className="text-5xl font-semibold">projects completed</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-extralight">100%</p>
            <p className="text-5xl font-semibold">Guaranteed Satisfaction</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl text-center font-light">
          Your website is often the first impression that your guests and
          community will have of you. It's important to exude the same{" "}
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-amber-400 via-amber-400 to-red-400">
            warmth
          </span>{" "}
          and{" "}
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-700">
            professionalism
          </span>{" "}
          that you would in person.
        </h1>
        <div className="flex grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="block m-5 p-6 rounded-lg bg-slate-100 dark:border-gray-500 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
              Why Choose Blue Otter Studios?
            </h5>
            <div className="my-5">
              <div className="inline font-semibold text-xl">
                <p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-green-400 inline"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>{" "}
                  Relentless of Pursuit of Perfection
                </p>
              </div>
              <div className="inline font-semibold text-xl">
                <p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-green-400 inline"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>{" "}
                  Unique websites via hand-crafted websites
                </p>
              </div>
              <div className="inline font-semibold text-xl">
                <p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-green-400 inline"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>{" "}
                  Seamless Collaboration
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-5">
            <StaticImage
              src="../images/logo.png"
              placeholder="blurred"
              layout="fixed"
              width={400}
              alt="Our logo"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-5 text-xl rounded-xl">
          Let's get to work
        </button>
      </div>
    </div>
  </>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
