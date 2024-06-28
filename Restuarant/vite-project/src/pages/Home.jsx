import React from 'react';
import Layout from '../Layouts/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  const backgroundImageUrl = 'https://img.freepik.com/free-psd/fast-food-concept-banner-template_23-2148777964.jpg';

  return (
    <Layout>
      <div className="home bg-cover bg-no-repeat h-screen	d-flex justify-center items-start	flex-col	bg-center		" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="headerContainer ml-8">
          <h1 className='justify-center items-center	font-bold	text-4xl	'>Restaurant Website</h1>
          <p className='mt-4 text-xl font-semibold		'>Best Food in India</p>
          <Link to='/menu'>
            <button className='mt-4 border-8 bg-black text-white border-black rounded-md hover:text-green-300'>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
