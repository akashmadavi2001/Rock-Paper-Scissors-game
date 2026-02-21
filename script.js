let gameContainer = document.querySelector('.container');
let userResult = document.querySelector('.user-result img');
let cpuResult = document.querySelector('.cpu-result img');
let result = document.querySelector('.result');
let optionImgs = document.querySelectorAll('.opt-img');

optionImgs.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        img.classList.add('active');

        userResult.src = cpuResult.src = "./rock.png";
        result.innerHTML = 'Wait...';

        optionImgs.forEach((img2, index2) => {
            index !== index2 && img2.classList.remove('active');
        });

        gameContainer.classList.add('start');

        let time = setTimeout(() => {
            
            gameContainer.classList.remove('start');
            
            let imgSrc = e.target.src;
            userResult.src = imgSrc;

            let randomNo = Math.floor(Math.random() * 3);
            
            let cpuImg = ['./rock.png', './paper.png', './scissors.png'];
            cpuResult.src = cpuImg[randomNo];

            let cpuValue = ['R', 'P', 'S'][randomNo];
            let userValue = ['R', 'P', 'S'][index];

            let outComes = {
                RR: 'Draw',
                PP: 'Draw',
                SS: 'Draw',
                SP: 'You',
                RS: 'You',
                PR: 'You',
                RP: 'Cpu',
                PS: 'Cpu',
                SR: 'Cpu'
            };
            let outComesValue = outComes[userValue + cpuValue];
            result.innerHTML = outComesValue == "Draw" ? "Match Draw" : outComesValue + " Won!!";
        }, 2500);
    });
});

