console.log("main.js!!");
let Bcode ;

$(document).ready(()=>{
	console.log("Ready!!");
});

$("#my_start").click(()=>{
	console.log("Start!!");

	// Quagga
	Quagga.init({
		inputStream: {
			name : "Live",
			type : "LiveStream",
			target: document.getElementById("my_quagga")
		},
		decoder: {
			readers: ["ean_reader"]
		}
	}, err=>{
		if(err){
			console.log(err);
			return;
		}
		console.log("Initialization finished!!");
		Quagga.start();
	});

	Quagga.onProcessed(result=>{
		if(result == null) return;
		if(typeof(result) != "object") return;
		if(result.boxes == undefined) return;
		const ctx = Quagga.canvas.ctx.overlay;
		const canvas = Quagga.canvas.dom.overlay;
		ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
		Quagga.ImageDebug.drawPath(result.box, 
			{x: 0, y: 1}, ctx, {color: "blue", lineWidth: 5});
	});

  let checkFlg = false;

	Quagga.onDetected(result=>{
		console.log(result.codeResult.code);

    if(checkFlg == true) return;
    checkFlg = true;

		$("#my_result").text(result.codeResult.code);
		$("#my_barcode div").barcode(result.codeResult.code, "ean13");
   Bcode = result.codeResult.code;
    
  open('https://search.rakuten.co.jp/search/mall/'+result.codeResult.code+'/');
  open('https://www.amazon.co.jp/s?k=' + result.codeResult.code + '&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=XPNDGV5EJSCD&sprefix=9784087520026+%2Caps%2C170&ref=nb_sb_noss');
	Quagga.stop();


	});
});
$("#my_stop").click(()=>{
	console.log("Stop!!");
	Quagga.stop();
});

let button1 = document.getElementById('mybtn1');
button1.addEventListener('click', () => {
  open('https://www.amazon.co.jp/s?k=' + Bcode + '&__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=XPNDGV5EJSCD&sprefix=9784087520026+%2Caps%2C170&ref=nb_sb_noss');
    console.log(open);
let datas = data.length;
	data[datas + 1] = Bcode;
	console.log(data.length);
            document.getElementById('list').appendChild(li);

			var todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
			todo.push(data);
			for (var i = 0; i < data.length; i++) {
				var li = document.createElement('li');
				li.textContent = data[i];
				document.getElementById('list').appendChild(li);
			}

});
let button2 = document.getElementById('mybtn2');
button2.addEventListener('click', () => {
  open('https://search.rakuten.co.jp/search/mall/'+result.codeResult.code+'/');
    console.log(open);
    { once: true }
});


let data = [];
data[0] = 10;
data[5] = 35;

console.log(data.length);
console.log(data);


var todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
        todo.push(data);
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            li.textContent = data[i];
            document.getElementById('list').appendChild(li);
        }