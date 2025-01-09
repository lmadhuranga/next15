'use client';


interface HomePageProps {
  data: any;
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div>
      {JSON.stringify(data)}  
      <h1>Home Page</h1> 
    </div>
  );
};

export const generateMetadata = async () => {
  return { title: 'Users Page' };
}

export default HomePage;