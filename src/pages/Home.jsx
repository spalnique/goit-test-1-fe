import background from '../assets/images/camping-car.jpeg';
import Container from '../shared/Container.jsx';
import Section from '../shared/Section.jsx';

const Home = () => {
  return (
    <Section>
      <Container>
        <h1>Home</h1>
        <img src={background} alt="background" />
      </Container>
    </Section>
  );
};

export default Home;
