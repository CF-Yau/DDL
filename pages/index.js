import React from 'react';

import { client } from '../lib/client';
import {Product, FooterBanner, HeroBanner, Hero,Banner,Slider, Navbar,Notify,FAQ} from '../components';



const Home = ({ products, bannerData }) => (
  <div>
    
    
    <Slider />
    {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>
     */}
     <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Choose your path to the perfect desktop
      </h2>

      <p class="text-xl mt-4 max-w-md mx-auto text-gray-400">
        use our website to
        bulid the dream place
      </p >
    </div>
    </div>

    <div className="products-container ">
      
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    
    <Hero/>

   
    

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    {/* <Notify/> */}
    <FAQ/>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
