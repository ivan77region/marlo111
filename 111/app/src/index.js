// Импортируем необходимые модули React и ReactDOM для работы с React-компонентами
import React from 'react';
import ReactDOM from 'react-dom/client';

// Импортируем CSS для стилизации приложения
import './index.css';

// Импортируем изображения, которые будут использоваться в проекте
import MARLO from './img/MARLO.svg';
import masckot from './img/Masckot.png';
import img2 from './img/image.png';
import img3 from './img/aboutus.svg';
import mail from './img/mail.png';
import profile from './img/profile.svg';
import kartinka0 from './img/image-text.svg';
import kartinka1 from './img/image1.svg';
import kartinka2 from './img/image2.svg';
import kartinka3 from './img/image3.svg';
import kartinka4 from './img/image4.svg';
import sms from './img/sms.svg';
import book from './img/book.svg';
import happy from './img/happy-masckot.svg';
import gradient from './img/gradient.png';

// Создаем корневой элемент для рендеринга React-приложения
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <div className='body'> {/* Основной контейнер приложения */}

    {/* Хедер (верхняя часть страницы) */}
    <div className='header'>
      {/* Панель навигации */}
      <nav className='header__nav-panel'>
        <a href='#'>Услуги
          <img src={book}></img> {/* Иконка для "Услуги" */}
        </a>
        <a href='#'>Контакты
          <img src={sms}></img> {/* Иконка для "Контакты" */}
        </a>
        <a href='#'>Вакансии
          <img src={profile}></img> {/* Иконка для "Вакансии" */}
        </a>
      </nav>

      {/* Логотип компании */}
      <div className='header__logo'>
        <a href='#'><span>M</span><span>ARLO</span><span>.</span></a>
      </div>

      {/* Кнопка для перехода на форму обсуждения проекта */}
      <a className='button' id='button__discuss' href='form.html'>Обсудить проект</a>
    </div>

    {/* Основная часть страницы */}
    <div className='main'>
      {/* Блок заголовка */}
      <div className='main__title-container'>
        <div className='main__title'>
          <span>M</span><span>ARLO</span><span>.</span>
        </div>
        <span className='main__subtitle'>Больше, чем приложение!</span>
      </div>

      {/* О нас */}
      <span className='main__title-about-us'>О нас</span>
      <div className='main__about-us-container'>
        <div className='main__about-us-image'>
          <img src={kartinka0} alt='billy'></img> {/* Изображение блока "О нас" */}
        </div>
        <div className='main__about-us-text'>
          {/* Заголовок и текст блока "О нас" */}
          <span className='main__text-title'>
            <span>M</span>
            <span>ARLO</span>
            <span> - это про людей.</span>
          </span>
          <span>Мы - команда профессионалов с огромным опытом разработки, которые не утратили свой энтузиазм!</span>
          <span>Наша миссия - сделать мир доступнее и удобнее для всех. Мы разрабатываем сервисы, которые делают жизнь проще, а также помогаем с реализацией единомышленникам.</span>
        </div>
      </div>

      {/* Наши услуги */}
      <div className='main__container-services-title'>
        <span>Наши услуги</span>
        <span>Разработаем веб-сервис любой сложности для ваших задач.</span>
      </div>

      {/* Секция с услугами */}
      <div className='main__container-services'>
        <div className='services__content-box'>
          <div className='content-box'>
            <img src={kartinka2} alt='komp'></img> {/* Иконка услуги */}
          </div>
          <div className='content-text-box'>
            <div>Делаем только <span>качественные</span> сайты и приложения.</div>
          </div>
        </div>

        <div className='services__content-box'>
          <div className='content-text-box'>
            <div>Наши продукты не только красивые снаружи, но и <span>качественные внутри.</span></div>
          </div>
          <div className='content-box1'>
            <img src={kartinka4} alt='oc'></img>
          </div>
        </div>

        <div className='services__content-box'>
          <div className='content-box'>
            <img src={kartinka3} alt='oc'></img>
          </div>
          <div className='content-text-box'>
            <div>Используем <span>самые актуальные</span> методы и закладываем возможности для масштабирования уже на этапе проектирования.</div>
          </div>
        </div>

        <div className='services__content-box'>
          <div className='content-text-box'>
            <div>Доступная цена и сроки разработки - удовлетворим <span>любой</span> запрос.</div>
          </div>
          <div className='content-box1'>
            <img src={kartinka1} alt='oc'></img>
          </div>
        </div>
      </div>

      {/* Блок "Обсудить проект" */}
      <div className='main__discuss-project'>
        <span className='main__discuss-project-title'>Давайте обсудим ваш проект!</span>
        <div className='main__discuss-project-content'>
          <div className='main__discuss-project-text'>
            <span>У тебя есть крутая идея которая перевернет мир, но нет ресурсов на ее воплощение?</span><br></br>
            <span className='project-text-subtitle'>Мы поможем!</span>
            <span className='list'>
              <li><span>Разработка сервисов и приложений от идеи до готового продукта</span></li>
              <li><span>Поможем оценить перспективы и разработаем план развития</span></li>
              <li><span>К вашим услугам программисты, дизайнеры и менеджеры с большим опытом ведения проектов и стартапов</span></li>
            </span>
          </div>
          <div className='project-text-discuss-submittance'>
            <a href='form.html' className='button1' id='button__discuss'>Обсудить проект</a>
            <img src={happy} alt='happy-masckot'></img> {/* Изображение маскота */}
          </div>
        </div>
      </div>

      {/* Секция с вакансиями */}
      <span className='searching-talents-title'>Мы ищем таланты!</span>
      <div className='main__searching-talents'>
        <div className='main__searching-talents-container'>
          <div className='main__vacancies'>
            <span className='main__vacancies-title'>Открытые вакансии
              <span className='searching-talents-subtext'>Быстрое развитие специалиста в работе<br></br> над разнообразными и интересными проектами</span>
            </span>
            <div className='vacancies-available'>
              <span className='spanhr'><hr></hr>Брендинг</span>
              <li><span>Графический дизайнер</span></li>
              <span className='spanhr'><hr></hr>Веб-проекты</span>
              <li><span>Бизнес-аналитик</span></li>
              <span className='spanhr'><hr></hr>Брендинг</span>
              <li><span>Новый бизнес-менеджер в UX/UI</span></li>
            </div>
          </div>
        </div>
        <div className='form1'>
          <input placeholder='Имя*'></input>
          <input placeholder='Телефон*'></input>
          <a className='form-button'>Отправить</a>
        </div>
      </div>

      {/* Часто задаваемые вопросы */}
      <div className='qna-title'>Ответы на вопросы</div>
      <div className='main__qna-container'>
        <div className='qna-subcontainer'>
          <div>
            <span>Вопрос: Какие методы обеспечения безопасности данных вы применяете?</span><br></br>
            <span>Ответ: Безопасность данных является нашим приоритетом. Мы используем передовые методы защиты информации, включая шифрование данных при передаче и хранении, аутентификацию пользователей через двухфакторную авторизацию, регулярные аудиты безопасности и тестирование на проникновение.</span>
          </div>
          <div>
            <span>Вопрос: Как долго длится разработка мобильного приложения?</span><br></br>
            <span>Ответ: Время разработки зависит от сложности проекта, функционала и требований клиента. Обычно полный цикл создания мобильного приложения занимает от 3 до 6 месяцев. Это включает этапы анализа требований, проектирования интерфейсов, программирования, тестирования и внедрения.</span>
          </div>
        </div>
        <div className='qna-subcontainer'>
          <div>
            <span>Вопрос: Предоставляете ли вы поддержку после запуска приложения?</span><br></br>
            <span>Ответ: Да, мы предлагаем услуги пост-релизной поддержки. После запуска приложения наши специалисты готовы предоставить техническую помощь, обновления и улучшения. Это может включать исправление багов, добавление новых функций. Мы также помогаем с продвижением и маркетинговыми активностями.</span>
          </div>
          <div>
            <span>Вопрос: Можно ли изменить требования к проекту уже после начала разработки?</span><br></br> 
            <span>Ответ: Да, изменения возможны, но они должны быть согласованы с командой разработчиков. Мы используем гибкую методологию Agile, которая позволяет вносить коррективы на разных этапах разработки. Однако, важно понимать, что значительные изменения могут повлиять на сроки и бюджет проекта.</span>
          </div>
        </div>
      </div>

      {/* Контакты */}
      <div className='contact-us'>Контакты</div>
      <div className='main__contact-us-container'>
        <div>
          <span>Пишите</span>
          <a>marlo@ru</a>
        </div>
        <div>
          <span>Звоните</span>
          <a href='tel:88005553535'>8 (800) 555-35-35</a>
        </div>
        <div>
          <span>Приходите</span>
          <a>г. Москва, ул Москва, д. 1</a>
        </div>
      </div>
    </div>

    {/* Подвал */}
    <div className='footer'>
      {/* Дублируем навигацию в футере */}
      <nav className='header__nav-panel'>
        <a href='#'>Услуги
          <img src={book}></img>
        </a>
        <a href='#'>Контакты
          <img src={sms}></img>
        </a>
        <a href='#'>Вакансии
          <img src={profile}></img>
        </a>
      </nav>
      <div className='header__logo'>
        <a href='#'><span>M</span><span>ARLO</span><span>.</span></a>
      </div>
      <a className='button' id='button__discuss' href='form.html'>Обсудить проект</a>
    </div>
  </div>
);
