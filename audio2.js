window.onload = function() {

    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var source;
    var buffers = {};

    var displayPanel;
    displayPanel = document.getElementById("displayPanel");

    // 数字に対応する音源のマップ
    var audioMap = {
        50: '50.mp3',
        51: '51.mp3',
        52: '52.mp3',
        53: '53.mp3',
        54: '54.mp3',
        55: '55.mp3',
        56: '56.mp3',
        57: '57.mp3',
        58: '58.mp3',
        59: '59.mp3',
        60: '60.mp3',
        61: '61.mp3',
        62: '62.mp3',
        63: '63.mp3',
        64: '64.mp3',
        65: '65.mp3',
        66: '66.mp3',
        67: '67.mp3',
        68: '68.mp3',
        69: '69.mp3',
        70: '70.mp3',
        71: '71.mp3',
        72: '72.mp3',
        73: '73.mp3',
        74: '74.mp3',
        75: '75.mp3',
        76: '76.mp3',
        77: '77.mp3',
        78: '78.mp3',
        79: '79.mp3',
        80: '80.mp3',
        81: '81.mp3',
        82: '82.mp3',
        83: '83.mp3',
        84: '84.mp3',
        85: '85.mp3',
        86: '86.mp3',
        87: '87.mp3',
        88: '88.mp3',
        89: '89.mp3',
        90: '90.mp3',
        91: '91.mp3',
        92: '92.mp3',
        93: '93.mp3',
        94: '94.mp3',
        95: '95.mp3',
        96: '96.mp3',
        97: '97.mp3',
        98: '98.mp3',
        99: '99.mp3',
        100: '100.mp3',
        101: '101.mp3',
        102: '102.mp3',
        103: '103.mp3',
        104: '104.mp3',
        105: '105.mp3',
        106: '106.mp3',
        107: '107.mp3',
        108: '108.mp3',
        109: '109.mp3',
        110: '110.mp3',
        111: '111.mp3',
        112: '112.mp3',
        113: '113.mp3',
        114: '114.mp3',
        115: '115.mp3',
        116: '116.mp3',
        117: '117.mp3',
        118: '118.mp3',
        119: '119.mp3',
        120: '120.mp3',
        121: '121.mp3',
        122: '122.mp3',
        123: '123.mp3',
        124: '124.mp3',
        125: '125.mp3',
        126: '126.mp3',
        127: '127.mp3',
        128: '128.mp3',
        129: '129.mp3',
        130: '130.mp3',
        131: '131.mp3',
        132: '132.mp3',
        133: '133.mp3',
        134: '134.mp3',
        135: '135.mp3',
        136: '136.mp3',
        137: '137.mp3',
        138: '138.mp3',
        139: '139.mp3',
        140: '140.mp3',
        141: '141.mp3',
        142: '142.mp3',
        143: '143.mp3',
        144: '144.mp3',
        145: '145.mp3',
        146: '146.mp3',
        147: '147.mp3',
        148: '148.mp3',
        149: '149.mp3',
        150: '150.mp3',
        151: '151.mp3',
        152: '152.mp3',
        153: '153.mp3',
        154: '154.mp3',
        155: '155.mp3',
        156: '156.mp3',
        157: '157.mp3',
        158: '158.mp3',
        159: '159.mp3',
        160: '160.mp3',
        161: '161.mp3',
        162: '162.mp3',
        163: '163.mp3',
        164: '164.mp3',
        165: '165.mp3',
        166: '166.mp3',
        167: '167.mp3',
        168: '168.mp3',
        169: '169.mp3',
        170: '170.mp3',
        171: '171.mp3',
        172: '172.mp3',
        173: '173.mp3',
        174: '174.mp3',
        175: '175.mp3',
        176: '176.mp3',
        177: '177.mp3',
        178: '178.mp3',
        179: '179.mp3',
        180: '180.mp3',
        181: '181.mp3',
        182: '182.mp3',
        183: '183.mp3',
        184: '184.mp3',
        185: '185.mp3',
        186: '186.mp3',
        187: '187.mp3',
        188: '188.mp3',
        189: '189.mp3',
        190: '190.mp3',
        191: '191.mp3',
        192: '192.mp3',
        193: '193.mp3',
        194: '194.mp3',
        195: '195.mp3',
        196: '196.mp3',
        197: '197.mp3',
        198: '198.mp3',
        199: '199.mp3',
        200: '200.mp3'
        
        
        // 必要に応じて他の音源も追加できます
    };

    // オーディオファイルをロードする関数
    function loadAudio(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = function() {
            if (request.status === 200) {
                audioContext.decodeAudioData(request.response, function(buffer) {
                    callback(buffer);
                }, function(e) {
                    console.log('Error decoding audio data: ' + e.err);
                });
            } else {
                console.log('Failed to load audio file: ' + request.status);
            }
        };

        request.onerror = function() {
            console.log('BufferLoader: XHR error');
        };

        request.send();
    }

    // 数字に基づいて音源を再生する関数
    window.playAudioByNumber = function() {
        var audioNumber = parseInt(document.getElementById('audioNumber').value);
        if (audioMap[audioNumber]) {
            if (buffers[audioNumber]) {
                playAudio(buffers[audioNumber]);
            } else {
                loadAudio(audioMap[audioNumber], function(buffer) {
                    buffers[audioNumber] = buffer;
                    playAudio(buffer);
                });
            }
        } else {
            alert('50から200までの数字を入力してって私言いましたよね???');
        }
    };


    // 数字に基づいて音源を再生する関数
    window.playAudioByNumberS = function() {
        var audioNumberS = parseInt(document.getElementById('audioNumberS').value);
        if (audioMap[audioNumberS]) {
            if (buffers[audioNumberS]) {
                playAudio(buffers[audioNumberS]);
            } else {
                loadAudio(audioMap[audioNumberS], function(buffer) {
                    buffers[audioNumberS] = buffer;
                    playAudio(buffer);
                });
            }
        } else {
            alert('Invalid number. Please enter a valid number.');
        }
    };

    // オーディオを再生する関数
    function playAudio(buffer) {
        if (source) {
            source.stop(0);
        }
        source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = true;  // ループを有効にする
        source.connect(audioContext.destination);
        source.start(0);
    }

    // オーディオを一時停止する関数
    window.pauseAudio = function() {
        if (source) {
            source.stop(0);
            source = null;
        }
    };

    var displayPanel,controlPanel,textBox;




    displayPanel = document.getElementById("displayPanel");
    controlPanel = document.getElementById("controlPanel");
    textBox = document.getElementById("textBox")
    var applyButton = document.getElementById("applyButton");
    var clearButton = document.getElementById("clearButton");

    applyButton.addEventListener("click",applyButtonClick, false);
    clearButton.addEventListener("click",applyButtonClick, false);

    tick();  

    inputElem.addEventListener('input',rangeOnChange);
    setCurrentValue(inputElem.value);


};

function tick(){
    var date = new Date();
    displayPanel.textContent = date.toLocaleTimeString();
    setTimeout(tick, 1000 - date.getMilliseconds());
}

function applyButtonClick(event){
    var text =textBox.value;
    displayPanel.textContent = text;

}

const inputElem = document.getElementById('audioNumberS');
const currentValueElem = document.getElementById('current-value');

const setCurrentValue = (val) => {
    currentValueElem.innerText = val;
}

const rangeOnChange = (e) =>{
    setCurrentValue(e.target.value);
}
