'use strict'

document.addEventListener("DOMContentLoaded", () => {

    /*
    *   1. Клик на вопрос в FAQ
    *   Алгоритм
    *
    *   1. Начало
    *   2. Получаем dom-элементы вопросов
    *   3. Навешиваем слушатель на элемент вопроса
    *   4. Проверка условия: кликнули по вопросу?
    *       2.1. Да: открываем/закрываем ответ на вопрос.
    *       2.2. Нет: Конец
    *   5. Конец
    *
    *   Блок-схема: /images/block-schema.png
    */

    document.querySelectorAll('.faq__item-question')                        // получаем dom-элементы вопросов
        .forEach((question) => {                             // проходимся по ним
        question.addEventListener('click', (event) => {    // навесили слушатель на клик
            console.log('По вопросу кликнули');

            const answer = question.parentNode.querySelector('.faq__item-answer'); // получаем связанный с вопросом ответ
            if (answer) {
                answer.classList.toggle('show');                                                // открываем/закрываем ответ на вопрос
            }
        })
    });

    /* 2. Динамический вывод вопросов. Часть 1 (Используем массив с данными) */
    const faqContainer = document.querySelector('#faq');

    if (faqContainer) {

        const faqQuestions = ['Как проходят занятия?', 'Можно ли перенести занятие?', 'С какого возраста можно начинать занятия?'];

        const faqItemQuestions = faqContainer.querySelectorAll('.faq__item-question');

        faqItemQuestions.forEach((item, index) => {
            item.textContent = faqQuestions[index];
        });

    }

    const scrollUpButton = document.querySelector('.scroll-up');

    if (scrollUpButton) {
        const windowHeight = document.documentElement.clientHeight; // Определяем высоту видимой части окна браузера

        // Показать кнопку при прокрутке вниз на высоту экрана
        document.addEventListener('scroll', () => {
            let scrollPageY = this.scrollY;

            if (scrollPageY >= windowHeight) {
                scrollUpButton.classList.add('scroll-up--show');
            } else {
                scrollUpButton.classList.remove('scroll-up--show');
            }
        });

        // Плавная прокрутка наверх при нажатии на кнопку
        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    }
});