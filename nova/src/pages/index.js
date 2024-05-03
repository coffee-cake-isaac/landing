import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <>
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl">
        <div className="flex justify-center"></div>
        <div className="flex justify-center">
          <StaticImage
            src="../images/logo.png"
            placeholder="blurred"
            layout="fixed"
            width={200}
            alt="Our logo"
          />
        </div>
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
            <ul className="flex flex-col justify-around">
              <li>
                <div class="max-w-sm rounded-xl overflow-hidden shadow-2xl">
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
                <div class="max-w-sm rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/40">
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
            <p className="text-5xl font-extralight">10+</p>
            <p className="text-5xl font-semibold">years of experience</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="md:text-5xl text-center font-light">
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
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
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

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
