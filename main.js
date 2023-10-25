document.getElementById('btnSubmit').addEventListener('click', () => {
    document.getElementById('firstCard').style.display = 'none';
    document.getElementById('secondCard').style.display = 'flex';
});

document.getElementById('circleOne').addEventListener('click', () => {
    document.getElementById('circleOne').classList.add('circle-click');
    document.getElementById('circleTwo').classList.remove('circle-click');
    document.getElementById('circleThree').classList.remove('circle-click');
    document.getElementById('circleFour').classList.remove('circle-click');
    document.getElementById('circleFive').classList.remove('circle-click');
    document.getElementById('result').innerHTML = '1';
});
document.getElementById('circleTwo').addEventListener('click', () =>{
    document.getElementById('circleTwo').classList.add('circle-click');
    document.getElementById('circleOne').classList.remove('circle-click');
    document.getElementById('circleThree').classList.remove('circle-click');
    document.getElementById('circleFour').classList.remove('circle-click');
    document.getElementById('circleFive').classList.remove('circle-click');
    document.getElementById('result').innerHTML = '2';

});
document.getElementById('circleThree').addEventListener('click', () => {
    document.getElementById('circleThree').classList.add('circle-click');
    document.getElementById('circleOne').classList.remove('circle-click');
    document.getElementById('circleTwo').classList.remove('circle-click');
    document.getElementById('circleFour').classList.remove('circle-click');
    document.getElementById('circleFive').classList.remove('circle-click');
    document.getElementById('result').innerHTML = '3';

});
document.getElementById('circleFour').addEventListener('click', () => {
    document.getElementById('circleFour').classList.add('circle-click');
    document.getElementById('circleOne').classList.remove('circle-click');
    document.getElementById('circleTwo').classList.remove('circle-click');
    document.getElementById('circleThree').classList.remove('circle-click');
    document.getElementById('circleFive').classList.remove('circle-click');
    document.getElementById('result').innerHTML = '4';

});
document.getElementById('circleFive').addEventListener('click', () => {
    document.getElementById('circleFive').classList.add('circle-click');
    document.getElementById('circleOne').classList.remove('circle-click');
    document.getElementById('circleTwo').classList.remove('circle-click');
    document.getElementById('circleThree').classList.remove('circle-click');
    document.getElementById('circleFour').classList.remove('circle-click');
    document.getElementById('result').innerHTML = '5';

});