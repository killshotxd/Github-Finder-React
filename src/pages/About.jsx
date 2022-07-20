function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. Follow my
        Github for more...
        <strong>
          <a href="https://github.com/killshotxd"> Killshotxd</a>
        </strong>{" "}
        LinkedIn profile
        <strong>
          <a href="https://www.linkedin.com/in/mohd-hassan-11707a223">
            {" "}
            Mohd Hassan
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </>
  );
}

export default About;
