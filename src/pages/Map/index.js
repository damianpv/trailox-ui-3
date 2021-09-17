import PropTypes from 'prop-types'
import React from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
// import {LightData} from "../Map/LightData";

const LoadingContainer = () => <div>Loading...</div>

const Index = props => {
  const selectedPlace = {}

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
          style={{ position: "relative" }}
        >
          <Map
              google={props.google}
              zoom={14}
              // styles={LightData.Data}
              style={{ width: "100%", height: "100%" }}
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
    apiKey: "AIzaSyDRHxEkakWILmKwTKzSRLvMO8Qx-B7Uu0w",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(Index)
)
