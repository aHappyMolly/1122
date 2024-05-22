document.addEventListener('DOMContentLoaded', (event) => {
    const player = document.getElementById('player');
    const floatingImage = document.getElementById('floating-image');	
	const imageA = document.getElementById('imageA');
    const imageB = document.getElementById('imageB');
    const overlayImage = document.querySelector('.overlay-image');
    const imageC = document.getElementById('imageC');
    const imageD = document.getElementById('imageD');
    const imageE = document.getElementById('imageE');

    imageA.addEventListener('mouseover', () => {

		imageB.style.display = 'none';
         
            imageA.style.display = 'block';
		imageA.style.opacity = '0';
		imageB.style.opacity = '1';
	
    });

    imageA.addEventListener('mouseout', () => {
		imageA.style.display = 'none';
         
            imageB.style.display = 'block';
		imageA.style.opacity = '1';
		imageB.style.opacity = '0';

    });

    imageB.addEventListener('click', () => {
       
        overlayImage.style.opacity = '0';
        setTimeout(() => {
            imageA.style.display = 'none';
	    imageB.style.display = 'none';
            overlayImage.style.display = 'none';
            imageC.style.display = 'none';
            imageD.style.display = 'block';
            imageE.style.display = 'block';
			player.style.display = 'block'; // 顯示player
			 floatingImage.style.display = 'block';
            player.style.top = imageC.style.top; // 設定player位置
            player.style.left = imageC.style.left; // 設定player位置
            setTimeout(() => {
		imageA.style.opacity = '0';
		imageB.style.opacity = '0';
				
                imageC.style.opacity = '0';
				
                imageD.style.opacity = '1';
                imageE.style.opacity = '1';
				 player.style.opacity = '1'; // 設定player透明度
				floatingImage.style.opacity = '1'; // 設定player透明度
            }, 50); // 確保 display 屬性更改後觸發過渡
        }, 500); // 與過渡時間匹配
    
	});

});