import React from "react";
import "@fontsource/montserrat/600.css";

export default function Roadmap() {
  return (
    <div>
      <section style={{ fontStyle: "Montserrat" }} class="">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="max-w mx-auto text-center">
            <p
              style={{ fontFamily: "Montserrat" }}
              class=" text-4xl text lg:text-4xl mb-10"
            >
              Roadmap
            </p>
          </div>
          <ul class="space-y-8">
            <li class="border-l-4 border-white hover:shadow-2xl">
              <details class="p-8 bg-black" open>
                <summary class="list-none">
                  <h6 class="flex items-start justify-between">
                    <span
                      style={{ fontStyle: "Montserrat" }}
                      class="text-xl font-medium sm:text-3xl text-white"
                    >
                      Q1 2022
                    </span>

                    <span class="p-2 text-black bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </h6>
                </summary>

                <p
                  style={{ fontStyle: "Montserrat" }}
                  class="mt-6 text-lg text-secondary"
                >
                  <ul>
                    <li>- Launching beta version of the product.</li>
                    <li>- Partnering with potential swag manufacturers.</li>
                    <li>- Setting up logistics team.</li>
                    <li>
                      - Recruiting for various positions including design,
                      engineering and outreach.
                    </li>
                    <li>- Sponsoring events.</li>
                  </ul>
                </p>
              </details>
            </li>

            <li class="border-l-4 border-white hover:shadow-2xl">
              <details class="p-8 bg-black">
                <summary class="list-none">
                  <h6 class="flex items-start justify-between">
                    <span
                      style={{ fontStyle: "Montserrat" }}
                      class="text-xl font-medium sm:text-3xl text-white"
                    >
                      Q2 2022
                    </span>

                    <span
                      style={{ fontStyle: "Montserrat" }}
                      class="p-2 text-black bg-white rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </h6>
                </summary>

                <p
                  style={{ fontStyle: "Montserrat" }}
                  class="mt-6 text-lg text-secondary"
                >
                  <ul>
                    <li>- Improving logistics team.</li>
                    <li>
                      - Launching governance token and working on tokenomics.
                    </li>
                    <li>- Launching final version of the product.</li>
                  </ul>
                </p>
              </details>
            </li>

            <li class="border-l-4 border-white hover:shadow-2xl">
              <details class="p-8 bg-black">
                <summary class="list-none">
                  <h6 class="flex items-start justify-between">
                    <span
                      style={{ fontStyle: "Montserrat" }}
                      class="text-xl font-medium sm:text-3xl text-white"
                    >
                      Q3 2022
                    </span>

                    <span class="p-2 text-black bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </h6>
                </summary>

                <p
                  style={{ fontStyle: "Montserrat" }}
                  class="mt-6 text-lg text-secondary"
                >
                  <ul>
                    <li>
                      - Launching governance token and working on tokenomics.
                    </li>
                  </ul>
                </p>
              </details>
            </li>

            <li class="border-l-4 border-white hover:shadow-2xl">
              <details class="p-8 bg-black">
                <summary class="list-none">
                  <h6 class="flex items-start justify-between">
                    <span
                      style={{ fontStyle: "Montserrat" }}
                      class="text-xl font-medium sm:text-3xl text-white"
                    >
                      Q4 2022
                    </span>

                    <span class="p-2 text-black bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  </h6>
                </summary>

                <p
                  style={{ fontStyle: "Montserrat" }}
                  class="mt-6 text-lg text-secondary"
                >
                  <ul>
                    <li>- Expanding our global hubs to USA and Middle East.</li>{" "}
                  </ul>
                </p>
              </details>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
