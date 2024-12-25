import React from 'react'
import './Contact.css'
import masckot from './img/Masckot.png'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "216a4f02-3f65-493a-8acf-f986c3133837");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <div>
        <label>Имя</label>
        <input className='input' name='Имя' required></input>
        <label>Телефон</label>
        <input className='input' name='Номер телефона' required></input>
      </div>
      <div className='form__submit'>
        <button type="submit" className='button'>Хочу в команду!</button>
        <img className='masckot' src={masckot} alt='masckot'></img>
      </div>
    </form>
);
}

export default Contact