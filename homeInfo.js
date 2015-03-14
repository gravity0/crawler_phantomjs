// Headless ブラウザの生成
var page = require('webpage').create();
var fs = require('fs');

// URL を開く

// URL を開く
page.open('http://www.fudousan.or.jp/system/?act=d&type=31&pref=13&stype=l&city[]=13114&rl=l&rh=h&n=20&p=1&v=on&s=&bid=00507593&org=ZN', function(status) {
		console.log('start');
	if (status === 'success') {
		// ブラウザ内で JS を実行してデータを受け取る
		console.log('success');
		var title = page.evaluate(function() {
			var title = document.title;
			return title;
		});
		var content = page.evaluate(function() {
      //テキストで取得
      //var content = document.body.textContent
      //HTMLで取得
			var content = document.body.innerHTML;
			return content;
		});
    fs.write('./homeInfo.txt', content, 'w');
		//console.log(title);
		console.log(content);
    //console.log(document.textContent)
	}
	// exit しないと終了しない
	phantom.exit();
});
