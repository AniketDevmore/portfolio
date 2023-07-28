import { createSlice } from "@reduxjs/toolkit";
import sortingVisulizer from "../images/sorting-visulizer.jpg";
import thaliApp from "../images/thali-app.jpg";
import tipCalculator from "../images/tip-calculator.jpg";
import farmCart from "../images/farmcart.jpg";

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
        name: "Thali App",
        hostLink: "https://create-your-thali-app.netlify.app/",
        githubLink: "https://github.com/AniketDevmore/ReduxThaliApp.git",
        description:
          "    The Thali App project is a web application that allows users to explore and order traditional Indian thali meals. It provides an interactive interface to browse through different thali options, customize meal preferences.The project utilizes HTML, CSS, JavaScript, React, and Redux to create an immersive and responsive user interface. HTML structures the content, CSS enhances the visual appeal and layout, JavaScript handles the logic, React powers the dynamic rendering, and Redux manages the state of the application.",
        img: thaliApp,
      },
      {
        name: "Tip Calculator",
        hostLink: "https://tip-calculator-react-d8a3de.netlify.app/",
        githubLink: "https://github.com/AniketDevmore/reactTipCalculator.git",
        description:
          "   The Tip Calculator project is a user-friendly web application that helps calculate the appropriate tip amount based on the bill total and desired tip percentage. It aims to simplify the process of determining tips, providing users with a convenient tool for accurate calculations.The project utilizes HTML, CSS, JavaScript, and react to create an intuitive and responsive user interface. HTML is responsible for structuring the content, CSS is used for styling and layout, and JavaScript handles the logic and calculations of the tip calculator. ",
        img: tipCalculator,
      },
      {
        name: "Farm Cart (Work-in-Progress)",
        hostLink: "https://github.com/AniketDevmore/AgroShop.git",
        githubLink: "https://github.com/AniketDevmore/AgroShop.git",
        description:
          "The Farm Cart Agro Chemicals Purchase App is a comprehensive web application that facilitates the purchase of agrochemicals and agricultural inputs by farmers. It connects farmers directly with reliable suppliers, offering a convenient platform to browse, compare, and order agrochemical products. With its user-friendly interface and secure transaction process, this project aims to support farmers in obtaining essential inputs for their agricultural practices.",
        img: farmCart,
      },
      {
        name: "",
        hostLink: "",
        githubLink: "",
        description: "",
      },
      //   {
      //     name: "",
      //     hostLink: "",
      //     githubLink: "",
      //     description: "",
      //   },
      //   {
      //     name: "",
      //     hostLink: "",
      //     githubLink: "",
      //     description: "",
      //   },
    ],
  },
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
