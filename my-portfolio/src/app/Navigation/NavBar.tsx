"use client";
import React, { useState } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import "./NavBar.css";

interface Props {
  allTabs: string[];
}

const Tabs: React.FC<Props> = ({ allTabs }) => {
  const [currentTab, setCurrentTab] = useState<string>("ABOUT");

  const handleClick = (tab: string) => {
    const tabClicked = tab.toUpperCase();
    setCurrentTab(tabClicked);
  };

  const renderCurrentTab = (tab: string) => {
    switch (tab) {
      case "ABOUT":
        return <About></About>;
      case "CONTACT":
        return <Contact></Contact>;
      case "RESUME":
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <div className="tabContainer">
      <div className="tabs fixed right-0 top-0 lg:justify-center lg:w-full py-4 px-5 flex bg-purple-300 border-b border-neutral-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        {allTabs.map((tab, idx) => (
          <button
            className={`tabLinks group rounded-lg px-5 py-4 transition-colors hover:border-purple-300 hover:bg-purple-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
              currentTab === tab.toUpperCase() ? "activeTab" : ""
            } `}
            key={idx}
            onClick={() => {
              handleClick(tab);
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="tabSection">{renderCurrentTab(currentTab)}</div>
    </div>
  );
};

export default Tabs;
