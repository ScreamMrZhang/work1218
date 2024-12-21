(function (window) {
    function setSizeConfig(max,unit) {
        var config = {};
        for(var i =1 ;i<max;i++){
            config[i] = `${i}${unit}`
        }
        return config;
    }
    window.tailwind.config = {
        darkMode: "selector",
        theme: {
            extend: {
                colors: {
                    primary: "#000000",
                },
                width: setSizeConfig(2000,"px"),
                height: setSizeConfig(1080,"px"),
                fontSize: setSizeConfig(300,"px"),
                borderRadius: setSizeConfig(300,"px"),
                lineHeight: setSizeConfig(300,"px"),
                marginLeft: setSizeConfig(500,"px"),
                backgroundImage: {
                    'abc': "url('https://inews.gtimg.com/om_bt/OLBqNKL6MzU-LPaJsFezkXFg3zzafG3X-aNd88oCNPgHMAA/641')",
                }
            },
        },
    };
})(window);