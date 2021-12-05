/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      overflow="hidden"
      borderRadius="8px"
      gap="7px"
      width="320px"
      position="relative"
      direction="column"
      height="280px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        width="320px"
        padding="0px 0px 0px 0px"
        position="relative"
        shrink="0"
        src={home?.image_url}
        height="180px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="7px 12px 7px 12px"
        alignSelf="stretch"
        grow="1"
        overflow="hidden"
        gap="14px"
        position="relative"
        basis="93px"
        direction="column"
        height="93px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(0,0,0,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="296px"
          fontSize="16px"
          lineHeight="18.75px"
          position="relative"
          fontWeight="700"
          direction="column"
          children={home?.address}
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          grow="1"
          color="rgba(0,0,0,1)"
          textAlign="left"
          display="flex"
          basis="46px"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="296px"
          fontSize="16px"
          lineHeight="18.75px"
          position="relative"
          fontWeight="400"
          direction="column"
          height="46px"
          children={`${"Price: $"}${home?.price}${"/night"}`}
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
