import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from ".";
import BlogDetails from "./pages/newsDetails";
import Rooms from "./pages/hotel-search";
import Login from "./auth/login";
import Signup from "./auth/signup";
import UserProfile from "./pages/userProfile";
import RoomDetails from "./pages/roomDetails";
import PricingPlan from "./components/pricingPlan";
import Profile from "./components/profile";
import SubsriptionPage from "./components/subscriptionPage";
import WhatWeDo from "./pages/whatWeDo";
import AdvertiseWithUs from "./pages/advertiseWithUs";
import HotelSelection from "./pages/hotelSelection";
import HotelEditions from "./pages/hotelsEditions";
import OurTeam from "./pages/ourTeam";
import AboutUsPage from "./pages/about";
import Distribution from "./pages/distribution";
import Mediapack from "./pages/mediapack";
import TrademarkRegistration from "./pages/trademarkRegistration";
import ContactUs from "./pages/contactUs";
import SubscribeToNews from "./pages/subscribeToNews";
import SubscribeToDigitalCopy from "./pages/subscribeToDigitalCopy";
import SubscribeToPrintCopy from "./pages/subscribeToPrintCopy";
import PublishVideoBanner from "./pages/publishVideoBanner";
import PublishAnimatedBanner from "./pages/publishAnimatedBanner";
import PublishHotelNews from "./pages/publishHotelNews";
import KitDetail from "./pages/kitDetail";
import ForgotPassword from "./pages/forgotPassword";
import MagazineDetails from "./pages/luxuryMagazineDetails";
import ModalComponent from "./modalPopUp/newsLetterPopup";
import AllHotels from "./pages/userprofile/allHotels";
import PublishNews from "./pages/userprofile/publishNews";
import EditHotel from "./pages/userprofile/editHotel";
import BenifitsWorkingWithUs from "./components/benifitsWorkingWithUs";
import GeneralNews from "./pages/userprofile/generalNews";
import HotelNews from "./pages/userprofile/hotelNews";
import CampaignDetail from "./pages/campaignDetail";
import Nominee from "./pages/nominee";
import HotelNominate from "./components/nominateHotels";


function RoutesPage() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<IndexPage />} />
      <Route exact path="/home" element={<IndexPage />} />
      <Route exact path="/news-details/:news_id/:newsName" element={<BlogDetails />} />
      <Route exact path="/hotel-search" element={<Rooms />} />
      <Route exact path="/hotel-details/:hotelId/:country/:hotelname" element={<RoomDetails />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/userprofile" element={<UserProfile />} />
      <Route exact path="/pricing-plan" element={<PricingPlan />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/subscription" element={<SubsriptionPage />} />
      <Route exact path="/what-we-do" element={<WhatWeDo />} />
      <Route exact path="/advertise-with-us" element={<AdvertiseWithUs />} />
      <Route exact path="/hotels-selection" element={<HotelSelection />} />
      <Route exact path="/luxury-hotels-magazines" element={<HotelEditions />} />
      <Route exact path="/our-team" element={<OurTeam />} />
      <Route exact path="/about-us" element={<AboutUsPage />} />
      <Route exact path="/distribution" element={<Distribution />} />
      <Route exact path="/mediapack" element={<Mediapack />} />
      <Route exact path="/subscribe-to-news" element={<SubscribeToNews />} />
      <Route exact path="/trademark-registration" element={<TrademarkRegistration />} />
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/subscribe-digital-copy" element={<SubscribeToDigitalCopy />} />
      <Route exact path="/subscribe-print-copy" element={<SubscribeToPrintCopy />} />
      <Route exact path="/publish-video-banner" element={<PublishVideoBanner />} />
      <Route exact path="/publish-animated-banner" element={<PublishAnimatedBanner />} />
      <Route exact path="/publish-news-pr" element={<PublishHotelNews />} />
      <Route exact path="/kit-detail/:media_kit_id/:media_kit_name" element={<KitDetail />} />
      <Route exact path="/forgot-password" element={<ForgotPassword />} />
      <Route exact path="/edit-hotel-profile" element={<EditHotel />} />
      <Route exact path="/magazine-details/:hotel_magazine_id/:hotel_magazine_name" element={<MagazineDetails />} />
      <Route exact path="/general-news" element={<GeneralNews />} />
      <Route exact path="/hotel-news" element={<HotelNews />} />
      <Route exact path="/campaign-detail/:campaignName" element={<CampaignDetail/>} />
      <Route exact path="/userprofile/hotels" element={<AllHotels />} />
      <Route exact path="/benifits-working-with-us" element={<BenifitsWorkingWithUs />} />
      <Route exact path="/nominee" element={<HotelNominate />} />
      
      
      


    </Routes>
     
      </>
  );
}
export default RoutesPage;