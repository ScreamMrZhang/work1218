(function (window) {
    //默认配置项
    var defaultConfig = {
        buttons: {
            confirm: {
                text: "确定"
            },
            cancel: {
                text: "取消"
            }
        },
    };
    var dialogRoot = null;

    //定义确定的回调函数
    function confirmCallback() {
        hideDialog();
        console.log("confirm");
    }

    //定义取消的回调函数
    function cancelCallback() {
        hideDialog();
        console.log("cancel");
    }

    //定义dialog显示的方法
    function showDialog() {
        if (dialogRoot) {
            dialogRoot.style.display = "block";
        }
        console.log("showDialog");
    }

    //定义dialog隐藏的方法
    function hideDialog() {
        if (dialogRoot) {
            dialogRoot.style.display = "none";
        }
        console.log("hideDialog");
    }
//     <!--<div class="w-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 shadow-md p-6 rounded-lg">-->
//     <!--    <div class="flex gap-3">-->
// <!--        <div class="w-30 h-30 rounded-15 bg-orange-300 leading-30 justify-center items-center text-center text-white">!</div>-->
//     <!--        <div class="text-3xl">标题</div>-->
//     <!--    </div>-->
//     <!--    -->
//     <!--    <div class="my-4">我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</div>-->
//     <!--    <div class="flex justify-end">-->
//         <!--        <div class="py- border rounded-sm">取消</div>-->
//         <!--        <div class="py-2 px-3 border rounded-sm ml-2 bg-black text-white border-black">确定</div>-->
//         <!--    </div>-->
//         <!--</div>-->
    var titleDivLeft =null;
    function createStruct(options) {
        var container = document.createElement("div");
        container.className = "w-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 shadow-md p-6 rounded-lg";

        //修改------开始
        var titleDiv = document.createElement("div");
        titleDiv.className = "flex";

        titleDivLeft = document.createElement("div");
        titleDivLeft.className = "w-30 h-30 rounded-15 leading-30 justify-center items-center text-center text-white mr-3";
        titleDivLeft.style.display="none";


        var title = document.createElement("div");
        title.className = "text-3xl";
        title.innerText = options.title;

        var containerElement = document.createElement("div");
        containerElement.className = "mt-4";
        containerElement.innerHTML = options.message;

        var buttonContainer = document.createElement("div");
        buttonContainer.className = "flex justify-end mt-4";


        var confirmButton = document.createElement("div");
        confirmButton.className = "py-2 px-3 border rounded-sm ml-2 bg-black text-white border-black";
        confirmButton.innerText = options.buttons.confirm.text;
        confirmButton.addEventListener("click", function () {
            confirmCallback();
            options.success();

        });

        var cancelButton = document.createElement("div");
        cancelButton.className = "py-2 px-3 border rounded-sm";
        cancelButton.innerText = options.buttons.cancel.text;
        cancelButton.addEventListener("click", function () {
            cancelCallback();
            options.fail();
        });

        buttonContainer.appendChild(cancelButton);
        buttonContainer.appendChild(confirmButton);

        titleDiv.appendChild(titleDivLeft);
        titleDiv.appendChild(title);
        container.appendChild(titleDiv);
        container.appendChild(containerElement);
        container.appendChild(buttonContainer);
        return container;

    }

    function createDialog(config) {
        config = config || {};
        if (!(typeof config.title === "string" && typeof config.message === "string")) {
            return;
        }
        var configure = _.merge(defaultConfig, config);

        dialogRoot = createStruct(configure);
        console.log(dialogRoot);
        document.body.appendChild(dialogRoot);
        // showDialog();
        return {
            confirm: function () {
                titleDivLeft.style.display = "block";
                titleDivLeft.classList.add("bg-orange-300");
                titleDivLeft.innerText = "!";
            },
            info: function () {
                titleDivLeft.style.display = "block";
                titleDivLeft.classList.add("bg-blue-500");
                titleDivLeft.innerText = "i";
            },
            warning: function () {
                titleDivLeft.style.display = "block";
                titleDivLeft.classList.add("bg-orange-300");
                titleDivLeft.innerText = "i";
            },
            error: function () {

            }
        };
    }

    window.createDialog = createDialog;
})(window)
