// Azerbaijan
document.querySelector('.countryOne').onclick = function () {
    const azerbaijan = new XMLHttpRequest();

    azerbaijan.onload = function () {
        document.querySelector('p').innerHTML = this.responseText;
    }

    azerbaijan.open("GET","../data/azerbaijan.txt")
    azerbaijan.send();

    document.querySelector('.about').style.backgroundImage = "url('../img/baku.jpg')";

}


// Turkey
document.querySelector('.countryTwo').onclick = function () {
    const turkey = new XMLHttpRequest();

    turkey.onload = function () {
        document.querySelector('p').innerHTML = this.responseText;
    }

    turkey.open("GET","../data/turkey.txt")
    turkey.send();
    
    document.querySelector('.about').style.backgroundImage = "url('../img/istanbul.jpg')";
}


// Italy
document.querySelector('.countryThree').onclick = function () {
    const italy = new XMLHttpRequest();

    italy.onload = function () {
        document.querySelector('p').innerHTML = this.responseText;
    }

    italy.open("GET","../data/italy.txt")
    italy.send();
     
    document.querySelector('.about').style.backgroundImage = "url('../img/rome.jpg')";
}


// Germany
document.querySelector('.countryFour').onclick = function () {
    const germany = new XMLHttpRequest();

    germany.onload = function () {
        document.querySelector('p').innerHTML = this.responseText;
    }

    germany.open("GET","../data/germany.txt")
    germany.send();
    
    document.querySelector('.about').style.backgroundImage = "url('../img/berlin.jpg')";
}


// Usa
document.querySelector('.countryFive').onclick = function () {
    const usa = new XMLHttpRequest();

    usa.onload = function () {
        document.querySelector('p').innerHTML = this.responseText;
    }

    usa.open("GET","../data/usa.txt")
    usa.send();

    document.querySelector('.about').style.backgroundImage = "url('../img/ny.jpg')";
}