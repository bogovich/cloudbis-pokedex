import { motion } from 'framer-motion';
import Image from 'next/image';
import { IPokemonCardProps } from "@/app/types";
import { useRouter } from 'next/navigation'
const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            role="button"
            tabIndex={0}
            initial="hidden"
            whileInView="visible"
            whileHover={{ 
                rotate: -5,
                backgroundColor: '#f3f3f3',
                zIndex: 10000,
            }}
            whileTap={{ scale: 0.9 }}
            viewport={{ once: true, amount: 0.99 }}
            variants={{
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
                hidden: { opacity: 0, scale: 0, transition: { duration: 0.1 } },
            }}
        >
            {children}
        </motion.div>
    );
}

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
    const { id, name, image } = pokemon;
    const router = useRouter();

    return (
        <FadeInWhenVisible>
            <div onClick={() => router.push(`/pokemon/${id}`)}
                className="flex flex-col bg-slate-100 w-32 sm:w-40 items-center justify-center p-2 border border-slate-600 dark:bg-slate-500">
                <h2 className="text-base font-bold dark:text-stone-100">{name}</h2>
                <span className="text-sm text-stone-600 dark:text-amber-300">#{id}</span>
                <Image width="156" height="156" src={image} alt={name} className="w-20 h-20 sm:w-28 sm:h-28" priority={id < 40} placeholder='empty' />
            </div>
        </FadeInWhenVisible>
    );
}

export default PokemonCard;