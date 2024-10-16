"use client";

import React from "react";
import { em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";

const NotificationsContainer: React.FunctionComponent = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(992)})`);

  return (
    <Notifications
      position={isMobile ? "top-right" : "bottom-right"}
      limit={2}
      zIndex={9999}
    />
  );
};

export default NotificationsContainer;
