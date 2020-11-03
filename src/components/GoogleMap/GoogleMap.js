import React, { Component } from 'react';
const API_KEY = 'AIzaSyAdzbFfU2AvHZbkZ3xNeJTE90aJ8jsbe64';

const GoogleMap = (props) => {
  const LOCATION_ORIGIN = props.start? props.start : 'Đại Học kinh tế tài chính Quận Bình Thạnh';
  const DESTINATION = props.end? props.end :'Đại Học Hutech Quận Bình Thạnh';
  let path = props.placeMode ? `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${DESTINATION, LOCATION_ORIGIN}` :
    `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${LOCATION_ORIGIN}&destination=${DESTINATION}&zoom=12&avoid=tolls|highways`
  console.log(path)
  return (
    <div>
      <iframe
        width="100%"
        height="500px"
        zoom="1.5"
        frameborder="0" style={{ border: 0 }}
        src={path}
        allowfullscreen>
      </iframe>
    </div>
  );

}

export default GoogleMap;