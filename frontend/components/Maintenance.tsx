import Image from "next/image"
import logo from "../public/logo.png"
import {BaseButton} from "./common/BaseButton";
import AnimatedFade from "./animations/AnimatedFade";
import Head from "next/head"

const Maintenance = () => {
    return (
        <div className="relative w-full h-screen bg-black">
            <Head>
                <title>Maintenance &bull; WoolGens</title>
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
                    <h1 className="text-4xl font-bold text-gray-200">
                        We are currently under <span className="text-red-500">maintenance!</span>
                    </h1>
                    <h2 className="text-2xl text-gray-400">
                        You can check our <a href="https://status.woolgens.net/" target="_blank" className="text-red-500 underline" rel="noreferrer">Status Page</a> for more information.
                    </h2>
                    <div className="flex gap-4 justify-center items-center my-5">
                        <a href="https://discord.com/invite/u9SFawBT" target="_blank" rel="noreferrer">
                            <BaseButton type="primary">
                                <span className="text-xl font-bold">
                                    Discord
                                </span>
                            </BaseButton>
                        </a>
                        <a href="https://status.woolgens.net" target="_blank" rel="noreferrer">
                            <BaseButton type="danger">
                                <span className="text-xl font-bold">
                                    Status Page
                                </span>
                            </BaseButton>
                        </a>
                    </div>
                    <div className="h-32" />
                </div>
            </div>
        </div>
    )
}

export default Maintenance
