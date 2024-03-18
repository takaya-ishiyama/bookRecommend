import React from "react";

import { InputProps, Input as SCNInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {} & InputProps;
export const Input: React.FC<Props> = ({ ...props }) => {
  // return <SCNInput {...props} />;
  return (
    <button className="grid place-content-center bg-red-800">aaaaaaaaaa</button>
  );
};
