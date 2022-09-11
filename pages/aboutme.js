import Head from "next/head"
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {
    return (
        <>  
            <Head>
                <title>About Me</title>
            </Head>
            <section className="py-24" style={{backgroundImage:"linear-gradient(90deg, rgba(24,24,35,1) 38%, rgba(0,0,0,1) 38%)"}}>
                <div className="mx-auto max-w-xl h-screen helo"  ></div>
            </section>
            <div className="mx-auto p-4 max-w-3xl mt-5 text-slate-400 pb-10">
                <h1 className="text-3xl text-slate-300">How it all happened.</h1>
                <ul className="p-2 pt-5 text-justify text-lg">
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} />On a very usual day, while scrolling down my Instagram feed, something interesting that I came across caught my eye. My eyes were filled with curiosity. This was the beginning of something new. It was Web Developing! As a curious person, I started researching the subject and found out how interesting it is.</li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> My love for the subject continued to grow. During the course of my journey, I was posed with several questions- “How do I start Web Developing?”, “Where do I start?” and more importantly, "Can I do it? These questions continued to bog me down". </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> As a blessing in disguise, I came across <a href="https://freecodecamp.org" target={"_blank"}  className="underline decoration-sky-500 decoration-2 font-bold">FreeCodeCamp.org</a>. This was the beginning of another chapter, an interesting one. I set off at once, on this exciting journey to learn something new. The sharpest arrow in my quiver, which to an extent eased my journey, was self-learning. I eventually found answers to the questions which earlier bogged me down. And then, I thought to myself, “Where there is a will, there is a way.” </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> I was finally successful in finding the two sparks in my journey! But what about the “Can I do it?” and the “Would I be able to bring myself to great heights?”... well, it was a really difficult journey to find answers to these. </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> I slowly started learning the basics of HTML, CSS and JS and continued on my path with no regrets. I only knew that if it fails I had acquired a really small skill which had to be blown up to a SKILL. </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> In the 10th grade, I started learning JS and React from scratch as I found it fun and amazing. I continued this journey aiming primarily for some fun, and yes! It was indeed fun.  </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> As time progressed, I understood that pursuing Web Developing was something which really interested me. In pursuit of this, I learned backend and API development. This was where my hunt for real challenging and fun tasks and my interest in backend grew exorbitantly. </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> Eventually, as I completed many tasks to earn certificates, I found the answer to “Can I do it?”. </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> And all this brought me to where I am right now, And I'm really glad I'm here!!. Well, there's one unanswered question which I believe will be answered soon. </span></li>
                </ul>

                <h1 className="text-3xl text-slate-300 mt-10">Why I am obsessed with coding?</h1>
                <ul className="p-2 pt-5 text-justify text-lg">
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> I love to do things which could make me think and break my head about it, and programming was indeed one of them. </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> When I started creating APIs, this was one thing I understood and learned about myself. It was that I love to think and break my head about anything I wanna do, and my determination to complete it no matter what it takes from me!! </li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> Every project taught me something new. There wasn't a single project I created that hasn't taught me something new.</li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> Programming is so vast that I feel no one could conquer that easily. Well, this is my opportunity to learn a lot more than I could!!</li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> And when I give my best, it always comes with the price of learning something new. All this day, I've done my best, and there is more to go.</li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> Programming is my way and I've gotta conquer it all, and for this, I need to learn more which is why I am obsessed with programming as there is no end to this journey!!</li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> For the projects I take up or work on, I focus on the impact created by it and the extent to which it makes. And this is something I always loved to do!!</span></li>
                </ul>

                <h1 className="text-3xl text-slate-300 mt-10">How I wind down.</h1>
                <ul className="p-2 pt-5 text-justify text-lg">
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> I love watching anime, My all-time favourite would be One Piece and Naruto.</li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> I also enjoy a healthy routine and play outdoor games such as basketball and badminton.</li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /> My other interest includes hanging out with friends on a nice evening.</li>
                    <li><FontAwesomeIcon className='mt-3 mr-4 text-2xl bg-black text-orange-400' icon={faAnglesRight} /><span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Travelling is another one of my interests. I love to travel to new places and experience a wide array of things and look beyond the horizon.</span></li>
                </ul>

            </div>
        </>
    )
}