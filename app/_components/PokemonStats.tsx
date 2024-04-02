'use client';
import { motion } from "framer-motion";

interface IPokemonStats {
    stats: {
        [key: string]: {
            base_stat: number;
            normalized_perc: number;
        };
    };
    mainType: string;
}

const PokemonStats = ({ stats, mainType }: IPokemonStats) => {
    return (
        <div className="w-full">
            <h3 className="text-base font-bold dark:text-slate-300">Stats</h3>
            {Object.entries(stats).map(([key, value]) => (
                <motion.div
                    key={key}
                    className="dark:text-slate-300"
                >
                    <strong>{key}:</strong> {value.base_stat}
                    <div className="w-full h-4 mb-4 bg-gray-400 rounded-full dark:bg-gray-700 dark:text-slate-300">
                        <motion.div
                            className={`h-4 bg-${mainType}-100 rounded-full`}
                            style={{ width: "0%" }}
                            animate={{ width: `${value.normalized_perc}%` }}
                            transition={{ duration: 2 }}
                        ></motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default PokemonStats;