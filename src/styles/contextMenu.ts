/*!
 * Copyright (C) 2018-2020  Zachary Kohnen (DusterTheFirst)
 */

import { Item } from "react-contexify";
import styled, { createGlobalStyle } from "styled-components";

/** Global styles for the context menu */
export const ContextMenuStyles = createGlobalStyle`
    .react-contexify {
        position: fixed;
        opacity: 0;
        user-select: none;
        box-sizing: border-box;

        padding: 10px 10px;
        background-color: #1a1a1a;
        box-shadow: 5px 5px 15px #00000066;

        border-radius: 3px;

        cursor: pointer;

        & &__submenu {
            position: absolute;
            top: 0;
            pointer-events: none;
            transition: opacity 0.275s;

            background-color: #282828fa;
        }

        &__submenu-arrow {
            font-size: 12px;
            position: absolute;
            right: 10px;
            line-height: 22px;
        }

        &__separator {
            float: left;
            width: 100%;
            height: 1px;
            cursor: default;
            margin: 4px 0;

            background-color: #666666;
        }

        &__item {
            font-size: 14px;

            color: #b8b8b8;
            font-weight: bold;

            cursor: pointer;
            position: relative;

            &:not(&--disabled):hover > &__data {
                color: inherit;
                background-color: #313131;
            }

            &:not(&--disabled):hover > .react-contexify__submenu {
                pointer-events: initial;
                opacity: 1;
            }

            &--disabled {
                cursor: default;
                opacity: .5;
            }

            &__data {
                min-width: 100px;
                padding: 6px 12px;
                display: flex;
                text-align: left;
                white-space: nowrap;
                color: inherit;
                position: relative;
            }

            &__icon {
                font-size: 20px;
                margin-right: 8px;
                width: 12px;
                text-align: center;
            }
        }
    }
`;

/** An item that does a dangerous action */
export const DangerItem = styled(Item)`
    color: #f04747 !important;
`;