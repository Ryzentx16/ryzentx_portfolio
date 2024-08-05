import Timeline from "comp/TimeLine";
import "styles/projects.css";

const cards = [
  {
    id: "1",
    period: "Jan 2021 - Sep 2023",
    title:
      "IMSK: IoT Monitoring System for Knitting Machines (Textile Industry)",
    img: `${process.env.BASE_PATH}/textile.png`,
    link: "https://github.com/stap20/Textile-APP",
  },
];

export default function projects() {
  return (
    <div className="container">
      <Timeline cards={cards} />
    </div>
  );
}
