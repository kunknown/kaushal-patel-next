"use client";
import React, { useCallback, useEffect, memo } from "react";

export default memo(function MemoChild({ obj }: { obj: Object }) {
  useEffect(() => {
    console.log("MemoChild Rendered");
  });
  return <div>memo-child{JSON.stringify(obj)}</div>;
});
