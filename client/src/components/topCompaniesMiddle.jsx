import React from 'react';

import {
  TopCompaniesMiddleWrapper,
  TopCompaniesMiddleText,
  TopCompaniesMiddleTitle,
  TopCompaniesMiddleSubTitle,
  TopCompaniesLogos,
  TopCompanyLogo,
  TryUdemyForBusiness
} from '../styles.js';

const TopCompaniesMiddle = () => (
  <TopCompaniesMiddleWrapper>
    <TopCompaniesMiddleText>
      <TopCompaniesMiddleTitle>
        Top companies trust Udemy
      </TopCompaniesMiddleTitle>
      <TopCompaniesMiddleSubTitle>
        Get your team access to Udemy's top 5,500+ courses
      </TopCompaniesMiddleSubTitle>
    </TopCompaniesMiddleText>
    <TopCompaniesLogos>
      <TopCompanyLogo alt="Booking" height="18" width="110" src="https://s.udemycdn.com/partner-logos/booking-logo.svg"></TopCompanyLogo>
      <TopCompanyLogo alt="Lyft" height="30" width="42" src="https://s.udemycdn.com/partner-logos/lyft-logo.svg"></TopCompanyLogo>
      <TopCompanyLogo alt="Mercedes" height="24" width="120" src="https://s.udemycdn.com/partner-logos/mercedes-logo-v2.svg"></TopCompanyLogo>
      <TopCompanyLogo alt="Volkswagon" height="32" width="32" src="https://s.udemycdn.com/partner-logos/volkswagen-logo.svg"></TopCompanyLogo>
      <TopCompanyLogo alt="adidas" height="28" width="42" src="https://s.udemycdn.com/partner-logos/adidas-logo.svg"></TopCompanyLogo>
    </TopCompaniesLogos>
    <TryUdemyForBusiness href="https://www.youtube.com/watch?v=iRZ2Sh5-XuM" target="_blank">
      Try Udemy for Business
    </TryUdemyForBusiness>
  </TopCompaniesMiddleWrapper>
);

export default TopCompaniesMiddle;