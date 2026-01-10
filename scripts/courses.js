// COURSES

const courses = [
  { code: "WDD 130", credits: 3, completed: true },
  { code: "WDD 231", credits: 3, completed: false },
  { code: "WDD 230", credits: 3, completed: true },
  { code: "CSE 121", credits: 4, completed: true },
];

const courseList = document.querySelector("#courseList");
const totalCredits = document.querySelector("#totalCredits");

// DISPLAY FUNCTION

function displayCourses(courseArray) {
  courseList.innerHTML = "";

  courseArray.forEach((course) => {
    const li = document.createElement("li");
    li.textContent = `${course.code} (${course.credits} credits)`;

    if (course.completed) {
      li.style.fontWeight = "bold";
      li.style.color = "green";
    }

    courseList.appendChild(li);
  });

  const credits = courseArray.reduce(
    (total, course) => total + course.credits,
    0
  );

  totalCredits.textContent = credits;
}

displayCourses(courses);

// COURSE FILTER

document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
  displayCourses(courses.filter((course) => course.code.startsWith("WDD")));
});

document.querySelector("#cse").addEventListener("click", () => {
  displayCourses(courses.filter((course) => course.code.startsWith("CSE")));
});

// DAY OF MODIFICATION

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  "Last Modified: " + document.lastModified;

// MENU

const hamButton = document.querySelector("#ham-btn");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});
