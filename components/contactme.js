import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';



export default function con() { 
    return(
        <> 
            <div className="p-6 bg-amber-50">
                <h1 className="text-4xl sm:text-5xl text-center mb-3 text-gray-800 dark:text-white font-extrabold tracking-tight">
                    Get in touch
                </h1>
            </div>
            <div className="p-6 bg-amber-50 gap-4 grid lg:grid-cols-4 text-center grid-cols-1">
                
                <div className="flex items-center text-gray-600 mx-auto dark:text-gray-400">
                    <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faLocationDot} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                       India, Karnataka
                    </div>
                </div>

                <div className="flex items-center mx-auto text-gray-600 dark:text-gray-400">
                    <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faDiscord} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        <a href="https://discord.gg/H5MfyFadHv" target={"_blank"}>Meheer#2192</a>
                    </div>
                </div>

                <div className="flex items-center mx-auto text-gray-600 dark:text-gray-400">
                    <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faGithub} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        <a href="https://github.com/Meheer17" target="_blank">Meheer17</a>
                    </div>
                </div>

                <div className="flex items-center mx-auto text-gray-600 dark:text-gray-400">
                    <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faEnvelopeCircleCheck} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=meherr17.j@gmail.com" >meherr17.j@gmail.com</a>
                    </div>
                </div>
            </div>
        </>
    )
}