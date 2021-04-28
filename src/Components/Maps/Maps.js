import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    // static defaultProps = {
    //     center: {
    //         lat: 59.95,
    //         lng: 30.33
    //     },
    //     zoom: 11
    // };

    // render() {
    //     return (
    //         // Important! Always set the container height explicitly
    //         <div style={{ height: '100vh', width: '100%' }}>
    //             <GoogleMapReact
    //                 bootstrapURLKeys={{ key: "AIzaSyCqv81xBNvvdOreFB2pA4K2Zo33uSaa0LI" }}
    //                 defaultCenter={this.props.center}
    //                 defaultZoom={11}
    //             >
    //                 <AnyReactComponent
    //                     lat={59.955413}
    //                     lng={30.337844}
    //                     text="Macht"
    //                 />
    //             </GoogleMapReact>
    //         </div>
    //     );
    // }

    render() { return <div>maps</div> }
}

export default SimpleMap;