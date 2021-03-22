const projects = [
  {
    id: 1,
    name: "Refactor Main Web App",
    isActive: false,
  },
  {
    id: 2,
    name: "The LOTRY App",
    isActive: false,
  },
  {
    id: 3,
    name: "Time Tracker",
    isActive: true,
  },
  {
    id: 4,
    name: "Payroll Runner",
    isActive: true,
  },
];

const sortedProjects = projects.sort((a, b) => a.id - b.id);
console.log("[Sorted Projects]\n", sortedProjects);

const activeProjects = sortedProjects.filter((project) => {
  return project.isActive;
});
console.log("[Active Projects]\n", activeProjects);
