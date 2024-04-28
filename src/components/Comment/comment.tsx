import React from "react";
import { Textarea, Button } from "@nextui-org/react";

export default function Comment() {
  return (
    <>
      <Textarea
        isRequired
        label="Comment here"
        labelPlacement="outside"
        className="mt-16 lg:px-16"
      />
      <Button className="mt-10 lg:ml-16" color="warning">
        Send
      </Button>
    </>
  );
}
