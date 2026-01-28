import { byuiCourse } from "./course.mjs";
import { setTitle, renderSections } from "./output.mjs";
import { setSectionSelection, setSectionButtons } from "./sections.mjs";

setTitle(byuiCourse);
setSectionSelection();
renderSections(byuiCourse.sections);
setSectionButtons();
