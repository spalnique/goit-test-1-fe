import Section from '../shared/Section.jsx';
import image from '../assets/images/camping-car.jpeg';

const Home = () => {
  return (
    <Section>
      <div
        style={{
          backgroundImage: `url(${image})`,
          width: '100%',
          height: '600px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: '0 auto',
        }}></div>
    </Section>
  );
};

export default Home;
