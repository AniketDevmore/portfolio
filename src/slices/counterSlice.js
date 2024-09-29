import { createSlice } from "@reduxjs/toolkit";
import sortingVisulizer from "../../public/images/sorting-visulizer.jpg";
import thaliApp from "../../public/images/thali-app.jpg";
import tipCalculator from "../../public/images/tip-calculator.jpg";
import farmCart from "../../public/images/farmcart.jpg";
import toDo from "../../public/images/toDo.png";
import dicee from "../../public/images/dicee.png";
import expenses from "../../public/images/expenses.png";
import drum from "../../public/images/drum.png";
import stopWatch from "../../public/images/stopWatch.png";
import furnitureShop from "../../public/images/furnitureShop.png";
import quickNotes from "../../public/images/quickNotes.png";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    project: [
      {
        name: "Sorting visualizer",
        hostLink: "https://sorting-visulizer-db51d7.netlify.app/",
        githubLink: "https://github.com/AniketDevmore/sortingVisualizer.git",
        description:
          "The Sorting Visualizer project is an interactive web application that allows users to visualize various sorting algorithms in action. By presenting the sorting process in a visual and animated format, this project aims to enhance understanding and intuition about how different sorting algorithms work.The project utilizes HTML, CSS, and JavaScript to create an engaging and interactive user experience. HTML is responsible for structuring the content, CSS is used for styling and layout, and JavaScript handles the logic and animations of the sorting algorithms.",
        img: sortingVisulizer,
      },
      {
        name: "Furniture Shop",
        hostLink: "https://furniture-shop-cyan.vercel.app/",
        githubLink: "https://github.com/AniketDevmore/FurnitureShop.git",
        description:
          "The Furniture Shop Official Website is the online representation of our renowned furniture store. It serves as the digital front door to shop, providing customers with an engaging and informative platform for exploring our range of furniture and home decor products. This project is designed to offer a seamless and immersive experience that reflects shop commitment to quality, style, and customer satisfaction.The project utilizes HTML, CSS, JavaScript, React, and Redux to create an immersive and responsive user interface. HTML structures the content, CSS enhances the visual appeal and layout, JavaScript handles the logic, React powers the dynamic rendering, and Redux manages the state of the application.",
        img: furnitureShop,
      },
      // {
      //   name: "Thali App",
      //   hostLink: "https://create-your-thali-app.netlify.app/",
      //   githubLink: "https://github.com/AniketDevmore/ReduxThaliApp.git",
      //   description:
      //     "    The Thali App project is a web application that allows users to explore and order traditional Indian thali meals. It provides an interactive interface to browse through different thali options, customize meal preferences.The project utilizes HTML, CSS, JavaScript, React, and Redux to create an immersive and responsive user interface. HTML structures the content, CSS enhances the visual appeal and layout, JavaScript handles the logic, React powers the dynamic rendering, and Redux manages the state of the application.",
      //   img: thaliApp,
      // },
      {
        name: "Tracker App",
        hostLink: "https://drive.google.com/file/d/1qmV3Y3oGKHvKteQy33d_MQqCgtoxTpLK/view?usp=sharing",
        githubLink: "https://github.com/AniketDevmore/TrackerApp",
        description:
          "The Tracker app is designed to help you take control of your daily spending with a simple, efficient, and user-friendly interface. Built using React Native and powered by Firebase. Stay informed with a detailed view of your expenses from the last 7 days, helping you monitor your recent spending habits. Easily manage your expenses with options to add, modify, or remove entries as your financial situation changes.",
        img: expenses,
      },
      {
        name: "Dicee Challenge",
        hostLink: "https://dicee-challenge-afb40c.netlify.app/",
        githubLink: "https://github.com/AniketDevmore/DiceeChallenge.git",
        description:
          "The Dice Challenge project is an interactive web application that simulates a dice game. It allows users to roll two dice and compare the results to determine the winner. With its engaging interface and random outcome generation, this project provides a fun and exciting gaming experience.The project utilizes HTML, CSS, and JavaScript to create an interactive and visually appealing user interface. HTML is responsible for structuring the content, CSS is used for styling and layout, and JavaScript handles the logic of the dice game.",
        img: dicee,
      },
      {
        name: "Tip Calculator",
        hostLink: "https://tip-calculator-react-d8a3de.netlify.app/",
        githubLink: "https://github.com/AniketDevmore/reactTipCalculator.git",
        description:
          "   The Tip Calculator project is a user-friendly web application that helps calculate the appropriate tip amount based on the bill total and desired tip percentage. It aims to simplify the process of determining tips, providing users with a convenient tool for accurate calculations.The project utilizes HTML, CSS, JavaScript, and react to create an intuitive and responsive user interface. HTML is responsible for structuring the content, CSS is used for styling and layout, and JavaScript handles the logic and calculations of the tip calculator. ",
        img: tipCalculator,
      },
      // {
      //   name: "Farm Cart (Work-in-Progress)",
      //   hostLink: "https://github.com/AniketDevmore/AgroShop.git",
      //   githubLink: "https://github.com/AniketDevmore/AgroShop.git",
      //   description:
      //     "The Farm Cart Agro Chemicals Purchase App is a comprehensive web application that facilitates the purchase of agrochemicals and agricultural inputs by farmers. It connects farmers directly with reliable suppliers, offering a convenient platform to browse, compare, and order agrochemical products. With its user-friendly interface and secure transaction process, this project aims to support farmers in obtaining essential inputs for their agricultural practices.",
      //   img: farmCart,
      // },
      // {
      //   name: "ToDo App",
      //   hostLink: "https://todo-app-994438.netlify.app/",
      //   githubLink: "https://github.com/AniketDevmore/ReactTodoApp.git",
      //   description:
      //     "The ToDo App project is a web application that helps users manage their tasks and stay organized. It provides a user-friendly interface to add, update, and delete tasks, as well as mark them as complete. With its intuitive design and dynamic functionality, this project offers a convenient solution for keeping track of daily tasks and responsibilities.The project utilizes HTML, CSS, JavaScript, and React to create an interactive and responsive user interface. HTML structures the content, CSS styles and enhances the layout, JavaScript handles the logic, and React powers the dynamic rendering and state management of the application.",
      //   img: toDo,
      // },

      {
        name: "Drum Kit",
        hostLink: "https://drum-kit-e7be9d.netlify.app/",
        githubLink: "https://github.com/AniketDevmore/DrumKit.git",
        description:
          "    The Drum Kit project is an interactive web application that emulates a virtual drum set. It allows users to play different drum sounds by pressing corresponding keys on their keyboard or by clicking on the drum pads on the screen. With its realistic sound effects and dynamic visual feedback, this project provides a fun and immersive drumming experience.The project utilizes HTML, CSS, and JavaScript to create an engaging and responsive user interface. HTML is responsible for structuring the content, CSS is used for styling and layout, and JavaScript handles the logic of playing the drum sounds.",
        img: drum,
      },
      {
        name: "Stop Wtch",
        hostLink: "https://github.com/AniketDevmore/StopWatch.git",
        githubLink: "https://github.com/AniketDevmore/StopWatch.git",
        description:
          "The Stopwatch App is a simple and user-friendly web application that emulates a digital stopwatch. It provides users with the ability to start, stop, and reset the stopwatch, allowing them to measure elapsed time accurately. With its intuitive design and real-time updates, this project offers a convenient solution for timing various activities and tasks.The project utilizes HTML, CSS, and JavaScript to create an engaging and interactive user experience. HTML is responsible for structuring the content, CSS is used for styling and layout, and JavaScript handles the logic of the stop watch application.",
        img: stopWatch,
      },

      // {
      //   name: "Quick Notes",
      //   hostLink: "https://quick-notes-pi.vercel.app/",
      //   githubLink: "https://github.com/AniketDevmore/quickNotes.git",
      //   description:
      //     "The Quick Notes App is a user-friendly web application designed for efficient note-taking and organization. It offers a seamless and intuitive platform for users to create, edit, and manage their notes quickly and effectively. This project combines the power of Bootstrap and Material UI for a visually appealing and responsive user interface, while React JS and JavaScript provide dynamic functionality.",
      //   img: quickNotes,
      // },
      // {
      //   name: "",
      //   hostLink: "",
      //   githubLink: "",
      //   description: "",
      // },
      // {
      //   name: "",
      //   hostLink: "",
      //   githubLink: "",
      //   description: "",
      // },
    ],
  },
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
