import { memo } from "react";
import { useMediaQuery } from 'react-responsive';
import { FixedSizeGrid as Grid } from "react-window";
import PokemonCard from "@/app/_components/PokemonCard";
import { IPokemonTransformed } from "@/app/types";
import AutoSizer from "react-virtualized-auto-sizer";

interface IPokemonGridProps {
    pokemons: IPokemonTransformed[];
}

interface ICellProps {
    columnIndex: number;
    columnCount: number;
    rowIndex: number;
    style: React.CSSProperties;
}

const PokemonGrid = memo(({ pokemons }: IPokemonGridProps) => {

    const isMediumScreen = useMediaQuery({ query: '(min-width: 640px)' });

    let columnWidth: number, rowHeight: number;

    // const columnWidth = 160;
    // const rowHeight = 174;

    if (isMediumScreen) {
        columnWidth = 160;
        rowHeight = 174;
      } else {
        columnWidth = 128;
        rowHeight = 142;
    }
    const Cell = memo(({ columnIndex, columnCount, rowIndex, style }: ICellProps) => {
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
        <AutoSizer>
            {({ height, width }) => {
                const columnCount = Math.floor(width / columnWidth);
                const rowCount = Math.ceil(pokemons.length / columnCount);
                return (
                    <Grid
                        columnCount={columnCount}
                        columnWidth={columnWidth}
                        height={height}
                        rowCount={rowCount}
                        rowHeight={rowHeight}
                        width={width}
                        className="mygrid flex justify-center overflow-x-hidden"
                    >
                        {({ columnIndex, rowIndex, style }) => (
                            <Cell
                                columnIndex={columnIndex}
                                columnCount={columnCount}
                                rowIndex={rowIndex}
                                style={style}
                            />
                        )}
                    </Grid>
                );
            }}
        </AutoSizer>
    );
});

PokemonGrid.displayName = 'PokemonGrid';

export default PokemonGrid;