import React ,{ useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [budget, setBudget] = useState("");
  const [items, setItems] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  function DeleteItem(id) {
    setItems((items) => items.filter((et) => et.id !== id));
  }
  function handleItems(item) {
    setItems(() => [...items, item]);
  }
  return (
    <div className="app">
      <Header />
      <Form
        onAdItems={handleItems}
        items={items}
        onDeleteItem={DeleteItem}
        amount={amount}
        setAmount={setAmount}
        budget={budget}
        setBudget={setBudget}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
      />
      <Footer amount={amount} budget={budget} isSubmit={isSubmit} />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <h2>THIS IS THE BUDGET WEB APP I HOPE YOU WILL ENJOY IT!</h2>
    </div>
  );
}
function Form({
  onAdItems,
  items,
  onDeleteItem,
  amount,
  setAmount,
  budget,
  setBudget,
  isSubmit,
  setIsSubmit,
}) {
  const [expence, setExpence] = useState("");

  function handlSubmit(e) {
    e.preventDefault();
    const newObject = { amount, expence, id: Date.now() };
    onAdItems(newObject);
    console.log(newObject);
    setIsSubmit(true);
  }
  return (
    <>
      <form onSubmit={handlSubmit} className="form">
        <div className="first-input">
        <lable className="lable">Your Budget</lable>
        <input
          type="text"
          placeholder="Your budget..."
          value={budget}
          onChange={(e) => {
            setBudget(e.target.value);
          }}
        />
        <lable className="lable">Your Expence</lable>
        <input
          type="text"
          placeholder="What you bought..."
          value={expence}
          onChange={(e) => setExpence(e.target.value)}
        />
        </div>
        <div className="second-input">
        <lable className="lable">Your Cost</lable>
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label className="lable">Calculate</label>
        <button>Calculate</button>
        </div>
      </form>
      <List items={items} onDeleteItem={onDeleteItem} />
    </>
  );
}
function List({ items, onDeleteItem }) {
  return <Item items={items} onDeleteItem={onDeleteItem} />;
}
function Item({ items, onDeleteItem }) {
  return (
    <div className="items">
      {items.map((itemelem,index) => (
        <div>
        <li key={itemelem.id} className="list">
          <span>{index + 1} {itemelem.expence}</span> <span>{itemelem.amount} $</span>
          <button onClick={() => onDeleteItem(itemelem.id)}>Delete</button>
        </li>
        </div>
      ))}
    </div>
  );
}
function Footer({ amount, budget, isSubmit }) {
  const balance = Number(budget - amount);
  return (
    <div className="footer">
      <h1>HERE IS YOUR BUDGET 🤪😅 COST AND EXPENCE</h1>
      {isSubmit ? (
        <div className="footer-span">
          <span>🏆 {budget} $</span>
          <span>😅 {amount} $</span>
          <span>😭 {balance} $</span>
        </div>
      ) : (
        ""
      )}
      <p>All copy right is reserved/protected by Firagos Jemal Beker 👮🧑‍🏭</p>
    </div>
  );
}
