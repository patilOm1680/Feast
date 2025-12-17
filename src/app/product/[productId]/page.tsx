"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { productId } = useParams();
  return (
    <>
      <div className="pt-22">
        {/* <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-primary dark:bg-primary/20 text-xs font-bold uppercase tracking-wider">
                  Dinner
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
                  Spicy
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                  High Protein
                </span>
              </div>
              <h1 className="text-text-main dark:text-white text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-4">
                Spicy Basil Chicken Stir-Fry
              </h1>
              <p className="text-text-muted dark:text-gray-400 text-lg font-normal leading-relaxed mb-6">
                A fresh and aromatic Thai-inspired dish perfect for weeknight
                dinners. Ready in under 30 minutes and packed with vibrant
                flavors.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8 border-y border-[#e7f3e7] dark:border-white/10 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                    data-alt="Chef Maria profile picture"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0kWM4UJ1HCPd76DGZanbm_Kweo1FWTT6ilHOtLUR7RT7OqivBNtSnMt__G_nHYwuG0yaslpbBU3RYLyCh81Am2sBBxV7B71lXWwBws-oqZMRazQf45NkfmxkIIqRJfVejYxtXdz82twNiLyjTvJ5nkQcLEWwMIQorXCw3lh5IMudT_8ROTQXmRoQrGWPU3MZye962Bd9ebxn7p3juj0rC_Iu2shR72Fy2wb0T3TbHtEl42e5cTBZXu73G69CFwy5UI5gUC3D6ftVn')",
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <p className="text-text-main dark:text-white text-sm font-bold">
                      Chef Maria
                    </p>
                    <p className="text-text-muted dark:text-gray-500 text-xs">
                      Posted 2 days ago
                    </p>
                  </div>
                </div>
                <div className="h-8 w-px bg-[#e7f3e7] dark:bg-white/10 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    <span className="material-symbols-outlined text-[20px] fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-[20px] fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-[20px] fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-[20px] fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-[20px] fill-current">
                      star_half
                    </span>
                  </div>
                  <span className="text-text-main dark:text-white font-bold text-sm">
                    4.8
                  </span>
                  <span className="text-text-muted dark:text-gray-500 text-sm underline cursor-pointer">
                    (124 Reviews)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-primary hover:bg-green-500 text-black px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined">play_circle</span>
                  Start Cooking Mode
                </button>
                <button className="flex items-center gap-2 bg-white dark:bg-surface-dark border border-[#e7f3e7] dark:border-white/10 text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    bookmark
                  </span>
                  Save
                </button>
                <button className="flex items-center gap-2 bg-white dark:bg-surface-dark border border-[#e7f3e7] dark:border-white/10 text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    share
                  </span>
                </button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 group">
              <div
                className="w-full h-[300px] lg:h-[500px] bg-center bg-no-repeat bg-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.01]"
                data-alt="Top down view of spicy basil chicken stir fry in a dark bowl"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBmqTu4hk6T9KRMo4L-6rVe68aWAJm6mPAoI4YVS8pX5hHBx9QZ-oLCAOcenH-v81E-8R9DTAwbbfGCQ8ME1cWJWbfCAo5o6Jaydc_XDpkL6-ZBm0OC95-FXaZYdJ09LK2sHYSkgx2Qd1-yMbuXqe2kain0Lp1n1Gm-7pIyzeC0R267kW03NeRbGXTJNS2Bw54Urrn2L10Oj67M8uxAvMpjdRdZ-EJlbRYC7jzyhm2ao4j-23iQdxOtrTqSyeWbSnnUh84BJsvnz7R')",
                }}
              >
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur text-text-main dark:text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-red-500">
                    local_fire_department
                  </span>
                  <span className="font-bold">320 kcal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-[#e7f3e7] dark:border-white/5 flex flex-col items-center justify-center text-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">
                schedule
              </span>
              <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase">
                Prep Time
              </p>
              <p className="text-text-main dark:text-white font-bold">
                15 Mins
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-[#e7f3e7] dark:border-white/5 flex flex-col items-center justify-center text-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">
                skillet
              </span>
              <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase">
                Cook Time
              </p>
              <p className="text-text-main dark:text-white font-bold">
                10 Mins
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-[#e7f3e7] dark:border-white/5 flex flex-col items-center justify-center text-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">
                group
              </span>
              <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase">
                Servings
              </p>
              <p className="text-text-main dark:text-white font-bold">
                4 People
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-[#e7f3e7] dark:border-white/5 flex flex-col items-center justify-center text-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">
                restaurant_menu
              </span>
              <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase">
                Difficulty
              </p>
              <p className="text-text-main dark:text-white font-bold">
                Beginner
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-[#e7f3e7] dark:border-white/5 flex flex-col items-center justify-center text-center gap-1 shadow-sm col-span-2 md:col-span-4 lg:col-span-1">
              <span className="material-symbols-outlined text-primary text-3xl">
                public
              </span>
              <p className="text-text-muted dark:text-gray-400 text-xs font-bold uppercase">
                Cuisine
              </p>
              <p className="text-text-main dark:text-white font-bold">
                Thai Fusion
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 relative">
              <div className="lg:sticky lg:top-24 bg-white dark:bg-surface-dark rounded-2xl p-6 border border-[#e7f3e7] dark:border-white/5 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-text-main dark:text-white">
                    Ingredients
                  </h3>
                  <div className="flex items-center bg-background-light dark:bg-background-dark rounded-lg p-1">
                    <button className="size-6 flex items-center justify-center text-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white font-bold">
                      -
                    </button>
                    <span className="px-2 text-sm font-bold text-text-main dark:text-white">
                      4
                    </span>
                    <button className="size-6 flex items-center justify-center text-primary font-bold">
                      +
                    </button>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="group">
                    <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <input
                        className="peer size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 mt-0.5"
                        type="checkbox"
                      />
                      <span className="text-text-main dark:text-gray-200 text-base leading-snug group-hover:text-primary transition-colors peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-600">
                        <span className="font-bold">500g</span> Chicken Breast,
                        sliced
                      </span>
                    </label>
                  </li>
                  <li className="group">
                    <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <input
                        className="peer size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 mt-0.5"
                        type="checkbox"
                      />
                      <span className="text-text-main dark:text-gray-200 text-base leading-snug group-hover:text-primary transition-colors peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-600">
                        <span className="font-bold">2 cups</span> Holy Basil
                        leaves
                      </span>
                    </label>
                  </li>
                  <li className="group">
                    <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <input
                        className="peer size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 mt-0.5"
                        type="checkbox"
                      />
                      <span className="text-text-main dark:text-gray-200 text-base leading-snug group-hover:text-primary transition-colors peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-600">
                        <span className="font-bold">4 cloves</span> Garlic,
                        minced
                      </span>
                    </label>
                  </li>
                  <li className="group">
                    <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <input
                        className="peer size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 mt-0.5"
                        type="checkbox"
                      />
                      <span className="text-text-main dark:text-gray-200 text-base leading-snug group-hover:text-primary transition-colors peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-600">
                        <span className="font-bold">3</span> Thai Chilies,
                        sliced
                      </span>
                    </label>
                  </li>
                  <li className="group">
                    <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <input
                        className="peer size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 mt-0.5"
                        type="checkbox"
                      />
                      <span className="text-text-main dark:text-gray-200 text-base leading-snug group-hover:text-primary transition-colors peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-600">
                        <span className="font-bold">2 tbsp</span> Oyster Sauce
                      </span>
                    </label>
                  </li>
                  <li className="group">
                    <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <input
                        className="peer size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 mt-0.5"
                        type="checkbox"
                      />
                      <span className="text-text-main dark:text-gray-200 text-base leading-snug group-hover:text-primary transition-colors peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-600">
                        <span className="font-bold">1 tbsp</span> Soy Sauce
                      </span>
                    </label>
                  </li>
                  <li className="group">
                    <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <input
                        className="peer size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 mt-0.5"
                        type="checkbox"
                      />
                      <span className="text-text-main dark:text-gray-200 text-base leading-snug group-hover:text-primary transition-colors peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-600">
                        <span className="font-bold">1 tsp</span> Sugar
                      </span>
                    </label>
                  </li>
                  <li className="group">
                    <label className="flex items-start gap-3 cursor-pointer p-2 rounded-lg hover:bg-background-light dark:hover:bg-white/5 transition-colors">
                      <input
                        className="peer size-5 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 mt-0.5"
                        type="checkbox"
                      />
                      <span className="text-text-main dark:text-gray-200 text-base leading-snug group-hover:text-primary transition-colors peer-checked:line-through peer-checked:text-gray-400 dark:peer-checked:text-gray-600">
                        <span className="font-bold">1 tbsp</span> Oil for frying
                      </span>
                    </label>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-[#e7f3e7] dark:border-white/10">
                  <button className="w-full py-2.5 rounded-xl border border-primary text-primary hover:bg-primary hover:text-black font-bold text-sm transition-all">
                    Add all to Shopping List
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h3 className="text-2xl font-bold text-text-main dark:text-white mb-8">
                Instructions
              </h3>
              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-[#e7f3e7] dark:bg-white/10 hidden md:block"></div>

                <div className="flex flex-col md:flex-row gap-6 relative group">
                  <div className="hidden md:flex flex-none items-center justify-center size-10 rounded-full bg-primary text-black font-bold z-10 shadow-[0_0_0_4px_#f6f8f6] dark:shadow-[0_0_0_4px_#102210]">
                    1
                  </div>
                  <div className="flex-1 bg-white dark:bg-surface-dark p-6 rounded-2xl border border-[#e7f3e7] dark:border-white/5 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex md:hidden mb-3 items-center gap-3">
                      <div className="flex items-center justify-center size-8 rounded-full bg-primary text-black font-bold text-sm">
                        1
                      </div>
                      <span className="font-bold text-text-main dark:text-white">
                        Prepare the Ingredients
                      </span>
                    </div>
                    <h4 className="hidden md:block text-lg font-bold text-text-main dark:text-white mb-2">
                      Prepare the Ingredients
                    </h4>
                    <p className="text-text-main dark:text-gray-300 leading-relaxed">
                      Slice the chicken breast into thin, bite-sized pieces.
                      Finely mince the garlic and slice the Thai chilies. If you
                      prefer less heat, remove the seeds from the chilies. Pick
                      the basil leaves from the stems and set aside.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 relative group">
                  <div className="hidden md:flex flex-none items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary font-bold z-10 shadow-[0_0_0_4px_#f6f8f6] dark:shadow-[0_0_0_4px_#102210]">
                    2
                  </div>
                  <div className="flex-1 bg-white dark:bg-surface-dark p-6 rounded-2xl border border-[#e7f3e7] dark:border-white/5 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex md:hidden mb-3 items-center gap-3">
                      <div className="flex items-center justify-center size-8 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary font-bold text-sm">
                        2
                      </div>
                      <span className="font-bold text-text-main dark:text-white">
                        Make the Sauce
                      </span>
                    </div>
                    <h4 className="hidden md:block text-lg font-bold text-text-main dark:text-white mb-2">
                      Make the Sauce
                    </h4>
                    <p className="text-text-main dark:text-gray-300 leading-relaxed">
                      In a small bowl, mix together the oyster sauce, soy sauce,
                      and sugar. Stir until the sugar has largely dissolved.
                      This ensures the flavors are evenly distributed when you
                      add them to the wok.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 relative group">
                  <div className="hidden md:flex flex-none items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary font-bold z-10 shadow-[0_0_0_4px_#f6f8f6] dark:shadow-[0_0_0_4px_#102210]">
                    3
                  </div>
                  <div className="flex-1 bg-white dark:bg-surface-dark p-6 rounded-2xl border border-[#e7f3e7] dark:border-white/5 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex md:hidden mb-3 items-center gap-3">
                      <div className="flex items-center justify-center size-8 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary font-bold text-sm">
                        3
                      </div>
                      <span className="font-bold text-text-main dark:text-white">
                        Stir-Fry Aromatics
                      </span>
                    </div>
                    <h4 className="hidden md:block text-lg font-bold text-text-main dark:text-white mb-2">
                      Stir-Fry Aromatics
                    </h4>
                    <p className="text-text-main dark:text-gray-300 leading-relaxed">
                      Heat the oil in a wok or large skillet over high heat. Add
                      the minced garlic and sliced chilies. Stir-fry for about
                      15-30 seconds until fragrant, being careful not to burn
                      the garlic.
                    </p>
                    <div className="mt-4 rounded-xl overflow-hidden h-48 w-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className="w-full h-full bg-center bg-no-repeat bg-cover"
                        data-alt="Wok with garlic and chilies frying in oil"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADnqnYK2zIAm7VIJvsbhLODn9XVojqC-D-yzgRegr7r0u_ZCEnlwxmgbYBBXr6s1LEmRz5aDIu4nNMY6BK3Qf_a_J_wNKLhhBjAZaoxE8IG4bUQGLjOh-ROlR7YyCrbf9IRI1_PmpX28Nas3XBfb4v-orZ1yOCkgSKnZH27s3-AbCERIOI87y1zSpcqxx4Qd3sY5YVMC9hU5PVdfeomAYNf6jgNCERhOEP4KAfSBap1A7aHZPQm-24iSVuQnd6eQn8BiGASVSt1pPZ')",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 relative group">
                  <div className="hidden md:flex flex-none items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary font-bold z-10 shadow-[0_0_0_4px_#f6f8f6] dark:shadow-[0_0_0_4px_#102210]">
                    4
                  </div>
                  <div className="flex-1 bg-white dark:bg-surface-dark p-6 rounded-2xl border border-[#e7f3e7] dark:border-white/5 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex md:hidden mb-3 items-center gap-3">
                      <div className="flex items-center justify-center size-8 rounded-full bg-white dark:bg-surface-dark border-2 border-primary text-primary font-bold text-sm">
                        4
                      </div>
                      <span className="font-bold text-text-main dark:text-white">
                        Cook Chicken &amp; Finish
                      </span>
                    </div>
                    <h4 className="hidden md:block text-lg font-bold text-text-main dark:text-white mb-2">
                      Cook Chicken &amp; Finish
                    </h4>
                    <p className="text-text-main dark:text-gray-300 leading-relaxed">
                      Add the chicken to the wok. Stir-fry until cooked through
                      (about 3-4 minutes). Add the sauce mixture and toss to
                      coat everything evenly. Finally, turn off the heat and
                      immediately fold in the basil leaves until wilted. Serve
                      hot over jasmine rice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#e7f3e7] dark:border-white/10">
                <h4 className="text-sm font-bold text-text-muted dark:text-gray-400 uppercase tracking-wider mb-4">
                  Related Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-[#e7f3e7] dark:border-white/10 text-text-main dark:text-white text-sm font-medium hover:bg-primary/10 hover:border-primary dark:hover:border-primary transition-colors"
                    href="#"
                  >
                    #ThaiFood
                  </a>
                  <a
                    className="px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-[#e7f3e7] dark:border-white/10 text-text-main dark:text-white text-sm font-medium hover:bg-primary/10 hover:border-primary dark:hover:border-primary transition-colors"
                    href="#"
                  >
                    #StirFry
                  </a>
                  <a
                    className="px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-[#e7f3e7] dark:border-white/10 text-text-main dark:text-white text-sm font-medium hover:bg-primary/10 hover:border-primary dark:hover:border-primary transition-colors"
                    href="#"
                  >
                    #QuickDinner
                  </a>
                  <a
                    className="px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-[#e7f3e7] dark:border-white/10 text-text-main dark:text-white text-sm font-medium hover:bg-primary/10 hover:border-primary dark:hover:border-primary transition-colors"
                    href="#"
                  >
                    #ChickenRecipes
                  </a>
                  <a
                    className="px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-[#e7f3e7] dark:border-white/10 text-text-main dark:text-white text-sm font-medium hover:bg-primary/10 hover:border-primary dark:hover:border-primary transition-colors"
                    href="#"
                  >
                    #Spicy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main> */}

        <p>Product id is {productId}</p>
      </div>
    </>
  );
};

export default page;
