function generateGrid( size ) 
{
    const grid = document.querySelector('.canvas');

    for ( let i = 0; i < size; i++ )
    {
        for ( let j = 0; j < size; j++ )
        {
            div = document.createElement('div');
            div.style.width = (32 / size) + "rem";
            div.style.height = (32 / size) + "rem";
            div.style.backgroundColor = 'white';
            div.style.outline = '0.5px solid gray';
            grid.appendChild(div);
        }
    }
}

function removeGrid()
{
    const grid = document.querySelector('.canvas');
    const divs = grid.querySelectorAll('div');

    for ( let div of divs )
    {
        grid.removeChild(div);
    }
}

function colorDefault()
{
    const grid = document.querySelector('.canvas');
    const divs = grid.querySelectorAll('div');

    for ( let div of divs )
    {
        div.addEventListener('mouseover', () => {
            const color = document.getElementById('html5colorpicker');
            let current_color = color.value;
            div.style.backgroundColor = current_color;
        });
    }
}

function colorRainbow()
{
    const grid = document.querySelector('.canvas');
    const divs = grid.querySelectorAll('div');

    for ( let div of divs )
    {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 30) + 1 + "," + Math.floor(Math.random() * 30) + 1 + "," + Math.floor(Math.random() * 30) + 1 + ")";
        });
    }
}

function erase()
{
    const grid = document.querySelector('.canvas');
    const divs = grid.querySelectorAll('div');

    for ( let div of divs )
    {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'white';
            div.style.outline = '0.5px solid gray';
        });
    }
}