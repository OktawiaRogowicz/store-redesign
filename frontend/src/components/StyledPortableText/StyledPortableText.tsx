import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";

import StyledTitle from "@/components/StyledTitle";
import StyledParagraph from "@/components/StyledParagraph";

function StyledPortableText({ value }: { value: TypedObject | TypedObject[] }) {
  console.log("value: ", value);
  const components: PortableTextComponents = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <StyledTitle order={1}>{children}</StyledTitle>,
      h2: ({ children }) => <StyledTitle order={2}>{children}</StyledTitle>,
      h3: ({ children }) => <StyledTitle order={3}>{children}</StyledTitle>,
      h4: ({ children }) => <StyledTitle order={4}>{children}</StyledTitle>,
      h5: ({ children }) => <StyledTitle order={5}>{children}</StyledTitle>,
      h6: ({ children }) => <StyledTitle order={6}>{children}</StyledTitle>,
      normal: ({ children }) => (
        <StyledParagraph type="size-M-light">{children}</StyledParagraph>
      ),
    },
  };

  return <PortableText value={value} components={components} />;
}

export default StyledPortableText;
