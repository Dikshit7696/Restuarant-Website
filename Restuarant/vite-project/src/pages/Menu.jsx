import React from 'react';
import Layout from '../Layouts/Layout';
import burger from '../assets/images/burger.jpeg';
import chole from '../assets/images/Chole Bhature.jpeg';
import dosa from '../assets/images/Dosa.jpeg';
import chowmein from '../assets/images/Chow mein.jpeg';
import momos from '../assets/images/Momos.jpeg';
import pavbhaji from '../assets/images/Pav Bhaji.jpeg';
import pizza from '../assets/images/pizza.jpeg';
import sandwich from '../assets/images/sandwich.jpeg';
import springroll from '../assets/images/Spring Roll.jpeg';
import shakes from '../assets/images/Shakes.jpeg';
import fries from '../assets/images/French Fries.jpeg'
import drinks from '../assets/images/Soft Drinks.jpeg'

const menuItems = [
  { img: burger, alt: 'burger', name: 'Burger', description: 'A juicy burger with lettuce, tomato, and cheese.' },
  { img: dosa, alt: 'dosa', name: 'Dosa', description: 'A crispy dosa served with sambar and coconut chutney.' },
  { img: chole, alt: 'chole', name: 'Chole Bhature', description: 'Spicy chole served with fluffy bhature.' },
  { img: chowmein, alt: 'chowmein', name: 'Chow Mein', description: 'Stir-fried noodles with vegetables and chicken.' },
  { img: momos, alt: 'momos', name: 'Momos', description: 'Steamed momos filled with minced meat and spices.' },
  { img: pavbhaji, alt: 'pavbhaji', name: 'Pav Bhaji', description: 'A spicy blend of vegetables served with buttered pav.' },
  { img: pizza, alt: 'pizza', name: 'Pizza', description: 'A cheesy pizza topped with pepperoni and olives.' },
  { img: sandwich, alt: 'sandwich', name: 'Sandwich', description: 'A club sandwich with ham, cheese, and veggies.' },
  { img: springroll, alt: 'springroll', name: 'Spring Roll', description: 'Crispy spring rolls filled with vegetables.' }, 
  { img: fries, alt:'fries', name:'Fries', description:'Fries are often salted and served with other items.'},
  { img: shakes, alt: 'shakes', name: 'Shakes', description: 'A creamy milkshake with a choice of flavors.' },
  { img: drinks, alt:'drinks', name:'Soft Drinks', description:'soft drink, any of a class of nonalcoholic beverages.'}
];

const Menu = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-5 p-6">
        {menuItems.map((item) => (
          <div >
            <img src={item.img} alt={item.alt} className="w-80 h-auto rounded-lg shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer	" />
            <div className="text-center mt-2">
              <h3 className="font-semibold cursor-pointer	">{item.name}</h3>
              <p className="text-sm text-gray-600 ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Menu;
