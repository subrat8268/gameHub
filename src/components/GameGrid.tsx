import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 12 }, (_, index) => index + 1);
  if (error)
    return (
      <Text color="red.500" aria-live="polite">
        {error.message}
      </Text>
    );

  return (
    <SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl: 4 }} spacing={5}>
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

      {!isLoading && data?.results.length === 0 && <Text>No games found.</Text>}

      {!isLoading &&
        data?.results.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
};

export default GameGrid;
