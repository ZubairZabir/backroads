import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <Title title="about" subTitle="us" />
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At Backroads, we are dedicated to making travel accessible and
            enjoyable for everyone. We offer unique and affordable tour plans to
            stunning destinations worldwide. Our team of travel experts designs
            each tour to provide authentic and enriching experiences, ensuring
            you explore off-the-beaten-path locations and immerse yourself in
            local cultures.
          </p>
          <p>
            We cater to diverse interests and budgets, offering a range of tours
            from beach getaways to mountain treks and city tours. Our commitment
            to quality and affordability allows you to enjoy your dream vacation
            without overspending. Join us and let Backroads guide you to the
            world's hidden gems.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
