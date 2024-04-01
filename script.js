var clickCount = 0;

function toggleGambar() {
    clickCount++;
    var robot = document.querySelector(".Robot");
    if (clickCount === 1) {
        robot.src = "robot2.png"; 
        robot.alt = "robot2";
    } else if (clickCount === 2) {
        robot.src = "robot3.png"; 
        robot.alt = "robot3"; 
    } else {
        alert("Anda telah menekan tombol sebanyak tiga kali!");
        clickCount = 0; 
    }
}
