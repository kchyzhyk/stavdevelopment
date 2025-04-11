"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Line,
  Row,
  Scroller,
  SmartImage,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  range: boolean | any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  range = false,
}) => {
  return (
    <Row fillWidth gap="20">
      <Column fillWidth>
        <Flex flex={5} direction="column" gap="8">
          {title && (
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          )}
          <Line />
          {description && (
            <Text wrap="balance" variant="label-default-s">
              {description}
            </Text>
          )}
        </Flex>
        {!range && (
          <Flex paddingTop="m" gap="12" wrap>
            {images.map((image, index) => (
              <Flex
                key={index}
                border="neutral-medium"
                radius="m"
                minWidth={16}
                height={9}
              >
                <SmartImage
                  enlarge
                  radius="m"
                  alt={image}
                  src={image}
                  sizes={"16"}
                />
              </Flex>
            ))}
          </Flex>
        )}
        {range && (
          <Carousel
            sizes="(max-width: 960px) 100vw, 960px"
            images={images.map((image) => ({
              src: image,
              alt: title,
            }))}
          />
        )}
      </Column>
    </Row>
  );
};
