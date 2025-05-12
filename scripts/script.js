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

});