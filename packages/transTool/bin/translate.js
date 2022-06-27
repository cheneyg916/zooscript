#! /usr/bin/env node

const say = require("say");
const colors = require("colors");
const argv = require("yargs").argv,
    queryStr = encodeURI(argv._.join(" "));

if (!queryStr) {
    //命令后没有参数
    console.log("请输入单词or短句[-S,--say]");
} else {
    //有参数--say或-S,播放
    if (argv.say == true || argv.S == true) {
        console.log("播放中...".rainbow);
        say.speak(queryStr);
        return;
    }
    //进行查词
    translate(queryStr);
}

// 格式化返回数据
function format(json) {
    let data = JSON.parse(json),
        pronTitle = "发音：",
        pron = data.basic ? data.basic.phonetic : "无",
        mainTitle = "翻译：",
        mainTrans = "",
        webTitle = "网络释义：",
        machineTrans = "",
        webTrans = "",
        template = "";
    let basic = data.basic,
        web = data.web,
        translation = data.translation;
    if (basic ? basic : "") {
        for (let i = 0; i < basic.explains.length; i++) {
            mainTrans += "\n" + basic.explains[i];
        }
    }
    if (web ? web : "") {
        for (let i = 0; i < web.length; i++) {
            webTrans +=
                "\n" +
                (i + 1) +
                ": " +
                web[i].key.brightYellow.bold +
                "\n" +
                web[i].value.join(",");
        }
    }
    translation ? (machineTrans = translation) : false;
    template =
        pronTitle.magenta.bold +
        pron +
        "\n" +
        "机器翻译：".cyan.bold +
        machineTrans +
        "\n" +
        mainTitle.green.bold +
        mainTrans +
        "\n" +
        webTitle.blue.bold +
        webTrans
    console.log(template);
}
// 发送请求
function translate(query) {
    let http = require("http");
    let options = {
        host: "fanyi.youdao.com",
        port: "80",
        path:
            "/openapi.do?keyfrom=translation-tool&key=1730699468&type=data&doctype=json&version=1.1&q=" +
            query,
    };
    // 回调函数
    let callback = function (response) {
        response.on("data", function (data) {
            //对返回的数据进行格式化和高亮
            format(data);
        });
        response.on("end", function () {
            // 数据接收完成
            console.log("···························");
        });
    };
    // 向服务端发送请求
    let req = http.request(options, callback);
    req.end();
}