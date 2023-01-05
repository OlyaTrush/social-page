import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = () => {
    return (
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            mapType="standard"
            minZoomLevel = {1}
            onMapReady={() => {}}
            onRegionChange={() => {}}
          >
            <Marker
              title="I am here"
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              description='Hello'
            />
          </MapView>
        </View>
      );
    };
    
    