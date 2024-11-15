import React from "react";
import { FocusTrap, Modal, Table } from "@mantine/core";

import SectionContainer from "@/components/SectionContainer";

import classes from "./SizeGuideModal.module.css";
import { ProductContentType } from "@/sanity/types/documents/ProductContentType";
import StyledParagraph from "@/components/StyledParagraph";
import StyledIconButton from "@/components/StyledIconButton";
import { IconX } from "@tabler/icons-react";
import StyledTitle from "@/components/StyledTitle";

type SizeGuideModalType = {
  isOpen: boolean;
  handleClose: () => void;
  sizeChart: ProductContentType["sizeChart"];
};

const SizeGuideModal: React.FunctionComponent<SizeGuideModalType> = ({
  isOpen,
  handleClose,
  sizeChart,
}) => {
  console.log("sizeChart:", sizeChart);

  const theads = sizeChart?.rows[0].cells;

  const rows = sizeChart?.rows.slice(1).map((row, index) => (
    <Table.Tr key={row.cells[0]}>
      {row.cells.map((cell, index) => (
        <Table.Td key={"bep"}>
          <StyledParagraph
            type={index === 0 ? "size-S-semi-bold" : "size-S-light"}
            alignment={index === 0 ? "left" : "center"}
          >
            {cell}
          </StyledParagraph>
        </Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <Modal.Root
      opened={isOpen}
      onClose={handleClose}
      zIndex={999}
      centered
      radius={0}
      className={classes["size-guide-modal__root"]}
    >
      <Modal.Overlay transitionProps={{ transition: "slide-down" }} />
      <Modal.Content
        className={classes["size-guide-modal__content"]}
        radius={0}
        transitionProps={{ transition: "slide-down" }}
      >
        <Modal.Body className={classes["size-guide-modal__body"]}>
          <FocusTrap.InitialFocus />
          <div className={classes["size-guide-modal__close-button"]}>
            <StyledIconButton
              icon={<IconX stroke="1px" />}
              onClick={handleClose}
            />
          </div>
          <div className={classes["size-guide-modal__header"]}>
            <StyledTitle order={3}>Size guide</StyledTitle>
          </div>
          {sizeChart?.rows.length > 0 && (
            <Table withColumnBorders withRowBorders borderColor="#DED4CC">
              <Table.Thead>
                <Table.Tr>
                  {theads.map((thead, index) => {
                    return (
                      <Table.Th key={thead}>
                        <StyledParagraph
                          type="size-S-semi-bold"
                          alignment={index === 0 ? "left" : "center"}
                        >
                          {thead}
                        </StyledParagraph>
                      </Table.Th>
                    );
                  })}
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default SizeGuideModal;
