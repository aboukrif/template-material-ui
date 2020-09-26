import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Blog from "./BlogContent/Blog";
import Album from "./Album";
import Prix from "./Prix";
import Inscription from "./Inscription";
import Connexion from "./Connexion";
import CoffeMachineShop from "./CoffeMachineShop";


const Home = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "coffemachineshop",
    1: "blog",
    2: "album",
    3: "prix",
    4: "connexion",
    5: "inscription"
  };

  const indexToTabName = {
    coffemachineshop : 0,
    connexion: 1,
    inscription: 2
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };
 
  return (
    <>
      <AppBar position="static">
        
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Accueil" />
          <Tab label="Blog" />
          <Tab label="Album" />
          <Tab label="Prix" />
          <Tab label="Connexion" />
          <Tab label="Inscription" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <CoffeMachineShop />}
      {selectedTab === 1 && <Blog />}
      {selectedTab === 2 && <Album />}
      {selectedTab === 3 && <Prix />}
      {selectedTab === 4 && <Connexion />}
      {selectedTab === 5 && <Inscription />}
    </>
  );
};

export default Home;
