import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


export default function con() { 
    return(
        <>
            <div className="p-6 bg-gray-100 rounded-lg grid lg:grid-cols-4 text-center grid-cols-1">
                <h1 className="text-4xl sm:text-5xl mb-3 text-gray-800 dark:text-white font-extrabold tracking-tight">
                    Get in touch
                </h1>


                <div className="flex items-center text-gray-600 mx-auto dark:text-gray-400">
                    <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faLocationDot} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                       India, Karnataka
                    </div>
                </div>

                <div className="flex items-center mx-auto text-gray-600 dark:text-gray-400">
                    <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faDiscord} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        Meheer#2192
                    </div>
                </div>

                <div className="flex items-center mx-auto text-gray-600 dark:text-gray-400">
                    <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faEnvelopeCircleCheck} />
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        meherr17.j@gmail.com
                    </div>
                </div>
            </div>
        </>
    )
}