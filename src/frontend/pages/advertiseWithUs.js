import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/header";
import Footer from "../components/footer";
import CallToAction from "../components/callToAction";
import Advertise from "../components/advertiseWithus/advertise";
import AdvertiseTestimonial from "../components/advertiseWithus/advertiseTestimonial";
import AdvertiseWhatWeDo from "../components/advertiseWithus/advertiseWhatWeDo";
import AdvertiseTop from "../components/advertiseWithus/advertiseTop";
import ClientLogo from "../components/clientLogo";
import OurStory from "../components/advertiseWithus/ourStory";
import NewFor from "../components/advertiseWithus/newFor2022";
import AdvertiseWhatWeDosection from "../components/advertiseWithus/advWhatWeDo";
import AdvertiseTabs from "../components/advertiseWithus/advertiseTab";
function AdvertiseWithUs() {

    const [activeTab, setActiveTab] = useState("Zoom");

    const openLink = (animName) => {
        setActiveTab(animName);
    }

    useEffect(() => {

      window.scrollTo(0, 0)

        } );

    return (
        <>
            <Header></Header>
            <AdvertiseTop/>
            {/* <Advertise /> */}

            <OurStory/>
            <ClientLogo/>
            <NewFor/>
            
            <AdvertiseTabs/>
            <AdvertiseWhatWeDosection/>
            <Advertise />
            <AdvertiseWhatWeDo />
            <CallToAction />
            <Footer />
        </>

    );
}
export default AdvertiseWithUs;