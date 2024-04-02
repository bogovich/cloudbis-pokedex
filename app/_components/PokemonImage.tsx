'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
const MotionImage = motion(Image);

const PokemonImage = ({ src, alt }: { src: string; alt: string }) => {
    return (

            <div className='bg-white dark:bg-slate-300 rounded-lg border border-slate-900 mb-3'>
                <MotionImage
                    width="550"
                    height="550"
                    src={src}
                    alt={alt}
                    priority
                    className="w-60 md:w-[550px] p-4"
                    initial={{ filter: "brightness(0.01)" }}
                    animate={{ filter: "brightness(1)" }}
                    transition={{ duration: 2, ease: "easeIn" }}
                />
            </div>
    );
}

export default PokemonImage;