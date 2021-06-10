import styled, { keyframes} from 'styled-components';

export const ProxyBody = styled.div`
  font-family: sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
  font-weight: 400;
  line-height: 1.4;
  font-size: 14px;
  color: rgb(60, 59, 55);
  /* z-index: 1; */
`;

export const ProxyMain = styled.main`
  padding: 0 12%;
`;

// HEADER
export const ProxyHeader = styled.header`
`;

// Nav bar
export const NavBarWrapper = styled.div`
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  height: 72px;
  z-index: 5000;
  background-color: white; */
`;

export const PrideGradient = styled.div`
  height: 8px;
  background: linear-gradient(90deg,  rgb(100, 91, 83) 0%, rgb(235, 82, 82) 18%, rgb(247, 143, 47) 34%, rgb(244, 193, 81) 49%, rgb(82, 187, 118) 66%, rgb(38, 165, 215) 82%, rgb(224, 105, 183) 100%);
  /* z-index: 5000; */
`;

export const ProxyNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 72px;
  z-index: 5000;
  background-color: white;
  color: rgb(60, 59, 55);
`;

export const NavBarImage = styled.img`
  /* flex-grow: 1; */
  /* z-index: 5000; */
  /* background-color: white; */
  margin: 0 12px;
`;

export const NavBarCategories = styled.div`
  /* flex-grow: 1; */
  margin: 0 12px;
`;

export const NavBarSearch = styled.div`
  /* flex-grow: 2; */
  background-color: rgb(251, 251, 248);
  flex: 1 20%;
  display: flex;
  align-items: center;
  border: solid 1px rgb(152, 149, 134);
  height: 48px;
  padding: 12px 20px;
  margin: 4px 12px;
  border-radius: 32px;
  outline: none;
  &:hover {
    border-color: rgb(121,118,103);
  }
`;

export const NavBarSearchSVG = styled.svg`
`;

export const NavBarSearchBar = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0 16px 0 4px;
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
`;

export const NavBarBusiness = styled.div`
  margin: 0 12px;
`;

export const NavBarTeach = styled.div`
  /* flex-grow: 1; */
  margin: 0 12px;
`;

export const NavBarCart = styled.svg`
  /* flex-grow: 1; */
  margin: 0 12px;
`;

export const NavBarLogin = styled.button`
  /* flex-grow: 1; */
  margin: 0 12px;
`;

export const NavBarSignup = styled.button`
  /* flex-grow: 1; */
  margin: 0 12px;
`;

export const NavBarLanguage = styled.button`
  /* flex-grow: 1; */
  margin: 0 12px;
`;

// SERVICES
export const OverviewWrapper = styled.div`
  margin-top: 72px;
  /* background-color: rgb(30, 30, 28); */
  /* padding-top: 20px; */
  /* padding-left: 5%; */
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// while main part of Overview is visible, Sidebar is static

// once main part of Overview has disappeared, Sidebar animates back up, becomes fixed, covers Overview banner, and has no video

// once the footer appears, Sidebar becomes static again

export const SidebarWrapper = styled.div`
  position: sticky;
  float: right;
  clear: left;
  margin-bottom: 48px;
  z-index: 2000;
  /* animation: sidebar-container--fade-in--29ug6 250ms linear 250ms forwards; */

  top: 16px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
  display: inline-block;
  animation-name: ${fadeIn};
`;

// LEFT SIDE
export const ProxyLeftSide = styled.div`
  width: auto;
  /* margin-left: 12%; */
  max-width: 700px;
  padding: 32px 48px 48px 0;
`;

export const ContentWrapper = styled.div`
  margin-bottom: 40px;
`;

export const FeaturedReviewWrapper = styled.div`
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
  /* margin-bottom: 32px; */
  &:hover {
    color: rgb(9, 76, 89);
    border-color: rgb(28, 106, 120);
  }
  &:active {
    color: rgb(9, 76, 89);
    border-color: rgb(28, 106, 120);
  }
`;

// FOOTER
export const ProxyFooter = styled.footer``;

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
