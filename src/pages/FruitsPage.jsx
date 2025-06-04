import React, { useState } from 'react';
import Fruits from '../components/Fruits';

const FruitsPage = () => {
  const [activeTab, setActiveTab] = useState('fruits'); // State to manage active tab

  const fruits = [
      {
        "name": "Apple",
        "price": 120,
        "gst": "18%",
        "description": "A sweet and crisp red fruit rich in fiber and vitamin C, apples are not only delicious but also support heart health and digestion when enjoyed regularly.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
      },
      {
        "name": "Banana",
        "price": 40,
        "gst": "11%",
        "description": "A soft and sweet fruit packed with potassium and energy, bananas provide instant fuel and are excellent for maintaining muscle function and reducing fatigue.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
      },
      {
        "name": "Mango",
        "price": 150,
        "gst": "15%",
        "description": "Juicy and tropical king of fruits, perfect for summer, mangoes are rich in antioxidants and vitamins, making them both a treat and a health booster.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
      },
      {
        "name": "Strawberry",
        "price": 180,
        "gst": "38%",
        "description": "Bright red and juicy berries, great for desserts, strawberries are also packed with vitamin C and antioxidants that promote glowing skin and immune health.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"
      },
      {
        "name": "Pineapple",
        "price": 90,
        "gst": "10%",
        "description": "Tropical fruit with a tangy-sweet flavor and spiky skin, pineapples aid digestion and hydration due to their high bromelain and water content.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg"
      },
      {
        "name": "Orange",
        "price": 60,
        "gst": "5%",
        "description": "Citrus fruit known for its refreshing taste and vitamin C, oranges boost immunity, improve skin health, and keep you refreshed throughout the day.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"
      },
      {
        "name": "Kiwi",
        "price": 110,
        "gst": "6%",
        "description": "Small green fruit with a unique sweet-tart taste, kiwis are rich in vitamin K and fiber, making them excellent for digestion and heart health.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"
      },
      {
        "name": "Grapes",
        "price": 70,
        "gst": "7%",
        "description": "Clusters of sweet or tangy berries, perfect for snacking, grapes are full of antioxidants and hydration, making them ideal for both energy and skin health.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg"
      },
      {
        "name": "Grapes",
        "price": 70,
        "gst": "10%",
        "description": "Clusters of sweet or tangy berries, perfect for snacking, grapes are full of antioxidants and hydration, making them ideal for both energy and skin health.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg"
      }    
  ];

  const vegetables = [
      {
      "name": "Carrot",
      "price": 45,
      "gst": "5%",
      "description": "A crunchy root vegetable rich in beta-carotene, fiber, and antioxidants that promote eye health.",
      "image": "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XmrTb_nASc7d-4zVKUz0leeTT4fibDzWi_GpIun0Tlc="
      },    
      {
        "name": "Broccoli",
        "price": 70,
        "gst": "12%",
        "description": "A green cruciferous vegetable loaded with vitamins, minerals, and anti-inflammatory properties.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/640px-Broccoli_and_cross_section_edit.jpg"
      },
      {
        "name": "Tomato",
        "price": 30,
        "gst": "6%",
        "description": "Juicy and red, tomatoes are a versatile vegetable high in vitamin C and lycopene.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg"
      },
      {
        "name": "Spinach",
        "price": 25,
        "gst": "4%",
        "description": "Leafy green packed with iron, calcium, and essential nutrients for immunity and blood health.",
        "image": "https://bedford.tennessee.edu/wp-content/uploads/sites/162/2020/08/spinach-leaves-1024x593.jpg"
      },
      {
        "name": "Potato",
        "price": 35,
        "gst": "5%",
        "description": "Starchy and energy-rich vegetable, great for boiling, baking, and frying.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg"
      },
      {
        "name": "Cauliflower",
        "price": 60,
        "gst": "7%",
        "description": "A white, crunchy veggie known for its high fiber, antioxidants, and low-calorie content.",
        "image": "https://media.post.rvohealth.io/wp-content/uploads/2020/03/broccoli-cauliflower-732x549-thumbnail-732x549.jpg"
      },
      {
        "name": "Capsicum",
        "price": 55,
        "gst": "10%",
        "description": "Colorful and mildly sweet vegetable rich in vitamin A, C, and anti-aging antioxidants.",
        "image": "https://www.netmeds.com/images/cms/wysiwyg/blog/2020/06/1593413778_Capsicum_big_1.jpg"
      },
      {
        "name": "Brinjal",
        "price": 40,
        "gst": "8%",
        "description": "Also known as eggplant, this purple veggie is high in fiber and has a rich, meaty texture.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWodsdZmCsLG7aCE5nIwxA9THdR7xw9Yi87g&s"
      },
      {
        "name": "Cabbage",
        "price": 38,
        "gst": "5%",
        "description": "A leafy green or purple vegetable full of vitamin K, folate, and supports digestion.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nHmlJ9yvJ6zJQxSsvn5sGAhTQvQnehG64g&s"
      }    
  ];

  const milkProducts = [
    {
      "name": "Full Cream Milk",
      "price": 60,
      "gst": "5%",
      "description": "Rich and creamy milk with high fat content, ideal for desserts, tea, and daily nutrition.",
      "image": "https://www.bbassets.com/media/uploads/p/xxl/40147028_5-mother-dairy-full-cream-milk.jpg"
    },
    {
      "name": "Toned Milk",
      "price": 50,
      "gst": "5%",
      "description": "A low-fat milk option that retains essential nutrients while reducing calories and fat.",
      "image": "https://www.bigbasket.com/media/uploads/p/xxl/40147029_4-mother-dairy-toned-milk.jpg"
    },
    {
      "name": "Paneer",
      "price": 320,
      "gst": "12%",
      "description": "Fresh Indian cottage cheese, high in protein and calcium, perfect for curries and snacks.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmS9bf3TZAjt_0_X1gGr0SamerZpCYfMNdyg&s"
    },
    {
      "name": "Ghee",
      "price": 550,
      "gst": "12%",
      "description": "Clarified butter made from pure milk fat, used in cooking and Ayurvedic preparations.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwrpxPcwVgRWr0axlCskUZq_ceFv7XHTOBQ&s"
    },
    {
      "name": "Butter",
      "price": 250,
      "gst": "12%",
      "description": "Smooth and salty dairy spread made from churned cream, essential in baking and toast.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_TgTSEiGAmFYmAWccfmY1cXJQNCjBmXm7w&s"
    },
    {
      "name": "Curd",
      "price": 80,
      "gst": "5%",
      "description": "Thick and creamy curd loaded with probiotics, great for digestion and cooling effect.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBMqaMtIcujlvTEW4Ft7u0SSmVz4N7Ts3Hg&s"
    },
    {
      "name": "Cheese Slices",
      "price": 140,
      "gst": "12%",
      "description": "Processed cheese slices perfect for burgers, sandwiches, and quick snacks.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_8sU28l0rFinyM71wpJmb5o6tncHIyW19Q&s"
    },
    {
      "name": "Flavored Milk",
      "price": 35,
      "gst": "12%",
      "description": "Sweetened milk with added flavors like chocolate or rose, enjoyed chilled.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_QS2BUjh2T22boAcfCXOsYIz3WqBv55dJw&s"
    },
    {
      "name": "Milk Powder",
      "price": 280,
      "gst": "5%",
      "description": "Dehydrated milk used as a long-lasting, convenient dairy alternative in cooking.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLwjj9B4BF7DMj2XTF7BZrRiwtKBjcC4GXQ&s"
    }
  ];
  

  return (
    <div className='container mt-3 mb-5'>
      <div className="row align-items-center mb-5">
        <div className="col-md-8 lh-sm">
          <h1 className='fruits-mainHeading'>Fruits and Vegetables are Our Life!</h1>
          <h6 className='fruits-description lh-sm'>Strawberry, with its vibrant red hue and glistening surface, is more than just a fruit — it’s a symbol of freshness, vitality, and natural sweetness. Rich in antioxidants, vitamin C, and fiber, it not only delights the taste buds but also supports a healthy digestive system.  Its heart-like shape and juicy texture make it a perfect blend of beauty and nourishment, reminding us that healthy eating can be both delicious and joyful.</h6>
        </div>

        <div className="col-md-4">
          <img className='main-image' src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/1/shutterstock_321864554.jpg" alt="" />
        </div>
      </div>
      <ul className="nav nav-pills py-5 justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'fruits' ? 'active bg-success text-white' : 'text-black'}`}
            onClick={() => setActiveTab('fruits')}
          >
            Fruits
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'vegetables' ? 'active bg-success text-white' : 'text-black'}`}
            onClick={() => setActiveTab('vegetables')}
          >
            Vegetables
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'milkProducts' ? 'active bg-success text-white' : 'text-black'}`}
            onClick={() => setActiveTab('milkProducts')}
          >
            Milk Products
          </button>
        </li>
      </ul>
      {activeTab === 'fruits' && (
        <div className='row gap-5 justify-content-between' id='fruits'>
          {fruits.map((fruit, index) => (
            <div key={index} className='col-md-3 d-flex align-items-stretch'>
              <Fruits
                index={index}
                name={fruit.name}
                price={fruit.price}
                gst={fruit.gst}
                description={fruit.description}
                image={fruit.image}
              />
            </div>
          ))}
        </div>
      )}
      {activeTab === 'vegetables' && (
        <div className='row gap-5 justify-content-between mt-5' id='vegetables'>
          {vegetables.map((vegetable, index) => (
            <div key={index} className='col-md-3 d-flex align-items-stretch'>
              <Fruits
                index={index}
                name={vegetable.name}
                price={vegetable.price}
                gst={vegetable.gst}
                description={vegetable.description}
                image={vegetable.image}
              />
            </div>
          ))}
        </div>
      )}
      {activeTab === 'milkProducts' && (
        <div className='row gap-5 justify-content-between mt-5' id='milkProducts'>
          {milkProducts.map((milkProduct, index) => (
            <div key={index} className='col-md-3 d-flex align-items-stretch'>
              <Fruits
                index={index}
                name={milkProduct.name}
                price={milkProduct.price}
                gst={milkProduct.gst}
                description={milkProduct.description}
                image={milkProduct.image}
              />
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default FruitsPage;
