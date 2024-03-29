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
            viewport={{ once: true, amount: 0.99 }}
            whileHover="hovered"
            variants={{
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
                hidden: { opacity: 0, scale: 0, transition: { duration: 0.1 } },
                hovered: { scale: 1.15, rotate: 5, transition: { duration: 0.2 } }
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
                className="flex flex-col bg-slate-100 w-40 items-center justify-center p-2 rounded-md border-2 border-slate-600">
                <h2 className="text-base font-bold">{name}</h2>
                <span className="text-sm text-stone-600">#{id}</span>
                <Image width="156" height="156" src={image} alt={name} className="w-28 h-28" priority={id < 45} placeholder='empty' />
            </div>
        </FadeInWhenVisible>
    );
}

export default PokemonCard;