import './ProductComponent.css';

const burgers = [
  {
    id: 1,
    name: 'Hawaiian Burger',
    description: 'Grilled Pineapple.Tartyaki sauce and bam for a sweet-suity experience.',
    price: 99,
    rating: 3,
    image:
      'https://ourbestbites.com/wp-content/uploads/2009/01/Hawaiian-Turkey-Burgers-6.jpg',
  },
  {
    id: 2,
    name: 'Veggie Burger',
    description: 'Plant based patty with a variety of topings like avocado, lettuce, tomato.',
    price: 85,
    rating: 5,
    image:
      'https://www.wellplated.com/wp-content/uploads/2016/03/Black-Bean-Vegan-Burger-Recipe.jpg',
  },
  {
    id: 3,
    name: 'Mushroom Swiss Burger',
    description: 'A delicious mushroom and Swiss cheese burger with fresh lettuce and tomato.',
    price: 95,
    rating: 5,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQcRbWT6yAerMxyKzq4veNKDozg6O5MnE1ojVtsRxhA&s=10',
  },
   {
    id: 4,
    name: 'Bacon Cheese Burger',
    description: 'A classic burger with crispy bacon, melted cheese, and all the fixings.',
    price: 95,
    rating: 4,
    image:
      'https://www.honestburgers.co.uk/wp-content/uploads/2025/09/THE_BACON_BEEF_049_JPEG72.jpg',
  },
];

export default function ProductComponent() {
  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="Tasty Burger home">
          <span className="brand-mark" aria-hidden="true">🍔</span>
          <span> TASTY BURGER </span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#menu">OUR MENU</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
          <button className="cart-button" type="button" aria-label="Shopping cart, 2 items">
            <span aria-hidden="true">&#128722;</span>
          </button>
        </nav>
      </header>

      <main className="burger-page" id="top">
        <h1>Our Crazy Burgers</h1>
        <p className="main-subtitle">Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow your mind!</p>
        <div className="burger-list" id="menu">
          {burgers.map((burger) => (
            <div key={burger.id} className="burger-card">
              <img src={burger.image} alt={burger.name} className="burger-image" />
              <div className="burger-info">
                <div className="rating-row">
                  <span className="burger-rating">
                        {'★'.repeat(burger.rating)}{'☆'.repeat(5 - burger.rating)}
                  </span>
                </div>
                <h2>{burger.name}</h2>
                <p style={{ flexGrow: 1 }}>{burger.description}</p>
                <div className="burger-meta">
                  <span className="burger-price">${burger.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
