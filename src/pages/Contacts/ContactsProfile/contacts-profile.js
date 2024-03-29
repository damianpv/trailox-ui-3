import React from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
} from "reactstrap"

//import components
import ProfileTab from "./ProfileTab";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"


const ContactsProfile = props => {

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Trailox - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="Profile" />

          <Row>
            {/* Render profilemenu */}
            <ProfileTab />

          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ContactsProfile;