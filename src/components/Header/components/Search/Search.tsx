import React, { useState } from "react";
import { Modal } from "@mantine/core";

import SectionContainer from "@/components/SectionContainer";
import StyledIconButton from "@/components/StyledIconButton";
import StyledTextInput from "@/components/StyledTextInput";
import { SearchIcon, ArrowRightIconSmall } from "@/icons";

import classes from "./Search.module.css";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";

type SearchType = {
  isOpen: boolean;
  handleClose: () => void;
};

const Search: React.FunctionComponent<SearchType> = ({
  isOpen,
  handleClose,
}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Modal.Root
      opened={isOpen}
      onClose={handleClose}
      zIndex={200}
      yOffset={0}
      xOffset={0}
      radius={0}
      className={classes["search__root"]}
    >
      <Modal.Overlay transitionProps={{ transition: "slide-down" }} />
      <Modal.Content
        className={classes["search__content"]}
        radius={0}
        transitionProps={{ transition: "slide-down" }}
      >
        <Modal.Body className={classes["search__body"]}>
          <SectionContainer padding="XL">
            <StyledTextInput
              placeholder="Czego szukasz?"
              leftSection={<IconSearch stroke="1px" width={24} height={24} />}
              rightSection={
                <StyledIconButton
                  icon={<IconArrowRight stroke="1px" width={24} height={24} />}
                />
              }
              value={searchValue}
              onChange={(event) => setSearchValue(event.currentTarget.value)}
            />
          </SectionContainer>

          {/*<div className={classes["search__title"]}>*/}
          {/*  <StyledTitle order={2}>{`Wyniki dla ${searchValue}`}</StyledTitle>*/}
          {/*  <StyledTitle order={3}>(8)</StyledTitle>*/}
          {/*</div>*/}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default Search;
