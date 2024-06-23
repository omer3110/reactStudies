import { useEffect, useState } from "react";
import mobileImage from "./images/image-intro-mobile.jpg/";
import desktopImage from "./images/image-intro-desktop.jpg/";
import DarkCard from "./components/DarkCard";
import MiniWhiteCard from "./components/MiniWhiteCard";
import AdditionalLinks from "./components/AdditionalLinks";

const logo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="112" height="18">
    <path
      fill="#2C2830"
      d="M0 .224h3.578v17.53H0V.223zm8.086 0h3.555l10.923 5.72V.224h3.556v17.53h-3.556V9.711L11.641 4.026v13.727H8.086V.224zm23.81 12.314c.635.36 1.28.683 1.934.97.654.288 1.333.531 2.035.73.703.198 1.442.349 2.215.454.774.104 1.599.157 2.473.157 1.054 0 1.952-.07 2.692-.208.74-.138 1.344-.329 1.811-.572.467-.243.808-.533 1.02-.869.214-.336.32-.703.32-1.1 0-.635-.265-1.137-.796-1.507-.53-.37-1.35-.556-2.456-.556-.486 0-.998.032-1.537.096l-.811.1-.82.107a97.03 97.03 0 01-1.626.208c-.535.063-1.038.095-1.509.095-.785 0-1.538-.1-2.26-.303a5.98 5.98 0 01-1.917-.908 4.5 4.5 0 01-1.33-1.514c-.328-.606-.493-1.312-.493-2.12 0-.478.066-.953.196-1.424.131-.471.34-.922.628-1.352.288-.43.66-.83 1.116-1.2a6.682 6.682 0 011.655-.958c.646-.27 1.394-.48 2.243-.634.848-.153 1.814-.23 2.899-.23.785 0 1.573.043 2.366.129.792.086 1.564.207 2.316.364.751.157 1.475.346 2.17.567.695.22 1.342.465 1.94.734l-1.559 2.871a16.689 16.689 0 00-1.592-.6 18.789 18.789 0 00-1.783-.476 20.428 20.428 0 00-1.924-.32 17.169 17.169 0 00-2.024-.118c-.98 0-1.785.071-2.417.213-.632.143-1.135.324-1.508.544-.374.221-.634.468-.78.74a1.714 1.714 0 00-.219.814c0 .523.236.951.707 1.284.471.333 1.189.499 2.153.499.39 0 .836-.028 1.34-.084l.777-.089.816-.096a72.218 72.218 0 011.705-.185c.58-.056 1.142-.084 1.688-.084 1.031 0 1.945.115 2.742.347.796.232 1.463.563 2.001.993.539.43.946.95 1.223 1.559.277.609.415 1.291.415 2.046 0 1.01-.234 1.909-.701 2.698-.467.788-1.133 1.454-1.996 1.996-.864.542-1.905.953-3.124 1.233-1.218.28-2.575.421-4.07.421-.988 0-1.952-.062-2.894-.185a21.57 21.57 0 01-2.709-.527 20.3 20.3 0 01-2.467-.819A17.998 17.998 0 0130 15.421l1.895-2.883zM53.382.224h3.555V9.88c0 .793.109 1.498.326 2.114.216.617.54 1.139.97 1.565.43.426.962.75 1.598.97.635.22 1.375.33 2.22.33.838 0 1.576-.11 2.215-.33.64-.22 1.174-.544 1.604-.97.43-.426.753-.948.97-1.565.217-.616.325-1.321.325-2.114V.224h3.555v10.083c0 1.15-.194 2.198-.583 3.14a6.668 6.668 0 01-1.693 2.422c-.74.673-1.647 1.193-2.72 1.559-1.073.366-2.297.55-3.673.55-1.375 0-2.6-.184-3.673-.55-1.072-.366-1.979-.886-2.72-1.559a6.668 6.668 0 01-1.693-2.422c-.388-.942-.583-1.99-.583-3.14V.224zm21.667 0h8.916c1.346 0 2.513.14 3.5.42.986.281 1.805.687 2.455 1.218a4.907 4.907 0 011.453 1.94c.318.762.476 1.626.476 2.59 0 .651-.078 1.27-.235 1.857a5.512 5.512 0 01-.723 1.62 5.526 5.526 0 01-1.228 1.318 6.677 6.677 0 01-1.739.959l3.813 5.607h-4.351l-3.297-4.98-5.484-.01v4.99H75.05V.224zm9.006 9.466c.673 0 1.262-.079 1.766-.236.505-.157.928-.377 1.268-.661.34-.285.594-.63.762-1.038a3.54 3.54 0 00.253-1.362c0-.98-.337-1.737-1.01-2.272-.673-.534-1.686-.801-3.039-.801h-5.45v6.37h5.45zm12-9.466h14.927v3.118H99.611v3.5h10.071v2.926h-10.07v4.879h11.607v3.106H96.056V.224z"
    />
  </svg>
);
const hamburgerLogo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <g fill="none" fill-rule="evenodd">
      <path
        fill="#FFF"
        stroke="#2C2830"
        stroke-width="1.5"
        d="M.75.75h30.5v30.5H.75z"
      />
      <g fill="#2C2830">
        <path d="M8 10h16v1.5H8zM8 15h16v1.5H8zM8 20h16v1.5H8z" />
      </g>
    </g>
  </svg>
);
const lightningIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M32 59h1.195l21.072-20.146c.276-.356.123-.534-.46-.534H45.11l9.158-10.786c.276-.356.061-.534-.612-.534h-11.67c-.337 0-.613.119-.888.356l-8.515 14.645c-.061.356.122.534.582.534h8.423L32 59z"
      />
    </g>
  </svg>
);
const priceIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M43 27c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16s-7.162-16-16-16zm4.363 22.178c-.787.883-1.924 1.402-3.41 1.558V53H42.06v-2.252c-2.479-.254-4.012-1.695-4.604-4.32l2.93-.764c.271 1.65 1.17 2.475 2.695 2.475.713 0 1.24-.176 1.576-.53a1.79 1.79 0 00.504-1.279c0-.518-.168-.91-.504-1.176-.336-.267-1.084-.605-2.242-1.015-1.04-.362-1.855-.717-2.441-1.073a4.032 4.032 0 01-1.428-1.48c-.365-.637-.549-1.379-.549-2.223 0-1.107.328-2.105.98-2.992.653-.885 1.68-1.426 3.083-1.623V33h1.894v1.748c2.117.254 3.488 1.451 4.111 3.594l-2.609 1.07c-.51-1.469-1.295-2.203-2.361-2.203-.535 0-.965.164-1.287.492a1.636 1.636 0 00-.487 1.194c0 .476.157.841.47 1.097.31.254.98.569 2.003.946 1.125.41 2.008.798 2.647 1.164a4.16 4.16 0 011.533 1.513c.38.645.572 1.397.572 2.258 0 1.322-.395 2.424-1.182 3.305z"
      />
    </g>
  </svg>
);
const peopleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
    <g fill="none" fill-rule="evenodd">
      <circle cx="43" cy="43" r="43" fill="#96A9C6" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M52.874 49.874l-5.095-2.547c-.48-.24-.779-.724-.779-1.261v-1.804c.122-.149.25-.32.383-.507.661-.933 1.19-1.972 1.576-3.093a2.116 2.116 0 001.241-1.929V36.6c0-.514-.192-1.011-.533-1.4v-2.837c.03-.293.147-2.04-1.116-3.48C47.455 27.633 45.678 27 43.267 27c-2.412 0-4.19.634-5.285 1.883-1.263 1.44-1.145 3.187-1.115 3.48V35.2a2.127 2.127 0 00-.534 1.4v2.133c0 .65.295 1.255.799 1.658.488 1.935 1.51 3.392 1.868 3.86v1.765c0 .516-.282.99-.734 1.237l-4.758 2.596A4.81 4.81 0 0031 54.073V55.8c0 2.531 8.024 3.2 12.267 3.2 4.242 0 12.266-.669 12.266-3.2v-1.623a4.786 4.786 0 00-2.659-4.303z"
      />
    </g>
  </svg>
);
const rightPatternMobile = (
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="330">
    <g fill="none" fill-rule="evenodd" stroke="#9E96C6">
      <path d="M185.248 17.983c-40.947-12.815-83.05-34.188-126.155 4.85C15.99 61.874-11.11 96.07 6.39 140.318c17.5 44.247 88.934 16.687 109.69 56.234 20.755 39.547-24.85 75.438-5.188 110.635 19.661 35.196 34.779 57.753 97.963 35.374 63.185-22.378 57.359-79.32 105.408-112.665 48.048-33.344 100.034-83.262 28.692-172.334-71.342-89.072-116.76-26.764-157.706-39.578z" />
      <path d="M190.037 40.695c-33.343-10.405-67.629-27.759-102.73 3.94-35.101 31.697-57.17 59.464-42.918 95.392 14.25 35.927 72.42 13.55 89.322 45.66s-20.235 61.253-4.224 89.831c16.01 28.578 28.321 46.894 79.774 28.723 51.452-18.17 46.708-64.405 85.835-91.48 39.128-27.074 81.46-67.606 23.365-139.93-58.096-72.323-95.08-21.73-128.424-32.136z" />
      <path d="M200.203 54.055c-26.936-8.47-54.632-22.596-82.988 3.207-28.355 25.803-46.182 48.407-34.67 77.653 11.512 29.246 58.503 11.03 72.157 37.169 13.653 26.139-16.347 49.862-3.413 73.126 12.934 23.263 22.878 38.173 64.443 23.381 41.564-14.791 37.732-52.428 69.34-74.468 31.607-22.04 65.804-55.034 18.874-113.907-46.93-58.874-76.807-17.69-103.743-26.16z" />
      <path d="M210.233 71.814c-21.831-6.827-44.279-18.214-67.26 2.585-22.982 20.798-37.43 39.017-28.1 62.59 9.33 23.574 47.416 8.89 58.482 29.96 11.066 21.069-13.248 40.19-2.766 58.942 10.482 18.751 18.543 30.769 52.23 18.846 33.687-11.922 30.581-42.259 56.198-60.024 25.618-17.764 53.334-44.359 15.298-91.813-38.037-47.454-62.251-14.259-84.082-21.086z" />
    </g>
  </svg>
);
const facebookIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path
      className=" hover:fill-primary-700"
      fill="#837D88"
      d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
    />
  </svg>
);
const twitterIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
    <path
      className=" hover:fill-primary-700"
      fill="#837D88"
      d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
    />
  </svg>
);
const pinterestIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path
      className=" hover:fill-primary-700"
      fill="#837D88"
      d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
    />
  </svg>
);
const instagramIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path
      className=" hover:fill-primary-700"
      fill="#837D88"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    />
  </svg>
);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <nav className="flex p-4 justify-between items-center md:px-20 lg:px-40">
        <div>{logo}</div>
        <div className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li className="cursor-pointer hover:font-semibold">How We Work</li>
            <li className="cursor-pointer hover:font-semibold">Blog</li>
            <li className="cursor-pointer hover:font-semibold">Account</li>
            <li>
              <button className="border border-solid border-primary-700 py-1 px-4 hover:text-white hover:bg-primary-700">
                View Plans
              </button>
            </li>
          </ul>
        </div>
        <div className="md:hidden">{hamburgerLogo}</div>
      </nav>
      <div className="md:flex md:flex-row-reverse md:items-center md:justify-between md:gap-16 md:bg-primary-700 text-white md:mb-40 md:px-20 lg:px-40">
        <div className="md:w-1/2 md:-mb-24 md:pt-16 ">
          <img src={isMobile ? mobileImage : desktopImage} alt="" />
        </div>
        <DarkCard />
      </div>
      <div className="md:px-20 lg:px-40">
        <div>
          <h2 className=" mt-24 mb-16 font-dm-serif text-4xl px-4 text-center md:text-left">
            We’re different
          </h2>
          <div className="md:flex md:gap-8">
            <MiniWhiteCard
              icon={lightningIcon}
              heading={"Snappy Process"}
              p={
                "Our application process can be completed in minutes, not hours. Don’tget stuck filling in tedious forms."
              }
            />
            <MiniWhiteCard
              icon={priceIcon}
              heading={"Affordable Prices"}
              p={
                "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
              }
            />
            <MiniWhiteCard
              icon={peopleIcon}
              heading={"People First"}
              p={
                "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
              }
            />
          </div>
        </div>
        <div className="bg-primary-700 text-base-110 py-10 text-center m-4 mt-28 mb-40 md:mx-0 md:flex justify-between md:px-12 md:items-center">
          <h2 className=" font-dm-serif text-4xl px-3 pb-8 md:w-1/2 md:p-0 md:text-left">
            Find out more about how we work
          </h2>
          <button className=" py-2 px-8 mb-8 border border-solid border-white md:py-1 md:px-4 md:m-0 md:h-1/2 md:hover:bg-white md:hover:text-primary-700">
            How we work
          </button>
        </div>

        <div>
          <div className="  md:flex md:justify-between md:border-b md:border-solid md:border-slate-300 ">
            <div className=" flex justify-center pb-8">{logo}</div>
            <div className=" mx-4 pb-8 flex justify-center gap-4  border-b border-solid border-slate-300 mb-4 md:border-none">
              {facebookIcon}
              {twitterIcon}
              {pinterestIcon}
              {instagramIcon}
            </div>
          </div>
          <div className=" pt-10 mb-20 md:flex md:justify-between lg:pr-44">
            <AdditionalLinks
              header={"Our company"}
              links={["How We Work", "Why Insure?", "Check Price", "Reviews"]}
            />
            <AdditionalLinks
              header={"Help Me"}
              links={["FAQ", "Terms of Use", "Privacy Policy", "Cookies"]}
            />
            <AdditionalLinks
              header={"Contact"}
              links={["Sales", "Support", "Live Chat"]}
            />
            <AdditionalLinks
              header={"Others"}
              links={["Careers", "Press", "Licenses"]}
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;