
document.addEventListener("DOMContentLoaded", function () {

    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('This is an H1!');
    h1.appendChild(h1Text);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an H2');
    h2.appendChild(h2Text);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an H3');
    h3.appendChild(h3Text);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an H4');
    h4.appendChild(h4Text);
    div.appendChild(h4);


    let h5 = document.createElement('h5')
    let h5Text = document.createTextNode('This is an H5');
    h5.appendChild(h5Text);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an H6');
    h6.appendChild(h6Text);
    div.appendChild(h6);

    document.body.appendChild(div);
    // create array of colors and eventListener

    let color = ['red', 'orange', 'yellow', 'blue', 'green', 'violet', 'pink', 'lime'];
    // The Math.floor() ---function returns the largest integer less than or equal to a given number.    // 
    //  The Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
    //  QUESTION:  NEED TO REVIEW math.floor, math.random, math.ceil again------
    function getColorChange() {
        let colorChange = color[Math.floor(Math.random() * color.length)];
        return colorChange;
    }
    // add eventlisteners to each h element

    h1.addEventListener('click', function () {
        let colorChange = getColorChange();
        h1.style.color = colorChange;
    });

    h2.add('click', function () {
        let colorChange = getColorChange();
        h2.style.color = colorChange;
    });

    h3.addEventListener('click', function () {
        let colorChange = getColorChange();
        h3.style.color = colorChange;
    });

    h4.addEventListener('click', function () {
        let colorChange = getColorChange();
        h4.style.color = colorChange;
    });

    h5.addEventListener('click', function () {
        let colorChange = getColorChange();
        h5.style.color = colorChange;
    });

    h6.addEventListener('click', function () {
        let colorChange = getColorChange();
        h6.style.color = colorChange;
    });

    // create a button element//
    let btn = document.createElement("button");
    // create text node inside button //
    let btnText = document.createTextNode("Click to add new list item.");
    //Append the text to the button// Append the button to the body of the document//
    btn.appendChild(btnText);
    div.appendChild(btn);
    //  create an unordered list and click event listeners
    let ul = document.createElement('ul');
    div.appendChild(ul);
    //  concatenate the strings to add integar + 1 list counts
    let l = 1;
    function addToList() {
        let li = document.createElement('li');
        ul.appendChild(li);
        let liText = document.createTextNode(" This is " + l + " list item.");
        li.appendChild(liText);
        l = (l + 1);

        btn.addEventListener("click", function () {
            let colorChange = getColorChange();
            li.style.color = colorChange;
        });

        li.addEventListener("dblclick", function () {
            this.remove();
        });
    }
      
    btn.addEventListener("click", addToList);
});




