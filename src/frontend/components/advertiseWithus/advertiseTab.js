import React, { useState } from "react";
import Logo from '../../../assets/img/logo.svg';
import Hero3 from "../../../assets/img/hero/hero-3.jpg";
import { Parallax } from "react-parallax";

function AdvertiseTabs() {
  const [activeTab, setActiveTab] = useState("Zoom");
  const [playing, setPlaying] = useState({
    Zoom: false,
    Zoom2: false,
    Zoom3: false,
  });

  const openLink = (animName) => {
    setActiveTab(animName);
    // Pause all videos when switching tabs
    setPlaying({
      Zoom: false,
      Zoom2: false,
      Zoom3: false,
    });
  }

  const handlePlay = (tab) => {
    // Pause all other videos when a video starts playing
    const updatedPlaying = {
      Zoom: false,
      Zoom2: false,
      Zoom3: false,
    };
    updatedPlaying[tab] = true;
    setPlaying(updatedPlaying);
  }

  const handlePause = (tab) => {
    setPlaying({
      ...playing,
      [tab]: false,
    });
  }

  return (
    <Parallax blur={0} bgImage={Hero3} bgImageAlt="the cat" strength={300}>
      <section className="special spad tabs-section" data-scrollax-parent="true">
        <div className="content tabcontainer">
          <div className="text-start mb-4">
            <h1 className="mb-3 text-white">Indulge in Elegance</h1>
            <h4 className="text-white">Unveil New Luxe Getaways Every Week</h4>
          </div>
          <div className="w3-sidebar w3-bar-block  w3-card">
            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom')}><i className="fa fa-globe" aria-hidden="true"></i>Fiji</button>
            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom2' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom2')}><i className="fa fa-globe" aria-hidden="true"></i>USA</button>
            <button className={`w3-bar-item w3-button tablink ${activeTab === 'Zoom3' ? 'w3-red' : ''}`} onClick={() => openLink('Zoom3')}><i className="fa fa-globe" aria-hidden="true"></i>Switzerland</button>
          </div>
          <div className="zoom-content">
            <div id="Zoom" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom' ? '' : 'hidden'}`}>
              <img src={Logo} alt="" className="w-50 mb-3" />
              {activeTab === 'Zoom' && (
                <iframe
                  width="100%" height="315"
                  src="https://www.youtube.com/embed/gsmn65ULZzU?si=TW5l_eHtSOJ26As7"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onPlay={() => handlePlay('Zoom')}
                  onPause={() => handlePause('Zoom')}
                ></iframe>
              )}
            </div>
            <div id="Zoom2" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom2' ? '' : 'hidden'}`}>
              <img src={Logo} alt="" className="w-50 mb-3" />
              {activeTab === 'Zoom2' && (
                <iframe
                  width="100%" height="315"
                  src="https://www.youtube.com/embed/ktmNqsi1izE?si=YlrcoE65aTBgirnj"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onPlay={() => handlePlay('Zoom2')}
                  onPause={() => handlePause('Zoom2')}
                ></iframe>
              )}
            </div>
            <div id="Zoom3" className={`w3-container city w3-animate-zoom p-3 ${activeTab === 'Zoom3' ? '' : 'hidden'}`}>
              <img src={Logo} alt="" className="w-50 mb-3" />
              {activeTab === 'Zoom3' && (
                <iframe
                  width="100%" height="315"
                  src="https://www.youtube.com/embed/nAh6vtOMwGU?si=zw9P-M5hH_MJ3cPv"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onPlay={() => handlePlay('Zoom3')}
                  onPause={() => handlePause('Zoom3')}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}

export default AdvertiseTabs;
