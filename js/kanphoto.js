// This is a JavaScript file
//CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "../data/ikeda.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}
 
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
 
    var spotList=document.getElementById("main");
    var spotListText=("");
    for(var j=1;j<result.length;++j){
        if(result[j][1]=="体験"){
            spotListText+="<div id='harf'><a class='a2'>"+result[j][2]+"</a></br><img src='../img/kp/"+result[j][3]+"' class='photo'><br></a><br><div class='box25'>"+result[j][4]+"</div></br>";
            for(var k=5;k<result[j].length-1;++k){
                if(result[j][k]!=""){
                    spotListText+="<li>"+result[j][k]+"</li></br>";
                }
            }
            spotListText+="</div>";
            spotList.innerHTML=spotListText;
        }

    }
}
getCSV(); 

var x = 100;
function larger()  { x *= 1.2; document.body.style.fontSize = x + '%'; }
function smaller() { x /= 1.2; document.body.style.fontSize = x + '%'; }

