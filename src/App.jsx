import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <section className="container">
      <div className="clock_content">
        <h1>We are almost there</h1>
        <h3 className="title">
          Stay tuned for something amazing New With Evidence.
        </h3>
        <FlipClockCountdown
          className="flip-clock"
          to={new Date().getTime() + 30 * 24 * 3600 * 1000}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="button">Notify Me</button>
      </div>
    </section>
  );
}

export default App;
