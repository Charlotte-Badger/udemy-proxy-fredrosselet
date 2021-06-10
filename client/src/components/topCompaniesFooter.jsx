import React from 'react';

import {
  TopCompaniesFooterWrapper,
  TopCompaniesFooterTextContainer,
  TopCompaniesFooterText,
  TopCompaniesFooterLink,
  TopCompaniesLogosFooter,
  TopCompanyLogoFooter
} from '../styles.js';

const TopCompaniesFooter = () => (
  <TopCompaniesFooterWrapper>
    <TopCompaniesFooterTextContainer>
      <TopCompaniesFooterText>
      Top companies choose <TopCompaniesFooterLink href="https://www.youtube.com/watch?v=wBqM2ytqHY4" target="_blank">Udemy for Business</TopCompaniesFooterLink> to build in-demand career skills.
      </TopCompaniesFooterText>
    </TopCompaniesFooterTextContainer>
    <TopCompaniesLogosFooter>
      <TopCompanyLogoFooter alt="Lyft" height="24" width="34" src="https://s.udemycdn.com/partner-logos/lyft-logo.svg"></TopCompanyLogoFooter>
      <TopCompanyLogoFooter alt="adidas" height="24" width="36" src="https://s.udemycdn.com/partner-logos/adidas-logo.svg"></TopCompanyLogoFooter>
      <TopCompanyLogoFooter alt="Eventbrite" height="18" width="99" src="https://s.udemycdn.com/partner-logos/eventbrite-logo.svg"></TopCompanyLogoFooter>
      <TopCompanyLogoFooter alt="Surveymonkey" height="24" width="157" src="https://s.udemycdn.com/partner-logos/surveymonkey-logo.svg"></TopCompanyLogoFooter>
      <TopCompanyLogoFooter alt="Booking" height="24" width="140" src="https://s.udemycdn.com/partner-logos/booking-logo.svg"></TopCompanyLogoFooter>
    </TopCompaniesLogosFooter>
  </TopCompaniesFooterWrapper>
);



export default TopCompaniesFooter;