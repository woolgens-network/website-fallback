import Head from "next/head";
import AnimatedFade from "./animations/AnimatedFade";
import Image from "next/image";
import logo from "../public/logo.png";
import Countdown from 'react-countdown';

const DATE = "Saturday, 20 February 2022 22:00:00 GMT";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <h1 className="text-5xl font-bold text-gray-200">Check out our Trailer!</h1>;
    } else {
        return (
            <h1 className="text-5xl font-bold text-gray-200">
                <span className="font-bold text-red-500">{days}</span> Days <
                span className="font-bold text-red-500">{hours}</span> Hours <
                span className="font-bold text-red-500">{minutes}</span> Minutes <
                span className="font-bold text-red-500">{seconds}</span> Seconds
            </h1>
        )
    }
};

const CountDown = () => {
    return (
        <div className="relative w-full h-screen bg-black">
            <Head>
                <title>Coming Soon &bull; WoolGens</title>
            </Head>
            <AnimatedFade>
                <div
                    className="absolute z-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: 'url(/backgrounds/mine_inside2.jpeg)',
                        boxShadow: "inset 0 0 1500px black",
                        filter: "blur(5px)"
                    }}
                />
            </AnimatedFade>
            <div className="flex absolute z-10 flex-col gap-4 justify-center items-center w-full h-full">
                <Image className="animate-grow" src={logo} height={250} width={250} alt="Logo" />
                <div className="text-center">
                    <Countdown date={new Date(DATE)} daysInHours={false} renderer={renderer} />
                    <h2 className="mt-2 text-3xl text-gray-400">
                        {new Date(DATE).toLocaleTimeString("en", {
                            weekday: "long", year: "numeric", month: "short",
                            day: "numeric", hour: "2-digit", minute: "2-digit"
                        })}
                    </h2>
                    <div className="h-32" />
                </div>
            </div>
        </div>
    )
}

export default CountDown
