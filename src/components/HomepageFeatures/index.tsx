import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Information Theory",
    image: "img/math.png",
    description: (
      <>
        I study mathematics and information theory a lot because they support
        the IT field.
      </>
    ),
  },
  {
    title: "Development",
    image: "img/web.png",
    description: (
      <>
        I develop mainly ToB web application for a company. I'm in charge of the
        frontend, backend and building the infrastructure.
      </>
    ),
  },
  {
    title: "What I'm interested in",
    image: "img/interested.png",
    description: (
      <>
        I have recently become very interested in infrastructure development. I
        have been thinking about internet construction and AWS configurations.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
