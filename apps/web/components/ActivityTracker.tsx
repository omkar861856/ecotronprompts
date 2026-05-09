"use client";

import { useEffect } from "react";

export const ActivityTracker = ({ promptId }: { promptId: string }) => {
  useEffect(() => {
    fetch("/api/activity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "view_prompt",
        targetId: promptId,
      }),
    });
  }, [promptId]);

  return null;
};
