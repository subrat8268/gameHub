import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import StarRating from "./StarRating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        height="150px"
        objectFit="cover"
        borderRadius="8px 8px 0 0"
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <HStack
          justifyContent={"space-between"}
          marginBottom={3}
          alignItems={"start"}
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="18px">
          {game.name} <StarRating rating={game.rating} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
