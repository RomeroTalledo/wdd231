import { byuiCourse } from "./course.mjs";
import { renderSections } from "./output.mjs";

export function setSectionSelection() {
  const sectionSelect = document.querySelector("#sectionNumber");

  byuiCourse.sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = section.sectionNumber;
    sectionSelect.appendChild(option);
  });
}

export function setSectionButtons() {
  document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
  });

  document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
  });
}
