import React from 'react'
import team from "../assets/imgs/breadcrumb/team.jpg"
import Breadcrumb from '../component/reuse/BreadCrumb'
import LeadershipTeam from '../component/team/LeadershipTeam'
import CoreTeam from '../component/team/CoreTeam'
const Team = () => {
  return (
    <>
           <Breadcrumb
  title="Team"
  items={[
    { label: "Home", link: "/" },
    { label: "Team" },
  ]}
  bgimg={team}
/>
<LeadershipTeam/>
<CoreTeam/>

    </>
  )
}

export default Team