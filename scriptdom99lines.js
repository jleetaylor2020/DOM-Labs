document.addEventListener('DOMContentLoaded', function () {

    // var container = document.createElement('container');
    // document.body.appendChild(container);
    var div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    var btn = document.createElement("button");
    var btnText = document.createTextNode("Sing!");
    btn.appendChild(btnText);
    document.body.appendChild(btn);


    btn.addEventListener('click', function () {
        var runList = getrunList();
        btn.style.list = runList;

    });

    function getrunList() {

        var list = ['John', 'James', 'Kim', 'Carrie', 'Liz'];

        for (var i = 0; i < list.length; i++) {
            console.log(list[i])

            for (j = 99; j > 0; j--) {
                console.log([j] + ' lines of code on the wall, ' + [j] + ' lines of code. One fell off and made a fall ')
                if (j < 2) {
                    console.log([j] + ' line of code remains on the wall!' + [j] + ' line of code. One fell off and made a fall ')
                    console.log([j - 1] + ' line of code remains on the wall!' + [j - 1] + ' lines of code remain! ')
                } else {
                    console.log([j - 1] + ' lines of code remain on the wall!')
                }
            }
        }
    }

});





