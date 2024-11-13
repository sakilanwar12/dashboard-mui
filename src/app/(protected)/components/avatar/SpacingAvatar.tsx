import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

const SpacingAvatar = () => {
  return (
    <>
      <AvatarGroup spacing="medium">
        <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" />
      </AvatarGroup>
      <AvatarGroup spacing="small">
        <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" />
      </AvatarGroup>
      <AvatarGroup spacing={24}>
        <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" />
      </AvatarGroup>
    </>
  );
};

export default SpacingAvatar;
