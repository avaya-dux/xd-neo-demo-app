import { ReactNode } from 'react'
import './App.css'
// Neo imports
import "@avaya/neo-react/avaya-neo-react.css";
import {
  AppLayout,
  Image,
  LeftNav,
  TopNav,
  Widget
} from "@avaya/neo-react";

function App() {
  const leftNav: ReactNode = (
    <LeftNav
      aria-label="Demo app left nav"
      currentUrl="/workflows"
    >
      <LeftNav.TopLinkItem
        icon="workflow"
        label="Workflows"
        href="/workflows"
      />
      <LeftNav.TopLinkItem icon="broadcast" label="Manage Audio" href="/audio" />
    </LeftNav>
  );

  const TopNavBar = (
    <TopNav
      title="Avaya Workflow"
      logo={<Image src="/logo.svg" isDecorativeOrBranding />}
    >
      <>
        <TopNav.IconButton aria-label="information" icon="info" />
        <TopNav.IconButton aria-label="notifications" icon="notifications-on" />
        <TopNav.IconButton aria-label="Settings" icon="settings" />
      </>
    </TopNav>
  );

  const emptyWidget: ReactNode = (
    <Widget>
      <p>Main content goes here</p>
    </Widget>
  );

  return (
    <>
      <AppLayout
        header={TopNavBar}
        leftPanel={leftNav}
        mainContent={emptyWidget}
      />
    </>
  )
}

export default App
