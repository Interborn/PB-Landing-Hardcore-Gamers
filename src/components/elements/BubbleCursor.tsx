'use client';

import { useEffect } from "react";

const BubbleCursor = () => {
  useEffect(() => {
    // Ensure no horizontal overflow on the body
    document.body.style.overflowX = 'hidden';

    const colours = [
      "rgba(56, 189, 248, 0.8)",  // Brighter Light Blue
      "rgba(96, 165, 250, 0.8)",  // Sky Blue
      "rgba(125, 211, 252, 0.8)", // Light Cyan
      "rgba(165, 243, 252, 0.8)", // Bright Turquoise
      "rgba(240, 249, 255, 0.8)"  // Very Light Blue
    ]; 
    const bubbles = 66;
    const overOrUnder = "over"; // can be "over" or "under"
    let x = 400,
      ox = 400;
    let y = 300,
      oy = 300;
    let swide = window.innerWidth;
    let shigh = window.innerHeight;
    let sleft = 0,
      sdown = 0;

    // Arrays to store bubble properties
    const bubb: HTMLDivElement[] = [];
    const bubbx: number[] = []; // X position
    const bubby: number[] = []; // Y position
    const bubbs: number[] = []; // Size
    const bubsx: number[] = []; // X velocity
    let sploosh: any = false;

    const setScroll = () => {
      sdown =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      sleft =
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0;
    };

    const setWidth = () => {
      swide = window.innerWidth;
      shigh = window.innerHeight;
    };

    const createDiv = (height: string, width: string): HTMLDivElement => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.height = height;
      div.style.width = width;
      div.style.overflow = "hidden";
      div.style.backgroundColor = "transparent";
      return div;
    };

    const bubble = () => {
      if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
        ox = x;
        oy = y;
        for (let c = 0; c < bubbles; c++) {
          if (!bubby[c]) {
            // Initialize bubble properties
            bubbx[c] = x;
            bubby[c] = y - 3;
            bubbs[c] = 3;
            bubsx[c] = (Math.random() * 4) - 2; // Random horizontal speed between -2 and 2

            // Ensure initial position doesn't exceed viewport boundaries
            if (bubbx[c] < 0) bubbx[c] = 0;
            if (bubbx[c] > swide - bubbs[c]) bubbx[c] = swide - bubbs[c];

            bubb[c].style.left = bubbx[c] + "px";
            bubb[c].style.top = bubby[c] + "px";
            bubb[c].style.width = "3px";
            bubb[c].style.height = "3px";
            bubb[c].style.visibility = "visible";
            break;
          }
        }
      }
      for (let c = 0; c < bubbles; c++) {
        if (bubby[c]) updateBubb(c);
      }
      setTimeout(bubble, 40);
    };

    const updateBubb = (i: number) => {
      if (bubby[i]) {
        // Update positions
        bubby[i] -= bubbs[i] / 2 + (i % 2);
        bubbx[i] += bubsx[i];

        // Bounce off left boundary
        if (bubbx[i] <= 0) {
          bubbx[i] = 0;
          bubsx[i] = -bubsx[i];
        }
        // Bounce off right boundary
        if (bubbx[i] >= swide - bubbs[i]) {
          bubbx[i] = swide - bubbs[i];
          bubsx[i] = -bubsx[i];
        }

        if (
          bubby[i] > sdown &&
          bubby[i] < sdown + shigh
        ) {
          if (Math.random() < (bubbs[i] / shigh) * 2 && bubbs[i]++ < 8) {
            // Increase size
            bubb[i].style.width = bubbs[i] + "px";
            bubb[i].style.height = bubbs[i] + "px";
          }
          // Update bubble position
          bubb[i].style.top = bubby[i] + "px";
          bubb[i].style.left = bubbx[i] + "px";
        } else {
          // Hide bubble when it moves out of view vertically
          bubb[i].style.visibility = "hidden";
          bubby[i] = 0;
        }
      }
    };

    const splash = () => {
      ox = -1;
      oy = -1;
      sploosh = setTimeout(splash, 100);
    };

    const mouseMove = (e: MouseEvent) => {
      y = e.pageY;
      x = e.pageX;
    };

    const initialize = () => {
      for (let i = 0; i < bubbles; i++) {
        const rats = createDiv("3px", "3px");
        rats.style.visibility = "hidden";
        rats.style.zIndex = overOrUnder === "over" ? "1001" : "0";

        let div = createDiv("auto", "auto");
        rats.appendChild(div);
        div.style.top = "1px";
        div.style.left = "0px";
        div.style.bottom = "1px";
        div.style.right = "0px";
        div.style.borderLeft = "1px solid " + colours[3];
        div.style.borderRight = "1px solid " + colours[1];

        div = createDiv("auto", "auto");
        rats.appendChild(div);
        div.style.top = "0px";
        div.style.left = "1px";
        div.style.right = "1px";
        div.style.bottom = "0px";
        div.style.borderTop = "1px solid " + colours[0];
        div.style.borderBottom = "1px solid " + colours[2];

        div = createDiv("auto", "auto");
        rats.appendChild(div);
        div.style.left = "1px";
        div.style.right = "1px";
        div.style.bottom = "1px";
        div.style.top = "1px";
        div.style.backgroundColor = colours[4];
        div.style.opacity = "0.5";

        document.body.appendChild(rats);
        bubb[i] = rats; // Store the HTMLDivElement
      }

      setScroll();
      setWidth();
      bubble();
    };

    // Event listeners and cleanup
    window.addEventListener("resize", setWidth);
    window.addEventListener("scroll", setScroll);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mousedown", splash);
    document.addEventListener("mouseup", () => clearTimeout(sploosh));

    initialize();

    return () => {
      // Clean up event listeners on component unmount
      window.removeEventListener("resize", setWidth);
      window.removeEventListener("scroll", setScroll);
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mousedown", splash);
      document.removeEventListener("mouseup", () => clearTimeout(sploosh));

      // Reset the overflow-x when component unmounts
      document.body.style.overflowX = '';
    };
  }, []);

  return null;
};

export default BubbleCursor;