"use client";
import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import "styles/TimeLine.css";

export default function Timeline({ cards }) {
  const items = [];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onCard = (x) => {
    if (typeof window !== "undefined") {
      window.open(x.link);
    }
  };

  const displayCards = [];
  for (let i = 0; i <= cards.length; i++) {
    const element = cards[i];
    if (element != undefined) {
      items.push({ title: element.period });
      displayCards.push(
        <div key={i} onClick={() => onCard(element)} className="container">
          <img src={element.img} className="proIMG" />
          <div className="center">{`${element.title}`}</div>
        </div>
      );
    }
  }

  return isClient ? (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardHeight={"auto"} // sets the height of the timeline card to 200px
        disableToolbar
        borderLessCards
        // disableClickOnCircle
        theme={{
          cardBgColor: "transparent",
          primary: "#FFFFFF",
          secondary: "#1A1A1A",

          titleColorActive: "#D9D9D9",
          titleColor: "#D9D9D9",
          iconBackgroundColor: "#D9D9D9",
        }}
        enableDarkToggle={true}
        fontSizes={{
          title: "1.19vw",
        }}
        classNames={{
          card: "card",
          title: "title",
        }}
      >
        {displayCards}
      </Chrono>
    </div>
  ) : (
    <></>
  );
}
