import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl mt-20 leading-normal">
        <div className="text-5xl md:text-8xl font-bold text-center w-full">
          Your website is your handshake to your
        </div>
        <h1 class="text-center text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-900 to-blue-200 pb-2">
          community
        </h1>
      </div>
      <div>
        <p className="text-6xl font-light max-w-full text-center">
          Trusted by local business just like yourself
        </p>
        <div className="flex max-w-full items-center justify-center">
          <StaticImage src="../images/eep.png" width={200} alt="Hero" />
          <StaticImage
            src="../images/bop.png"
            placeholder="blurred"
            width={200}
            alt="Our logo"
          />
        </div>
        <p className="text-xl text-center md:text-3xl font-extralight max-w-full">
          Let's make a lasting first impression with your future guests and
          customers.
        </p>
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
                  Relentless Pursuit of Perfection
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
              src="../images/bop.png"
              placeholder="blurred"
              width={1000}
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
