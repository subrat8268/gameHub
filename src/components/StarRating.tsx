import { HStack, Icon } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Props {
  rating: number;
  maxRating?: number; // Optional, to set a max number of stars (e.g., 5 stars)
}

const StarRating = ({ rating, maxRating = 5 }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <HStack spacing={1} marginTop={1}>
      {Array.from({ length: maxRating }, (_, index) => {
        if (index < fullStars) {
          // Full Star
          return (
            <Icon key={index} as={FaStar} color="yellow.400" boxSize="20px" />
          );
        } else if (index === fullStars && hasHalfStar) {
          // Half Star
          return (
            <Icon
              key={index}
              as={FaStarHalfAlt}
              color="yellow.400"
              boxSize="20px"
            />
          );
        } else {
          // Empty Star
          return (
            <Icon key={index} as={FaRegStar} color="gray.300" boxSize="20px" />
          );
        }
      })}
    </HStack>
  );
};

export default StarRating;
