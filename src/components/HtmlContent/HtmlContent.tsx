import React from "react";
import ReactHtmlParser, { Transform } from "react-html-parser";

import StyledButton from "@/components/StyledButton";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";

function HtmlContent({ htmlString }: { htmlString: string }) {
  const transform: Transform = (node) => {
    const children = node?.children?.[0]?.data;
    if (!children) return;

    if (node.type === "tag" && node.name === "button") {
      return <StyledButton>{node.children?.[0].data}</StyledButton>;
    }
    if (node.type === "tag" && (node.name === "p" || node.name === "span")) {
      return <StyledParagraph type="size-M-light">{children}</StyledParagraph>;
    }
    if (node.type === "tag" && node.name === "h1") {
      return <StyledTitle order={1}>{children}</StyledTitle>;
    }
    if (node.type === "tag" && node.name === "h2") {
      return <StyledTitle order={2}>{children}</StyledTitle>;
    }
    if (node.type === "tag" && node.name === "h3") {
      return <StyledTitle order={3}>{children}</StyledTitle>;
    }
    if (node.type === "tag" && node.name === "h4") {
      return <StyledTitle order={4}>{children}</StyledTitle>;
    }
    if (node.type === "tag" && node.name === "h5") {
      return <StyledTitle order={5}>{children}</StyledTitle>;
    }
    if (node.type === "tag" && node.name === "h6") {
      return <StyledTitle order={6}>{children}</StyledTitle>;
    }
  };

  return <div>{ReactHtmlParser(htmlString, { transform })}</div>;
}

export default HtmlContent;
