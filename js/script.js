// Function to handle the scroll event
function handleScroll() {
    const navbar = document.getElementById("navbar");
    const scrollPosition = window.scrollY ;    
    const removeDisplay = document.querySelector(".launch")
    const navList = document.querySelector(".navlist")
    

    // Define the scroll threshold to trigger the color change
    const scrollThreshold =100; // Adjust this value as needed

    if (scrollPosition > scrollThreshold) {
        // Add a CSS class to change the background color
        navList.style.marginRight="0px"
        removeDisplay.style.transform="scale(1)";
        navbar.classList.add("navbar-scrolled");

        //for hovering the launch navbar
        removeDisplay.addEventListener("mouseenter", () => {
            removeDisplay.style.transform = "scale(1.1)";
        });

        removeDisplay.addEventListener("mouseleave", () => {
            removeDisplay.style.transform = "scale(1)";
        });


    } else {
        // Remove the CSS class to revert to the default background color
        navList.style.marginRight="-200px"
        removeDisplay.style.transform="scale(0)";
        navbar.classList.remove("navbar-scrolled");
    }    
}
// Call the function initially in case the page is loaded at a scrolled position
handleScroll();

let isScrollingUp = false;
let lastScrollPosition = 0;

// Attach the scroll event listener to the window
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition < lastScrollPosition) {
        // Scrolling up
        isScrollingUp = true;
    } else {
        // Scrolling down
        isScrollingUp = false;
    }

    lastScrollPosition = scrollPosition;

    if (isScrollingUp) {
        // If scrolling up, remove the class to revert to the default background color
        document.getElementById("navbar").classList.remove("navbar-scrolled");
    } else {
        handleScroll();
    }
    
});

//FOR HIDING THE TEXT
 
const elements = document.querySelectorAll(".gap-div");

// Add a click event listener to each "gap-div" element
elements.forEach((element) => {
  let isOpen = false; // Track whether the paragraph is currently open

  element.addEventListener("click", () => {
    // Toggle the visibility of paragraphs within the clicked element
    const clickedParagraphs = element.querySelectorAll(".hide");
    clickedParagraphs.forEach((paragraph) => {
      if (isOpen) {
        paragraph.style.display = "none";
      } else {
        paragraph.style.display = "flex";
      }
    });

    // Close other elements
    elements.forEach((otherElement) => {
      if (otherElement !== element) {
        const otherParagraphs = otherElement.querySelectorAll(".hide");
        otherParagraphs.forEach((paragraph) => {
          paragraph.style.display = "none";
        });
      }
    });

    // Update the isOpen state
    isOpen = !isOpen;
  });
});

//FOR IMAGE CHANGING


// JavaScript code for changing the image on element click
const imageContainer = document.querySelector(".image-container img");
const imageSources = {
  "VIKRAM S": "https://skyroot.in/images/Vikram-S.png",
  "VIKRAM I": "https://skyroot.in/images/vikram1.png",
  "VIKRAM II": "https://skyroot.in/images/vikram2.png",
  "VIKRAM III": "https://skyroot.in/images/vikram3.png",
};

// const elements = document.querySelectorAll(".gap-div");

// Add a click event listener to each "gap-div" element
elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    const elementName = element.querySelector(".rocket").textContent;
    const imageSrc = imageSources[elementName];
    imageContainer.src = imageSrc || "/images/default.png"; // Use default image if not found in the imageSources object
  });
});


const images = [
  "https://skyroot.in/images/c.jpg",
  "https://skyroot.in/images/cryo-firing.jpeg",
  "https://skyroot.in/images/Kalam-Firing.jpeg",
  "https://skyroot.in/images/liquid-firing.jpeg"
];

const descriptions = [
  {
      title: "MILESTONE ",
      number:"01",
      text: "INDIAN LAUNCH STARTUP SKYROOT SUCCESSFULLY TESTS ROCKET ENGINE FOR VIKRAM II",
      desc:"Hyderabad-based space tech start-up Skyroot Aeropsace , which last year became the first private company from the country to launch a rockey into space , on April 4 announced"
  },
  {
      title: "MILESTONE ",
      number:"02",
      text: "INDIA'S FIRST PRIVATE CRYOGENIC ENGINE TEST FIRED BY SKYROOT",
      desc:"In just over a year since they completed fabrication of a prototype engine , Skyroot Aerospace , a firm founded and led by former Isro scientists, has successfully tested India's first privately developed fully"
  },
  {
      title: "MILESTONE ",
      number:"03",
      text: "SKYROOT SUCCESSFULLY TEST FIRES INDIA'S FIRST PRIVATELY-MADE SOLID ROCKET STAGE",
      desc:"Rocket launch startup Skyroot is closing out 2020 with a key milestone in the  development program for their Vikram-I launch  vehicle"
  },
  {
      title: "MILESTONE ",
      number:"04",
      text: "INDIA'S SPACE TECH STARTUP SKYROOT SUCCESSDS WITH UPPER-STAGE ENGINE FIRE TEST",
      desc:"The private space launch indusrtry has expanded significantly since the debut of SpaceX , but some markets , like India , are just now getting the regulartory support to clear the way for private players to participate"
  }
];

let currentIndex = 0;
let countdown = 2; // Initial countdown time in seconds

function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = countdown;
  const timeLeftElement = document.querySelector(".time-left");
  const totalDuration = 2; // Total duration in seconds
  const percentageLeft = (countdown / totalDuration) * 100;
  timeLeftElement.style.width = percentageLeft + "%";
}

function changeContent() {
  currentIndex = (currentIndex + 1) % images.length;
  const image = document.querySelector(".image-change");
  const descriptionTitle = document.querySelector(".one-one"); // Update this selector for your title element
  const descriptionNumber = document.querySelector(".one-two");// Update this selector for your number element
  const descriptionText = document.querySelector(".one-three"); // Update this selector for your text element
  const descriptiondesc = document.querySelector(".one-four"); // Update this selector for your desc element


  // Update the image source
  image.src = images[currentIndex];

  // Update text for the description elements
  descriptionTitle.textContent = descriptions[currentIndex].title;
  descriptionNumber.textContent = descriptions[currentIndex].number;
  descriptionText.textContent = descriptions[currentIndex].text;
  descriptiondesc.textContent = descriptions[currentIndex].desc;

  countdown = 2; // Reset countdown timer
  updateCountdown();
}

// Automatically change image and description every 2 seconds
setInterval(() => {
  if (countdown > 0) {
      countdown--;
      updateCountdown();
  } else {
      changeContent();
  }
}, 2000); // Change every 2 seconds



function openPopup() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "block";
}


function closePopup() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "none";
}



// Define an array of image URLs to cycle through
const imageUrls = [
  "https://skyroot.in/images/careers01.jpeg",
  "https://skyroot.in/images/career2.jpeg",
  "https://skyroot.in/images/career3.jpeg",
  
  
];

const imgElement = document.querySelector(".image-container2");
let currentIndex1 = 0;

// Function to change the image
function changeImage() {
  imgElement.src = imageUrls[currentIndex1];
  currentIndex1 = (currentIndex1 + 1) % imageUrls.length;
}

// Set an interval to change the image every N milliseconds (e.g., every 5 seconds)
const interval = 5000; // Change image every 5 seconds (5000 milliseconds)
setInterval(changeImage, interval);



const rectangleBox = document.querySelector(".rectangle-box");
const descriptions2 = rectangleBox.querySelectorAll(".description");
const btnLeft = rectangleBox.querySelector(".btn-left");
const btnRight = rectangleBox.querySelector(".btn-right");

let currentIndex2 = 0;

function updateDescription(index) {
  descriptions2.forEach((description2, i) => {
    if (i === index) {
      description2.style.display = "block";
    } else {
      description2.style.display = "none";
    }
  });
}


updateDescription(currentIndex2);


btnLeft.addEventListener("click", () => {
  currentIndex2 = (currentIndex2 - 1 + descriptions2.length) % descriptions2.length;
  updateDescription(currentIndex2);
});


btnRight.addEventListener("click", () => {
  currentIndex2 = (currentIndex2 + 1) % descriptions2.length;
  updateDescription(currentIndex2);
});

const revealElements = document.querySelectorAll('.reveal');
        
function revealOnScroll() {
    revealElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('revealed');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();




