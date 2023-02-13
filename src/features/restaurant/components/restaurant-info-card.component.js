import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: black;
`;

const Cover = styled(Card.Cover)`
  padding: 20px;
  padding-bottom: 0;
  background-color: grey;
`;

const RestaurantCard = styled(Card)`
  background-color: #b2bec3;
  margin: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Hari dai ko pasal",
    icon,
    photos = [
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "Putalisadak",
    rating,
    openingHours,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <Cover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
