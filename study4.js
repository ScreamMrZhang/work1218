document.addEventListener("DOMContentLoaded", () => {
    const openDrawerButton = document.getElementById("openDrawerButton");
    const drawer = document.getElementById("drawer");
    const mask = document.getElementById("mask");
    const drawerHandle = document.querySelector(".drawer-handle");
    let startY = 0;
    let initialDrawerBottom = 0; // 用来存储抽屉的初始位置

    // 打开抽屉
    openDrawerButton.addEventListener("click", () => {
        drawer.style.bottom = `0`;
        drawer.classList.add("open");
        mask.classList.remove("transparent"); // 打开抽屉时显示遮罩
        mask.style.opacity = 1; // 显示遮罩
        mask.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
        // mask.style.pointerEvents = 'auto'; // 允许遮罩层交互
    });

    // 拖动开始
    drawerHandle.addEventListener("mousedown", (e) => {
        startY = e.clientY;
        initialDrawerBottom = parseFloat(drawer.style.bottom) || 0; // 存储抽屉初始位置

        // 拖动中
        document.addEventListener("mousemove", move);
        // 拖动结束
        document.addEventListener("mouseup", () => {

            // 如果抽屉下拉超过一定距离，关闭抽屉
            const drawerBottom = parseFloat(drawer.style.bottom) || 0;
            // console.log(drawerBottom)
            if (drawerBottom < -10) {  // 如果拖动超过 30% 则关闭抽屉
                drawer.classList.remove("open");
                drawer.style.bottom = `-50%`;
                mask.classList.add("transparent"); // 遮罩层变透明
                mask.style.opacity = 0; // 隐藏遮罩
                mask.style.pointerEvents = 'none'; // 禁止遮罩层交互
                document.removeEventListener("mousemove", move)
            } else {
                drawer.style.bottom = "0"; // 恢复抽屉位置
                mask.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // 恢复遮罩层透明度
                document.removeEventListener("mousemove", move)
            }

        });
    });
    function move(e) {
        const deltaY = startY - e.clientY;
        // console.log(deltaY)
        const drawerBottom = Math.max(0, initialDrawerBottom - deltaY / window.innerHeight * 100);
        drawer.style.bottom = `${-drawerBottom}%`;

        // 根据拖动的距离调整遮罩层的透明度
        const opacity = Math.min(1, deltaY / window.innerHeight+0.5);
        mask.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(opacity, 0.5)})`;
    }
    mask.addEventListener("click", function () {
        console.log(111)
        drawer.classList.remove("open");
        drawer.style.bottom = `-50%`;
        mask.classList.add("transparent"); // 遮罩层变透明
        mask.style.opacity = 0; // 隐藏遮罩
        mask.style.pointerEvents = 'none'; // 禁止遮罩层交互
    })



});
