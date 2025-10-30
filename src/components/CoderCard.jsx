'use client';

import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';



export default function CoderCard() {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="mt-10">
      <div className="w-full max-w-3xl">
        <div className="bg-[#2d2d2d] rounded-t-xl px-4 py-3 flex items-center gap-2 border-b border-[#3d3d3d]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          <span className="ml-3 text-xs text-gray-500 font-medium">dev.jsx</span>
        </div>

        <div className="bg-[#1e1e1e] p-6 px-10 rounded-b-xl font-mono text-sm leading-relaxed">
          <div className="text-gray-300">
            <Typewriter
              options={{
                delay: 25,
                cursor: '▋',
                autoStart: true,
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(400)
                  .typeString(
                    `<span class="text-purple-400 ml-[-16px]">const</span> <span class="text-blue-400">developer</span> <span class="text-gray-400">=</span> <span class="text-yellow-300">{</span><br>` +
                    `  <span class="text-cyan-400">name</span>: <span class="text-green-400">'Arslan Muhammad'</span>,<br>` +
                    `  <span class="text-cyan-400">role</span>: <span class="text-green-400">'Full-Stack Developer'</span>,<br>` +
                    `  <span class="text-cyan-400">skills</span>: [<span class="text-green-400">'ReactJS'</span>, <span class="text-green-400">'NextJS'</span>, <span class="text-green-400">'Laravel'</span>, <span class="text-green-400">'PHP'</span>,<br>` +
                    `    <span class="text-green-400">'Tailwind'</span>, <span class="text-green-400">'MySql'</span>, <span class="text-green-400">'MongoDB'</span>, <span class="text-green-400">'Docker'</span>, <span class="text-green-400">'Wordpress'</span>],<br>` +
                    `  <span class="text-cyan-400">hardWorker</span>: <span class="text-orange-400">true</span>,<br>` +
                    `  <span class="text-cyan-400">quickLearner</span>: <span class="text-orange-400">true</span>,<br>` +
                    `  <span class="text-cyan-400">problemSolver</span>: <span class="text-orange-400">true</span>,<br>` +
                    `  <span class="text-cyan-400">hireable</span>: <span class="text-purple-400">function</span>() {<br>` +
                    `    <span class="text-purple-400 ml-6">return</span> <span class="text-blue-400">( </span><br>` +
                    `      <span class="text-yellow-300 ml-10">this</span>.<span class="text-red-400">hardWorker</span> <span class="text-gray-400">&amp;&amp;</span><br>` +
                    `      <span class="text-yellow-300 ml-10">this</span>.<span class="text-red-400">problemSolver</span> <span class="text-gray-400">&amp;&amp;</span><br>` +
                    `      <span class="text-yellow-300 ml-10">this</span>.<span class="text-red-400">skills</span>.<span class="text-purple-300">length</span> <span class="text-gray-400">=</span> 
                    <span class="text-orange-400">10+</span><br>` +
                    `   <span class="ml-6 text-blue-400">)</span>; <br>` +
                    `  	<span class="ml-3">};</span> <br>` +
                    `	<span class="text-yellow-300">}</span>;`
                  )
                  .callFunction(() => {
                    setTimeout(() => setShowResult(true), 900);
                  })
                  .start();
              }}
            />
          </div>

          {showResult && (
            <div className="mt-5 animate-pulse">
              <span className="text-green-400 font-medium">
                developer.hireable() {'=>'} {'true'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}