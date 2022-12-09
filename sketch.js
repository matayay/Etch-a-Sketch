// Main Program

const slider = document.getElementById('myRange');
const slider_div = document.querySelector('.slidecontainer');
const grid_value = document.createElement('h3');
let slider_value = slider.value;

grid_value.textContent = slider_value + " X " + slider_value;
slider_div.appendChild(grid_value);

generateGrid( slider_value );
colorBlack();

const menu = document.querySelector('.buttons');
const buttons = menu.querySelectorAll('button');
buttons[1].style.backgroundColor = 'darkblue';
let color = false;

for ( let button of buttons )
{
    button.addEventListener('click', () => {
        if ( button.className === 'color' )
        {
            color = true;
            colorRainbow();
            buttons[0].style.backgroundColor = 'darkblue';
            buttons[1].style.backgroundColor = 'rgb(33, 42, 58)';
        }

        else if ( button.className === 'black' )
        {
            color = false;
            colorBlack();
            buttons[0].style.backgroundColor = 'rgb(33, 42, 58)';
            buttons[1].style.backgroundColor = 'darkblue';
        }

        else if ( button.className === 'clear' )
        {
            removeGrid(slider_value);
            generateGrid(slider_value);

            if ( color === true )
            {
                colorRainbow();
            }
    
            else if ( color === false )
            {
                colorBlack();
            }
        }
    });
}

slider.addEventListener('input', () => {
    slider_value = slider.value;

    grid_value.textContent = slider_value + " X " + slider_value;
    slider_div.appendChild(grid_value);

    removeGrid(slider_value);
    generateGrid(slider_value);

    if ( color === true )
    {
        colorRainbow();
    }

    else if ( color === false )
    {
        colorBlack();
    }
});