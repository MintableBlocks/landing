import React from "react";

export default function Announcement() {
  return (
    <div>
      <div class="fixed inset-x-0 bottom-0 p-4">
        <aside class="relative py-3 pl-3 pr-12 text-left rounded-lg shadow-lg sm:text-center bg-primary">
          <p class="text-sm font-medium text-white">
            Want to say a hi?
            <a href="" class="ml-3 inline-flex items-center underline">
              Schedule a call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4 ml-1.5 flex-shrink-0"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </p>

          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <button type="button" class="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="flex-shrink-0 w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </span>
        </aside>
      </div>
    </div>
  );
}
