document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    let containerDiv = document.createElement('div');
    button.appendChild(btnText);
    document.body.appendChild(button);
    document.body.appendChild(containerDiv);

    let id = 1;

    button.addEventListener('click', function () {
        let squareDiv = document.createElement('div');
        let squareDivText = document.createTextNode(id);
        // squareDiv.append(squareDivText);
        let thisId = id
        squareDiv.className = 'square';
        squareDiv.id = thisId;
        id++;
        containerDiv.append(squareDiv);

        squareDiv.addEventListener('mouseover', function () {
            squareDiv.textContent = thisId;
        });

        squareDiv.addEventListener('mouseleave', function () {
            squareDiv.textContent = '';
        });

        squareDiv.addEventListener('click', function () {
            squareDiv.style.backgroundColor = getRandomColor();
        });
        squareDiv.addEventListener('dblclick', function () {
            squareDiv.remove();
        });
    });
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
};