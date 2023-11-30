let img, classifier;

window.onload = (event)=>{
	console.log("onload!!");
	// HTMLから画像ファイルを取得します
	img = document.getElementById("my_image");
	// 分類器を作ります
	classifier = ml5.imageClassifier("MobileNet", modelReady);
}

function modelReady(){
	// 分類器を使って判別を実行します
	classifier.classify(img, (err, results) => {
		console.log(results);
	});
}