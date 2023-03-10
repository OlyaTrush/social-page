import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import useRoute from "./src/Routes/useRoute";

export default function App() {
  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
