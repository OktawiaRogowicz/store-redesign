import React, { ReactNode } from "react";
import ReactHtmlParser, { Transform } from "react-html-parser";
import HTMLReactParser, { DOMNode } from "html-react-parser";

import StyledButton from "../StyledButton";
import StyledParagraph from "../StyledParagraph";
import StyledTitle from "../StyledTitle";

function HtmlContent({ htmlString }: { htmlString: string }) {
  const transform = ({
    reactNode,
    domNode,
    index,
  }: {
    reactNode: ReactNode;
    domNode: DOMNode;
    index: number;
  }) => {
    console.log(
      "reactNode: ",
      reactNode,
      "domNode: ",
      domNode,
      "index: ",
      index,
    );
    //   const children = domNode?.children?.[0]?.data;
    //   if (!children) return;
    //
    //   if (domNode.type === "tag" && domNode.name === "button") {
    //     return <StyledButton>{domNode.children?.[0].data}</StyledButton>;
    //   }
    //   if (
    //     domNode.type === "tag" &&
    //     (domNode.name === "p" || domNode.name === "span")
    //   ) {
    //     return <StyledParagraph type="size-M-light">{children}</StyledParagraph>;
    //   }
    //   if (domNode.type === "tag" && domNode.name === "h1") {
    //     return <StyledTitle order={1}>{children}</StyledTitle>;
    //   }
    //   if (domNode.type === "tag" && domNode.name === "h2") {
    //     return <StyledTitle order={2}>{children}</StyledTitle>;
    //   }
    //   if (domNode.type === "tag" && domNode.name === "h3") {
    //     return <StyledTitle order={3}>{children}</StyledTitle>;
    //   }
    //   if (domNode.type === "tag" && domNode.name === "h4") {
    //     return <StyledTitle order={4}>{children}</StyledTitle>;
    //   }
    //   if (domNode.type === "tag" && domNode.name === "h5") {
    //     return <StyledTitle order={5}>{children}</StyledTitle>;
    //   }
    //   if (domNode.type === "tag" && domNode.name === "h6") {
    //     return <StyledTitle order={6}>{children}</StyledTitle>;
    //   }
  };

  return <div>{HTMLReactParser(htmlString, { transform })}</div>;
}

export default HtmlContent;
