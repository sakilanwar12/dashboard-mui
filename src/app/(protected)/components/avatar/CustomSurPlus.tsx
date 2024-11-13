"use client"
import { Avatar, AvatarGroup } from "@mui/material";

const CustomSurPlus = () => {
  return (
    <AvatarGroup
      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
      total={4251}
    >
      <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/images/avatar/5.jpg" />
      <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/images/avatar/5.jpg" />
    </AvatarGroup>
  );
};

export default CustomSurPlus;
