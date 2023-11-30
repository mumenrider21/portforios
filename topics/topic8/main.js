const video = document.querySelector('#video');
const canvas = document.createElement('canvas');
let img, classifier;

initVideoCamera();
initPhoto();
document.querySelector('#shoot').addEventListener('click', photoShoot);
//document.querySelector('#shoot').addEventListener('click', searchx);


/**
 * ビデオのカメラ設定(デバイスのカメラ映像をビデオに表示)
 */
function initVideoCamera() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then((stream) => {
            video.srcObject = stream;
            video.play();
        })
        .catch(e => console.log(e));
}

/**
 * 写真の初期描画
 */
function initPhoto() {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);
    document.querySelector("#photo").src = canvas.toDataURL("image/png");
}

/**
 * 写真の撮影描画
 */
function photoShoot() {
    let drawSize = calcDrawSize();
    canvas.width = drawSize.width;
    canvas.height = drawSize.height;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    document.querySelector("#photo").src = canvas.toDataURL("image/png");

    setTimeout(()=>{
        searchx();
    }, 3000);
    // honyaku();
  }

  function searchx() {
    console.log("onload!!");  
    // HTMLから画像ファイルを取得します
    img = document.getElementById("photo");
    // 分類器を作ります
    classifier = ml5.imageClassifier("MobileNet", modelReady);
  

  }

  function modelReady(){
    console.log("modelReady");
    // 分類器を使って判別を実行します
    classifier.classify(img, (err, results) => {
      console.log(results);
      if(results){
        for(let result of results){
          console.log(result.label);
          document.querySelector("#stock").append(result.label,',');

          honyaku2();

          

        }
      }
    });
  }

/**
 * 描画サイズの計算
 * 縦横比が撮影(video)が大きい時は撮影の縦基準、それ以外は撮影の横基準で計算
 */
function calcDrawSize() {
    let videoRatio = video.videoHeight / video.videoWidth;
    let viewRatio = video.clientHeight / video.clientWidth;
    return videoRatio > viewRatio ?
        { height: video.clientHeight, width: video.clientHeight / videoRatio }
        : { height: video.clientWidth * videoRatio, width: video.clientWidth }

      
}





async function handle(e) {
  name = "extra";
  key = "5b37d68901799f71e8937f26add0fafd06309732b";
  secret = "71d1b17cfdc7e26e6232a9a750c038d2";
  text = e.target.value;

  const oauth = OAuth({
    consumer: { key, secret },
    signature_method: "HMAC-SHA1",
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    }
  });

  const options = {
    url: "https://mt-auto-minhon-mlt.ucri.jgn-x.jp/api/mt/generalNT_en_ja/",
    method: "POST",
    data: { text, name, key, type: "json" }
  };

  const cors_support = "https://corsproxy.io/?";
  const res = await fetch(cors_support + options.url, {
    method: options.method,
    body: new URLSearchParams(options.data),
    headers: oauth.toHeader(oauth.authorize(options))
  }).then((r) => r.json());
  document.all.output.value = res.resultset.result.text;

}

function honyaku(){
// 要素への参照を取得
var textMsg = document.getElementById('stock');
// コンソールにテキストを表示
console.log(textMsg.textContent);
}





async function honyaku2() {
console.log("giagdi");
  // 要素への参照を取得
var textMsg = document.getElementById('stock');
// コンソールにテキストを表示
console.log(textMsg.textContent);

  name = "extra";
  key = "5b37d68901799f71e8937f26add0fafd06309732b";
  secret = "71d1b17cfdc7e26e6232a9a750c038d2";
  text = result.label ;
  console.log(text);

  const oauth = OAuth({
    consumer: { key, secret },
    signature_method: "HMAC-SHA1",
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    }
  });

  const options = {
    url: "https://mt-auto-minhon-mlt.ucri.jgn-x.jp/api/mt/generalNT_en_ja/",
    method: "POST",
    data: { text, name, key, type: "json" }
  };

  const cors_support = "https://corsproxy.io/?";
  const res = await fetch(cors_support + options.url, {
    method: options.method,
    body: new URLSearchParams(options.data),
    headers: oauth.toHeader(oauth.authorize(options))
  }).then((r) => r.json());
  document.all.output.value = res.resultset.result.text;

}