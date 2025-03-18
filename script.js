document.addEventListener('DOMContentLoaded', function () {
    const heartContainer = document.querySelector('.heart-container');
    const mainHeart = document.querySelector('.heart');
    const numberOfTexts = 15; // Số lượng hiệu ứng chữ xuất hiện
    const textOptions = ["bé Mi", "iu bé Mi"];

    mainHeart.addEventListener('click', function (event) {
        const heartRect = mainHeart.getBoundingClientRect();
        const centerX = heartRect.left + heartRect.width / 2;
        const centerY = heartRect.top + heartRect.height / 2;

        for (let i = 0; i < numberOfTexts; i++) {
            const textElement = document.createElement('span');
            textElement.classList.add('floating-text');
            textElement.textContent = textOptions[Math.floor(Math.random() * textOptions.length)];
            document.body.appendChild(textElement); // Thêm vào body

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 80 + 20; // Khoảng cách ngẫu nhiên
            const speed = Math.random() * 0.8 + 0.5; // Tốc độ ngẫu nhiên

            const finalX = centerX + Math.cos(angle) * distance;
            const finalY = centerY - Math.sin(angle) * distance; // Trừ để đi lên

            textElement.style.left = `${centerX}px`;
            textElement.style.top = `${centerY}px`;
            textElement.style.fontSize = `${Math.random() * 1.5 + 1}em`; // Kích thước chữ ngẫu nhiên

            const animationDuration = speed * 2 + 0.5;
            textElement.style.transition = `top ${animationDuration}s ease-out, left ${animationDuration}s ease-out, opacity ${animationDuration}s ease-out`;

            setTimeout(() => {
                textElement.style.left = `${finalX}px`;
                textElement.style.top = `${finalY}px`;
                textElement.style.opacity = 0;
            }, 10); // Nhỏ để bắt đầu hiệu ứng ngay lập tức

            setTimeout(() => {
                textElement.remove();
            }, animationDuration * 1000 + 50); // Xóa sau khi hoàn thành animation
        }
    });
});