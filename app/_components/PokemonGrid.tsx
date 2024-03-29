import { memo } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import PokemonCard from "@/app/_components/PokemonCard";
import { IPokemonTransformed } from "@/app/types";

interface IPokemonGridProps {
    columnCount: number;
    columnWidth: number;
    height: number;
    rowCount: number;
    rowHeight: number;
    width: number;
    pokemons: IPokemonTransformed[];
}

interface ICellProps {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
}

const PokemonGrid = memo(({ columnCount, columnWidth, height, rowCount, rowHeight, width, pokemons }: IPokemonGridProps) => {
    const Cell = memo(({ columnIndex, rowIndex, style }: ICellProps) => {
        const index = rowIndex * columnCount + columnIndex;
        return (
            <div style={style}>
                {index < pokemons.length ? (
                    <PokemonCard
                        key={pokemons[index].id}
                        pokemon={pokemons[index]}
                    />
                ) : null}
            </div>
        );
    });

    Cell.displayName = 'Cell';

    return (
        <Grid
            columnCount={columnCount}
            columnWidth={columnWidth}
            height={height}
            rowCount={rowCount}
            rowHeight={rowHeight}
            width={width}
            className="mygrid flex justify-center"
        >
            {({ columnIndex, rowIndex, style }) => (
                <Cell
                    columnIndex={columnIndex}
                    rowIndex={rowIndex}
                    style={style}
                />
            )}
        </Grid>
    );
});

PokemonGrid.displayName = 'PokemonGrid';

export default PokemonGrid;