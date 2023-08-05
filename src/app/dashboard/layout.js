'use client'
import {LayoutContainer, DrawerContainer, MainContainer} from "./layout.styles"
import Navigation from "../../components/Navigation/Navigation"
import Drawer from "@/components/Drawer/Drawer"

export default function DashboardLayout({ children }) {
  return (
    <LayoutContainer>
      <DrawerContainer isOpen>
        <Drawer/>
      </DrawerContainer>
      <MainContainer>
        <Navigation>nav</Navigation>
        <div className="dashboardContainer">
          {children}
        </div>
      </MainContainer>
    </LayoutContainer>
  )
}
