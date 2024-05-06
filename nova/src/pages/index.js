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
        <p className="text-6xl font-light max-w-full text-center mx-5">
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
        <h1 className="text-3xl md:text-5xl text-center font-light mx-5">
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
        <section class="bg-white">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="mb-8 text-4xl tracking-tight font-extrabold">Frequently asked questions</h2>
            <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
              <div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    What makes a website so important for local businesses?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">Your website is your handshake with your community. It's often your first impression of the same quality you provide within the walls of your business. It's imperative to make a long, good and lasting impression.</p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    How will a partnership help my business succeed?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">We believe we offer a world-class website with a focus on performance, design and delivering information. Your guests find what they need without having to struggle through slow load times or complicated designs.</p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    How does support work?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">You are our number one priority. We take great pride in providing the best support through text, email or phone calls. This service is available to all clients at all times, free of charge.</p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    I have more than one business. How does pricing and maintenance work?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">If you're interested in creating a web space for all of your businesses, we'll work together to provide not only the best pricing but the best deliverable timeline.</p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    How can I ensure that my website is cutting-edge and worry-free?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">I'm an experienced software engineer by day. I work vigilantly to stay up-to-date with the latest trends and technology. My goal is to reduce friction for your business to help you thrive within the community.</p>
                </div>
              </div>
              <div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium">
                    <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                    What does the process look like?
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400">After an initial meet-and-greet, contracts are signed to protect both parties. Following successful contract completion, work is immediately started with four deliverable items.</p>
                  <p class="text-gray-500 dark:text-gray-400">1. Initial design mock up. This is to be taken as extremely fluid meaning sweeping changes can occur. Placement text and images will exist to provide a feel of being completed and polished. We'll lock the design down here.</p>
                  <p class="text-gray-500 dark:text-gray-400">2. After design lockdown, we'll begin implementing assets relative to your business. These assets are typically provided by the business, but can be supplied for an additional fee.</p>
                  <p class="text-gray-500 dark:text-gray-400">3. Final Review. After the assets are placed in and the website has been polished and optimized, we'll have a final design discussion to change verbiage, photos, or minor tweaks.</p>
                  <p class="text-gray-500 dark:text-gray-400">4. Go live and maintenace. After final review, we will publish the updated website and provide maintenance according to the aforementioned contract. All worry-free and hands-off for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-2xl font-semibold">LET'S GET TO WORK</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Interested in improving your web presence and propelling your business forward?</p>
          <form name="contact" method="POST" className="space-y-8" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="isaac@blueotterstudios.com" required />
            </div>
            <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" name="subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="content" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg-blue-500 text-white max-w-full w-full min-w-full rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
          </form>
        </div>
      </section>
      <div className="flex grid grid-cols-2 justify-around items-center text-center">
        <div>
          <p className="text-xl font-bold my-0">Phone</p>
          <p className="text-xl">1-234-567-8901</p>
        </div>
        <div>
          <p className="text-xl font-bold my-0">Email</p>
          <p className="text-xl">isaac@blueotterstudios.com</p>
        </div>
      </div>
    </div>
  </>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
