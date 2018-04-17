import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({ album }) => {
  const { title, thumbnail_image, artist, image } = album;
  const {
    thumbnailStyles,
    headerContentStyle,
    thumbnailContainerStyles,
    headerTextStyle,
    ImageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyles}>
          <Image style={thumbnailStyles} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={ImageStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyles: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyles: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  ImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
