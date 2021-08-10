import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  background-color: #fff;
  margin: 8px;

  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0px;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  padding: 8px;
  margin-top: -5px;
  border: 1px solid #ccc;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
