const data = [
    {
        id: '1',
        question: 'What are accordion components',
        answer: 'Accordion components sdfshbfhsbfhbsjfbjsbjsbdfbjsbfjsdfhsjhfjshvfhsdfvjhsvf'
    },
    {
        id: '2',
        question: '2.What are accordion components',
        answer: 'Accordion components sdfshbfhsbfhbsjfbjsbjsbdfbjsbfjsdfhsjhfjshvfhsdfvjhsvf'
    },
    {
        id: '3',
        question: '3.What are accordion components',
        answer: 'Accordion components sdfshbfhsbfhbsjfbjsbjsbdfbjsbfjsdfhsjhfjshvfhsdfvjhsvf'
    },
    {
        id: '4',
        question: '4.What are accordion components',
        answer: 'Accordion components sdfshbfhsbfhbsjfbjsbjsbdfbjsbfjsdfhsjhfjshvfhsdfvjhsvf'
    },
    {
        id: '5',
        question: '5.What are accordion components',
        answer: 'Accordion components sdfshbfhsbfhbsjfbjsbjsbdfbjsbfjsdfhsjhfjshvfhsdfvjhsvf'
    },
    {
        id: '6',
        question: '6.What are accordion components',
        answer: 'Accordion components sdfshbfhsbfhbsjfbjsbjsbdfbjsbfjsdfhsjhfjshvfhsdfvjhsvf'
    },
    {
        id: '7',
        question: '7.What are accordion components',
        answer: 'Accordion components sdfshbfhsbfhbsjfbjsbjsbdfbjsbfjsdfhsjhfjshvfhsdfvjhsvf'
    }
];

const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
    accordionWrapper.innerHTML = data.map((dataItem) =>
        `<div class="accordion_item">
            <div class="accordion_title">
                <h3>${dataItem.question}</h3>
                <i class="fa-solid fa-arrow-down"></i>
            </div>

            <div class="accordion_content">
                <p>${dataItem.answer}</p>
            </div>
        </div>`
    ).join(" ");
}

createAccordionData();

const getAccordionTitles = document.querySelectorAll('.accordion_title');

getAccordionTitles.forEach((currentItem) => {
    currentItem.addEventListener("click", (event) => {
        if (currentItem.classList.contains('active')) {
            currentItem.classList.remove('active');
        } else {
            let alreadyActiveClasses = document.querySelectorAll('.active');
            console.log(alreadyActiveClasses);
            if (alreadyActiveClasses.length) {
                alreadyActiveClasses.forEach((currentActiveItem) => {
                    currentActiveItem.classList.remove('active');
                });
            }
            currentItem.classList.add("active");
        }
    });
})

