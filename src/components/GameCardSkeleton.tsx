import { Card, SkeletonText, Skeleton, CardBody } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="130px" borderRadius={10} />
      <CardBody>
        <SkeletonText noOfLines={4} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
