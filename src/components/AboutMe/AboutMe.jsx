import "./AboutMe.css";
import myPhoto from "../../images/my-photo.jpeg";
import { NavLink } from "react-router-dom";

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">Студент</h2>
      <ul className="student__container">
        <li className="student__list">
          <h3 className="student__subtitle">Марина</h3>
          <p className="student__text">Веб-разработчик, 32 года</p>
          <p className="student__paragraph">
            Я живу в г. Ростов-на-Дону, с мужем и двумя замечательными
            сыновьями. Находясь в дикретном отпуске решила освоить новую
            специальность. Очень тяжело совмещать обучение с домашними делами.
            Моё обучение подходит к концу, полученые знания буду применять на
            практике.{" "}
          </p>
          <NavLink
            className="student__gh-page"
            href="https://github.com/Marina-Zinchenko"
          >
            Github
          </NavLink>
        </li>
        <li>
          <img
            className="student__foto"
            src={myPhoto}
            alt="Изображение недоступно"
          />
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;