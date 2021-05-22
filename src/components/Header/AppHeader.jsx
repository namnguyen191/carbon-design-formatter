import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems
} from 'carbon-components-react';
import { Link } from 'react-router-dom';
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20
} from '@carbon/icons-react';

const AppHeader = () => {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="IBM Carbon Formatter">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName element={Link} to="/" prefix="IBM Carbon">
            IBM Formatter
          </HeaderName>
          <HeaderNavigation aria-label="Codes Repo">
            <HeaderMenuItem element={Link} to="/repos">
              GitHub Repo
            </HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem element={Link} to="/repos">
                  GitHub Repo
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
              <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default AppHeader;
