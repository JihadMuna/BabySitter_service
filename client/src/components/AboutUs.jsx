import React from "react";
import aboutImage from "../assets/about.jpg";

function AboutUs() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center m-8">
        <img src={aboutImage} alt="about-image" />
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">
          Welcome to BabySitter Service
        </h3>
        <p className="mb-4">
          BabySitter Service is a secure, friendly, focused, and comfortable
          platform that enables creating a connection between employers and job
          seekers in the domains of child care.
        </p>
        <br />
        <h3 className="text-2xl font-bold mb-4">And what about job seekers?</h3>
        <p className="mb-4">
          BabySitter Service is a two-sided platform that enables employers to
          publish jobs and enables job seekers to find a job easily and
          effectively.
        </p>
        <br />
        <h3 className="text-2xl font-bold mb-4">Who are we?</h3>
        <p className="mb-4">
          We launched BabySitter Service in 2024, and since then, Helpbook has
          helped tens of thousands of babysitters and families along with other
          employers. We are always thinking of new ways to improve. Have a
          suggestion for improvement, question, request, problem? You are
          invited to contact us.
        </p>
        <br />
        <h3 className="text-2xl font-bold mb-4">Our big advantage?</h3>
        <p className="mb-4">
          Information - BabySitter Service provides a vast amount of information
          about each candidate based on a detailed questionnaire. The candidates
          have an option to upload a photo, video, and recorded interview with
          recommenders. Moreover, there is information provided by the wisdom of
          the crowd: employers that purchased a package for finding workers can
          write a review about candidates that previously worked for them. The
          detailed information increases employers’ chances to effectively find
          credible workers, and candidates’ chances to find the exact job they
          were looking for. Organizing and managing the information - Helpbook
          offers a smart search system with various filtering options, a system
          for managing and marking information, and other options for managing
          and making the search effective.
        </p>
        <br />
        <h3 className="text-2xl font-bold mb-4">What about safety?</h3>
        <p className="mb-4">
          It is important for us to emphasize that Helpbook is not responsible
          for content the users upload, as well as their reliability,
          credibility, or legality, or any action that is done during the
          connection with them. The users need to check and assure the
          credibility of the information according to their judgment in order to
          make a suitable decision.
        </p>
        <h3 className="text-l font-bold mb-4">
          And this is only the beginning…
        </h3>{" "}
        <br />
        <h3 className="text-2xl font-bold mb-4">
          Why choose BabySitter Service ?
        </h3>
        <p>
          BabySitter Service offers a vast amount of candidates and job ads that
          can suit your needs, so you can find exactly what you’re looking for.
          Good Luck :)
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
