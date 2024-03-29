const routes = {
  home: { title: "Home", path: "/" },
  auth: { title: "Auth", path: "/auth" },
  admin: { title: "Admin", path: "/admin" },
  profile: { title: "Profile", path: "/profile" },
  aboutUs: { title: "About us", path: "/about_us" },
  contactUs: { title: "Contact us", path: "/contact_us" },
  courses: { title: "Courses", path: "/courses" },
  courseId: { title: "Course", path: (id = "courseId") => `/courses/${id}` },
};

export default routes;
