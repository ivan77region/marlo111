import React from 'react' // Импорт библиотеки React для создания компонентов
import './Contact.css' // Импорт файла стилей для компонента Contact
import masckot from './img/Masckot.png' // Импорт изображения маскота

// Определение функционального компонента Contact
const Contact = () => {
  
  // Функция обработчика отправки формы
  const onSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

    // Создаем объект FormData из формы, чтобы извлечь введенные данные
    const formData = new FormData(event.target);

    // Добавляем дополнительный параметр с ключом для доступа к API
    formData.append("access_key", "216a4f02-3f65-493a-8acf-f986c3133837");

    // Конвертируем FormData в объект, а затем в JSON-строку
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Отправляем запрос на API с помощью fetch
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST", // Указываем метод запроса
      headers: {
        "Content-Type": "application/json", // Указываем тип данных в запросе
        Accept: "application/json" // Указываем, что ожидаем JSON-ответ
      },
      body: json // Передаем JSON-данные в теле запроса
    }).then((res) => res.json()); // Преобразуем ответ в формат JSON

    // Проверяем результат: если успешный, выводим сообщение об успехе
    if (res.success) {
      console.log("Success", res);
    }
  };

  // Возвращаем JSX для отображения формы
  return (
    <form onSubmit={onSubmit} className='form'> {/* Определяем обработчик отправки формы */}
      <div>
        {/* Поле ввода для имени */}
        <label>Имя</label>
        <input className='input' name='Имя' required></input>
        
        {/* Поле ввода для номера телефона */}
        <label>Телефон</label>
        <input className='input' name='Номер телефона' required></input>
      </div>

      <div className='form__submit'>
        {/* Кнопка отправки формы */}
        <button type="submit" className='button'>Хочу в команду!</button>

        {/* Отображение изображения маскота */}
        <img className='masckot' src={masckot} alt='masckot'></img>
      </div>
    </form>
  );
}

// Экспорт компонента Contact для использования в других файлах
export default Contact
