'use client';
import { motion } from 'framer-motion';

const PokemonImage = ({ src, alt }: { src: string; alt: string }) => {
    return (

        <div className='bg-white dark:bg-slate-300 rounded-lg border border-slate-900 mb-3'>
            <motion.img
                src={src}
                alt={alt}
                className="w-60 aspect-square md:w-[550px] p-4"
                initial={{ filter: "brightness(0.01)" }}
                animate={{ filter: "brightness(1)" }}
                transition={{ duration: 2, ease: "easeIn" }}
            />
        </div>
    );
}

export default PokemonImage;