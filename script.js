// 游戏URL配置
const gameUrls = {
    game1: 'https://play2048.co/',
    game2: 'https://playsnake.org/',
    game3: 'https://tetris.com/play-tetris',
    game4: 'https://minesweeper.online/',
    game5: 'https://gomokuonline.com/',
    game6: 'https://sudoku.com/'
};

// 获取所有标签按钮和游戏框架
const tabButtons = document.querySelectorAll('.tab-button');
const gameFrame = document.getElementById('gameFrame');

// 为每个标签按钮添加点击事件
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有按钮的active类
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // 添加当前按钮的active类
        button.classList.add('active');
        
        // 获取游戏URL并更新iframe
        const gameId = button.getAttribute('data-game');
        const gameUrl = gameUrls[gameId];
        if (gameUrl) {
            gameFrame.src = gameUrl;
        }
    });
});

// 添加页面加载完成后的处理
document.addEventListener('DOMContentLoaded', () => {
    // 确保第一个游戏（2048）默认加载
    gameFrame.src = gameUrls.game1;
}); 