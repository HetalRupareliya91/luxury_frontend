
const API = {
  
    // development
    //  BASE_API_URL: "http://localhost:8000/api",
     BASE_URL:"https://luxuryhotelsmagazines.fableadtechnolabs.com/backend/api/",

     
      ENDPOINTS: {
       login: "user-login",
       signup:"user-register",
       hotelSearch:"search-hotel",
      allHotelAmenities:"all-hotel-ameties",
      createHotel:"hotel-register",
      createNews:"create-news",
      allNews:"all-news",
      updateNews:"update-news",
      allHotels:"all-hotels",
      deleteHotel:"delete-hotels",
      editNews:"edit-news",
      deleteNews:"delete-news",
      allMagazines:"all-hotel-magazines",
      viewNews:"views-news",
      // editHotel:"edit-hotels",
      upateHotels:"update-hotels",
      forgetPassword:"reset_password",
      varifyOtp:"verify_otp",
      resendPassword:"resend_password",
      loginUserupdateProfile:"login-user-update-profile",
      loginUserProfile:"login-user-profile",
      logout:"user-logout",
      homeInfo:"edit_home_info",

      allhotelfacilities:"all-hotel-facilities",

      //distribution
      distributionDetails:"all-distibutor-detail",
      allDistribution:"all-distibutor",

    // single_page_details
    singlePageDetails:"get_single_page_details",

    singlepagedetails:"single_page_details",    

    // all team
    allTeam:"all-team",

    // get about us detail
    aboutUs:"edit-about-us",


    // hotel

    editHotel:"edit-hotels",
    updateHotel:"update-hotels",
    updateSingleHotelImage:"update_single_hotel_image",
deleteSingleHotelImage:"delete_single_hotel_image",
addMultipleImage:"add_multiple_images_hotels",
    homeApi:"home",
    userHotel:"user_hotel",


    // all media kit
    allMedia:"all-media-kit",
    editMediaKit:"edit-media-kit",

    // magazine
    allMagazine:"all-hotel-magazines",
    editHotelMagazine:"edit-hotel-magazines",

    // newsletter
    newsLetter:"CreateNewsLetter",

    // voting-details
    
addVotingDetails:"add_voting_details",
allVotingDetals:"all_voting_details",
allSpecialOffers:"all_special_offer",

// offer_title


addSpecialOffers:"add_special_offer",
editSpecialOffer:"edit_special_offer",

// strip-subscription

stripeSubscriptionPayment: "stripe-subscription-payment"
      },
    }; 

export default API;
    

export const isUserLoggedIn = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (isLoggedIn === 'true') {
    return true;
  }
  else {
    return false;
  }
};