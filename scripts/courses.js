const courses = [
  { code: "WDD 130", credits: 3, completed: true },
  { code: "WDD 231", credits: 3, completed: false },
  { code: "WDD 230", credits: 3, completed: true },
  { code: "CSE 121", credits: 4, completed: true }
];

const courseList = document.querySelector("#courseList");
const totalCredits = document.querySelector("#totalCredits");

function displayCourses(courseArray) {
  courseList.innerHTML = "";

  courseArray.forEach(course => {
    const li = document.createElement("li");
    li.textContent = `${course.code} (${course.credits} credits)`;

    if (course.completed) {
      li.style.color = "green";
      li.style.fontWeight = "bold";
    }

    courseList.appendChild(li);
  });

  const credits = courseArray.reduce(
    (sum, course) => sum + course.credits,
    0
  );

  totalCredits.textContent = credits;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
  displayCourses(courses.filter(course => course.code.startsWith("WDD")));
});

document.querySelector("#cse").addEventListener("click", () => {
  displayCourses(courses.filter(course => course.code.startsWith("CSE")));
});
