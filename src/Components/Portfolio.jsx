/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TTBLE🎉",
    description:
      "This project is a web-based Examination Management System that automates scheduling, hall allocation, staff assignment, and user management. It reduces conflicts, supports repeat/pro-rata cases, and improves efficiency using role-based access and a modern tech stack for reliable exam administration",
    url: "https://github.com/rashmikanirml/ttble.git",
  },
  {
    title: "MINISTRY",
    description:
      "A online web application to automate all the tasks",
    url: "https://github.com/rashmikanirml/Ministry.git",
  },
  {
    title: "Gem-Management",
    description:
      "A SaaS-based gem marketplace platform where users can buy, sell, and manage gemstones, while administrators oversee operations, listings, and transactions",
    url: "https://github.com/rashmikanirml/Gem-Management.git",
  },
  {
    title: "AURA",
    description:
      "Aura is a modern vehicle marketplace web app for buying and selling cars  Users can browse listings, search and filter vehicles, and post their own cars. Built with Next.js, PostgreSQL, and Prisma for speed, scalability, and a smooth user experience.",
    url: "https://github.com/rashmikanirml/AURA.git",
  },
  {
    title: "MOLA",
    description:
      "MOLA (Smart Campus Operations Hub) is a full-stack web application built with Spring Boot and React to manage university facility bookings, maintenance tickets, and operational workflows with role-based access and OAuth 2.0 authentication.",
    url: "https://github.com/rashmikanirml/MOLA.git",
  },

   {
    title: "snakes-and-ladders",
    description:
      "Snakes and Ladders (Offline) is a Flutter-based mobile game that recreates the classic board game experience with simple controls and smooth gameplay. It supports local multiplayer and runs entirely without an internet connection.",
    url: "https://github.com/rashmikanirml/snakes-and-ladders.git",
  },

  {
    title: "Daily-habit-tracker",
    description:
      "A Flutter-based mobile Habit Tracker app that helps users build daily habits by adding tasks, marking them complete, and tracking daily progress. Data is stored locally using SharedPreferences",
    url: "https://github.com/rashmikanirml/Daily-habit-tracker.git",
  },

   {
    title: "HabitPro",
    description:
      "HabitPro is a premium-style habit tracker and daily routine planner built with React Native (Expo). Create habits with flexible schedules, track daily completions, build streaks, and view progress insights—all with a smooth, mobile-first experience.",
    url: "https://github.com/rashmikanirml/HabitPro.git",
  },

  
   {
    title: "Scroll",
    description:
      "React native mobile app",
    url: "https://github.com/rashmikanirml/Scroll.git",
  },

   {
    title: "BalanceX",
    description:
      "habit app",
    url: "https://github.com/rashmikanirml/BalanceX.git",
  },
  
  {
    title: "Allenato",
    description:
      "Fitness app with workoutroutines and daily habits tracker and BMI calculator",
    url: "https://github.com/rashmikanirml/Allenato.git",
  },

  
  {
    title: "Govi-go",
    description:
      "new ui/ux design done by using figma",
    url: "https://github.com/rashmikanirml/Govi-go.git",
  },

  {
    title: "AgriGo",
    description:
      "An application architecture developed from kotlin for sell agri products for a reliable price",
    url: "https://github.com/rashmikanirml/AgriGo.git",
  },

  {
    title: "FoodApp",
    description:
      "An application architecture developed from kotlin for sell food products for a reliable price",
    url: "https://github.com/rashmikanirml/AgriGo.git",
  },

  {
    title: "Examhub",
    description:
      "Sliit 1st yr 2nd sem group project",
    url: "https://github.com/rashmikanirml/Examhub.git",
  },




  {
    title: "FitMate",
    description:
      "FitMate is your all-in-one wellness app that counts steps, calculates BMI, tracks calories burned, reminds you to stay hydrated, and includes a mood journal plus a habit tracker—helping you stay active, mindful, and motivated every day toward a healthier lifestyle.",
    url: "https://github.com/rashmikanirml/FitMate.git",
  },




];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
