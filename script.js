document.addEventListener('DOMContentLoaded', function() {
	const dogHead = document.getElementById('dogHead');
	const leftEar = document.getElementById('leftEar');
	const rightEar = document.getElementById('rightEar');
	const tail = document.querySelector('.tail');
	const dogEyes = document.querySelectorAll('.dog__eye-l, .dog__eye-r');
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const sleepingLetterContainer = document.getElementById('sleepingLetterContainer');


	let intervalId = null; // To store the interval ID
	let zCount = 0; // Counter for "z" letters
	const maxZCount = 4;

	usernameInput.addEventListener('mouseenter', function() {
		dogHead.classList.add('rotate-head');
		leftEar.classList.add('rotate-ear');
		rightEar.classList.add('rotate-ear');
		tail.classList.add('waving-tail');

	});

	usernameInput.addEventListener('mouseleave', function() {
		dogHead.classList.remove('rotate-head');
		leftEar.classList.remove('rotate-ear');
		rightEar.classList.remove('rotate-ear');
		tail.classList.remove('waving-tail');		
	});

	

	let isAnimating = false; 
   
	passwordInput.addEventListener('mouseenter', function() {
		dogEyes.forEach(eye => eye.classList.add('close-eye'));

		if (!isAnimating) {
            intervalId = setInterval(function() {
                if (zCount >= maxZCount) {
                    clearInterval(intervalId);
                    zCount = 0;
                } else {
                    const translateY = zCount * -20;
                    const translateX = zCount * 4;
                    const letter = document.createElement('span');
                    letter.classList.add('sleeping-letter');
                    letter.style.transform = `translate(${translateX}px, ${translateY}px)`;
                    letter.textContent = 'z';
                    sleepingLetterContainer.appendChild(letter);
                    zCount++;
                }
            }, 100);
            isAnimating = true;
        }
	});
	
	passwordInput.addEventListener('input', function() {
		if (isAnimating) {
            clearInterval(intervalId);
            sleepingLetterContainer.innerHTML = '';
            zCount = 0;
			const maxZCount = 4;
            isAnimating = false;
        }

        if (passwordInput.value.length > 0) {
            intervalId = setInterval(function() {
                if (zCount >= maxZCount) {
                    clearInterval(intervalId);
                    sleepingLetterContainer.innerHTML = '';
                    zCount = 0;
                } else {
                    const translateY = zCount * -20; // Adjust the vertical movement as needed
                    const translateX = zCount * 4; // Adjust the horizontal movement as needed
                    const letter = document.createElement('span');
                    letter.classList.add('sleeping-letter');
                    letter.style.transform = `translate(${translateX}px, ${translateY}px)`;
                    letter.textContent = 'z';
                    sleepingLetterContainer.appendChild(letter);
                    zCount++;
                }
            }, 100);
            isAnimating = true;
        }
	});
	
	passwordInput.addEventListener('mouseleave', function() {
		dogEyes.forEach(eye => eye.classList.remove('close-eye'));
		clearInterval(intervalId);
        sleepingLetterContainer.innerHTML = '';
        zCount = 0;
        isAnimating = false;
	});

	// passwordInput.addEventListener('mouseenter', function() {
	// 	sleepingLetter.style.opacity = '1';
	//   });
	
	//   passwordInput.addEventListener('mouseleave', function() {
	// 	if (!passwordInput.matches(':focus')) {
	// 	  sleepingLetter.style.opacity = '0';
	// 	}
	//   });
	

	  
	

    passwordInput.addEventListener('focus', function() {
        sleepingLetterContainer.style.opacity = '1';
    });
    
    passwordInput.addEventListener('blur', function() {
        sleepingLetterContainer.style.opacity = '0';
        
    });

	// showPasswordCheckbox.addEventListener('change', function() {
	// 	if (showPasswordCheckbox.checked) {
	// 		passwordInput.type = 'text';
	// 		dogEyes.forEach(eye => eye.classList.remove('close-eye'));
	// 		showPasswordIcon.classList.remove('fa-eye');
	// 		showPasswordIcon.classList.add('fa-eye-slash');
	// 	} else {
	// 		passwordInput.type = 'password';
	// 		dogEyes.forEach(eye => eye.classList.add('close-eye'));
	// 		showPasswordIcon.classList.remove('fa-eye-slash');
	// 		showPasswordIcon.classList.add('fa-eye');
	// 	}
	// });

	// // Toggle password visibility when page loads (optional)
	// if (showPasswordCheckbox.checked) {
	// 	passwordInput.type = 'text';
	// } else {
	// 	passwordInput.type = 'password';
	// }
});
