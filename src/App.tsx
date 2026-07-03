/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col overflow-hidden font-sans">
      {/* Navigation Bar */}
      <nav className="h-20 flex items-center justify-between px-12 bg-white border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-5 h-5 border-2 border-white rounded-md"></div>
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">
            Insta<span className="text-pink-600">Grow</span>
          </span>
        </div>
        <div className="flex gap-8 items-center hidden md:flex">
          <a href="#" className="text-sm font-semibold text-slate-600">Services</a>
          <a href="#" className="text-sm font-semibold text-slate-600">Case Studies</a>
          <a href="#" className="text-sm font-semibold text-slate-600">Pricing</a>
          <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 cursor-pointer">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex-grow flex flex-col md:flex-row items-center px-12 py-16 bg-gradient-to-br from-indigo-50 to-white gap-12">
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
            🔥 Leading Growth Platform 2024
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] text-slate-900">
            Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Digital Potential</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-md">
            The smartest way to scale your Instagram presence. Get real engagement, high-quality followers, and viral-ready strategy in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl shadow-pink-200 cursor-pointer">Get Started Free</button>
            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-800 font-bold rounded-2xl shadow-sm hover:bg-slate-50 cursor-pointer">View Plans</button>
          </div>
        </div>
        
        {/* Decorative Element / Mockup */}
        <div className="w-full md:w-1/2 relative flex justify-center mt-12 md:mt-0">
          <div className="w-64 h-[480px] bg-white rounded-[40px] border-[8px] border-slate-900 shadow-2xl relative overflow-hidden flex-shrink-0">
            <div className="h-12 bg-slate-50 border-b flex items-center px-4">
              <div className="w-3 h-3 bg-red-400 rounded-full mr-1"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full border-2 border-white shadow-sm"></div>
                <div className="space-y-1">
                  <div className="h-3 w-20 bg-slate-200 rounded"></div>
                  <div className="h-2 w-12 bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="w-full aspect-square bg-slate-100 rounded-xl flex items-center justify-center">
                 <span className="text-4xl text-slate-200">📸</span>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-slate-100 rounded"></div>
                <div className="h-3 w-4/5 bg-slate-100 rounded"></div>
              </div>
              <div className="flex gap-2 pt-2">
                <div className="px-3 py-1 bg-pink-100 text-pink-600 text-[10px] font-bold rounded-full">+12.4k Likes</div>
                <div className="px-3 py-1 bg-purple-100 text-purple-600 text-[10px] font-bold rounded-full">+3.2k Shares</div>
              </div>
            </div>
          </div>
          {/* Floating Badges */}
          <div className="absolute top-10 md:top-20 -right-4 md:right-10 p-4 bg-white rounded-2xl shadow-xl border border-slate-50 hidden sm:block">
            <p className="text-xs font-bold text-slate-400">TOTAL REACH</p>
            <p className="text-2xl font-black text-slate-800">1.2M+</p>
          </div>
          <div className="absolute bottom-10 md:bottom-20 -left-4 md:left-10 p-4 bg-white rounded-2xl shadow-xl border border-slate-50 hidden sm:block">
            <p className="text-xs font-bold text-slate-400">NEW FOLLOWERS</p>
            <p className="text-2xl font-black text-green-500">+48,230</p>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="bg-white p-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100">
        <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">👥</div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">Follower Boost</h3>
          <p className="text-sm text-slate-600">Real, active accounts from your target demographic to increase authority.</p>
        </div>
        <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100">
          <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">⚡</div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">Rapid Engagement</h3>
          <p className="text-sm text-slate-600">AI-powered systems to boost likes and comments within minutes of posting.</p>
        </div>
        <div className="p-6 rounded-3xl bg-amber-50 border border-amber-100">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">📈</div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">Viral Strategy</h3>
          <p className="text-sm text-slate-600">Weekly analytics audit and content suggestions tailored for Instagram's algorithm.</p>
        </div>
      </div>

      {/* Trusted By / Footer */}
      <footer className="py-6 bg-slate-900 flex flex-col sm:flex-row items-center justify-between px-12 gap-4">
        <p className="text-[10px] font-medium text-slate-400">© 2024 INSTAGROW MEDIA. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-6">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Trusted by 5,000+ Brands</span>
          <div className="flex gap-4 opacity-40">
             <div className="w-4 h-4 bg-white rounded-full"></div>
             <div className="w-4 h-4 bg-white rounded-full"></div>
             <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
