// JavaScript สำหรับควบคุมการแสดงข้อความพิเศษ
document.getElementById("showMessageButton").addEventListener("click", function () {
    const message = document.getElementById("specialMessage");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
        this.textContent = "ซ่อนข้อความพิเศษ";
    } else {
        message.classList.add("hidden");
        this.textContent = "แสดงข้อความพิเศษ";
    }
});
