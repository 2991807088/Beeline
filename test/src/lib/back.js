document.addEventListener('plusready', function () {
    var webview = plus.webview.currentWebview();
    plus.key.addEventListener('backbutton', function () {
        webview.canBack(function (e) {
            if (e.canBack) {
                let yilian=plus.webview.getWebviewById( 'yinlian' )
                if(yilian){
                    plus.webview.close( "yinlian")
                }
                // if(canBack){
                //     plus.runtime.quit();
                // }
                webview.back(-1); //返回上一页  
            } else {
                // if(canBack){
                //     plus.runtime.quit();
                // }
                webview.close(); //关闭应用  
            }
        })
    });
})