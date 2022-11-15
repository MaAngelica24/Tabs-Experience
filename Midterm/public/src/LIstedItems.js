import React from "react";
import { Button } from "./Btn";
import { AddButton, SubtractButton } from "./addSubBtn";
import { P } from "./P";
import { Gray } from "./GlobalStyles";
import styled from "styled-components";

export const ListedItems = ({
    items,
    increaseCount,
    decreaseCount,
    addToCart
  }) => (
    <Wrapper>
        {items.map((item, i) => (
            <Column key={item,name}>

            </Column>
        ))}
    </Wrapper>
  )