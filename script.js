document.addEventListener('DOMContentLoaded', function () {
    const h1Element = document.createElement('h1');
    const fullName = "UTKARSH NAIN";  

    h1Element.textContent = fullName;
    h1Element.style.textAlign = 'center';
    h1Element.style.color = '#A9A9A9';  

    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const button = document.createElement('button');
    button.textContent = 'Calculate Sum';

    const resultElement = document.createElement('p');

    // Validation arrow function
    const validateInput = (inputElement) => {
        try {
            const value = parseFloat(inputElement.value);
            if (isNaN(value)) {
                throw new Error('Invalid input: Not a number');
            }
            inputElement.style.border = '1px solid #ccc'; 
            return value;
        }  catch (error) {
            const errorMessageElement = document.createElement('p');
            errorMessageElement.textContent = error.message;
            errorMessageElement.style.color = 'red';
            document.body.appendChild(errorMessageElement);
            inputElement.style.border = '1px solid red';  
            return null;
        }
    };

    button.addEventListener('click', function () {
        const validatedValue1 = validateInput(input1);
        const validatedValue2 = validateInput(input2);

        if (validatedValue1 !== null && validatedValue2 !== null) {
            const sum = validatedValue1 + validatedValue2;
            resultElement.textContent = `Sum: ${sum}`;
        }
    });

    document.body.appendChild(h1Element);
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(button);
    document.body.appendChild(resultElement);
});