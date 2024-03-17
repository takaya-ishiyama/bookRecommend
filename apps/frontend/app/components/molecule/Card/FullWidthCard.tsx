import { Card } from "@/components/ui/card";
import React, { Children, PropsWithChildren } from "react";

type Props = {} & PropsWithChildren;
export const FullWidthCard: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Card> */}
      <view>{children}</view>
      {/* </Card> */}
    </>
  );
};
