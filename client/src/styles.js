import styled, { keyframes} from 'styled-components';

export const ProxyBody = styled.div`
  font-family: sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
  font-weight: 400;
  line-height: 1.4;
  font-size: 16px;
  color: rgb(60, 59, 55);
`;

export const ProxyMain = styled.div`
  margin-left: 5%;
  width: auto;
  max-width: 700px;
  z-index: 1;
`;

// SERVICES
export const OverviewWrapper = styled.div`
  background-color: rgb(30, 30, 28);
  padding-top: 20px;
  padding-left: 5%;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  right: 5%;
  z-index: 3000;
  /* animation: sidebar-container--fade-in--29ug6 250ms linear 250ms forwards; */
  margin-left: 50px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  display: inline-block;
  top: 25px;
  animation-name: ${fadeIn};
`;

export const ContentWrapper = styled.div`
  /* max-width: 600px; */
`;

export const FeaturedReviewWrapper = styled.div`
  /* max-width: 600px; */
`;

export const ReviewsWrapper = styled.div`
`;

// STATIC COMPONENTS
// "Top Companies" middle
export const TopCompaniesMiddleWrapper = styled.div`
  padding: 24px;
  min-width: 516px;
  border-color: rgb(220, 218, 203);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 40px;
`;

export const TopCompaniesMiddleText = styled.div`
`;

export const TopCompaniesMiddleTitle = styled.h3`
  font-family: SuisseWorks ,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol;
  line-height: 1.35;
  letter-spacing: -.02rem;
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const TopCompaniesMiddleSubTitle = styled.div`
`;

export const TopCompaniesLogos = styled.div`
  margin: 8px 0;
`;

export const TopCompanyLogo = styled.img`
  margin: 8px 24px 8px 0;
`;

export const TryUdemyForBusiness = styled.a`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 205px;
  background-color: transparent;
  color: rgb(15, 124, 144);
  text-decoration: none;
  border-color: rgb(40, 150, 169);
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  /* padding: 0 12px; */
  &:hover {
    color: rgb(9, 76, 89);
    border-color: rgb(28, 106, 120);
  }
  &:active {
    color: rgb(9, 76, 89);
    border-color: rgb(28, 106, 120);
  }
`;

// Report Abuse
export const ReportAbuseWrapper = styled.div`
  height: 72px;
  border-top: 1px solid rgb(220, 218, 203);
`;

export const ReportAbuseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: transparent;
  color: rgb(15, 124, 144);
  border-color: rgb(40, 150, 169);
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 32px;
  &:hover {
    color: rgb(9, 76, 89);
    border-color: rgb(28, 106, 120);
  }
  &:active {
    color: rgb(9, 76, 89);
    border-color: rgb(28, 106, 120);
  }
`;

// "Top Companies" footer
export const TopCompaniesFooterWrapper = styled.div`
  min-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid rgb(220, 218, 203);
  padding: 12px 24px;
`;

export const TopCompaniesFooterTextContainer = styled.div`
  padding: 12px 24px 12px 0;
`;

export const TopCompaniesFooterText = styled.span`
  font-size: 19px;
  font-weight: 700;
`;

export const TopCompaniesFooterLink = styled.a`
  color: rgb(15, 124, 144);
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: rgb(9, 76, 89);
    border-color: rgb(28, 106, 120);
  }
  &:active {
    color: rgb(9, 76, 89);
    border-color: rgb(28, 106, 120);
  }
`;

export const TopCompaniesLogosFooter = styled.div`
  margin: 8px 0;
`;

export const TopCompanyLogoFooter = styled.img`
  margin: 12px 24px 12px 0;
`;
