import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
// import {LightData} from "../Map/LightData";

const LoadingContainer = () => <div>Loading...</div>

const Index = props => {
  const excludeBox = 130
  const [height, setHeight] = useState(window.innerHeight-excludeBox);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight-excludeBox;
      setHeight(newHeight);
      console.log("updating height");
    };
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions)

  }, [])

  const selectedPlace = {}
  console.log("give height", height);

  function onMarkerClick() {
    alert("You clicked in this marker")
  }

  return (
    <React.Fragment>
      <div style={{ marginTop: 71 }}>
        <MetaTags>
          <title>Map | Trailox</title>
        </MetaTags>

        <div
          id="gmaps-markers"
          className="gmaps"
          style={{ position: "relative", width: "100%", height: height }}
        >
          <Map
              google={props.google}
              zoom={14}
              // styles={LightData.Data}
            >
              <Marker
                onClick={(a, b, c) => {
                  onMarkerClick(a, b, c)
                }}
              />
              <InfoWindow>
                <div>
                  <h1>{selectedPlace.name}</h1>
                </div>
              </InfoWindow>
            </Map>
        </div>
      </div>
    </React.Fragment>
  )
}

Index.propTypes = {
  google: PropTypes.object
}

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAP_KEY,
    LoadingContainer: LoadingContainer,
    v: "3",
  })(Index)
)
