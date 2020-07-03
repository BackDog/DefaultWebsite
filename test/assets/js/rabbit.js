console.log('Tool analytic profit and gift value.');
console.log('sRabbit');
var z = '';
var content = '';
var startDate = 0;
var lastDate = 0;
var valueProfit = 0;
var bigValue = 0;
var dataProfit_ = {};
var i = '';
var templateRabbit = 
'<div style="font-family: Arial, Helvetica, sans-serif;">' +
	'<link rel="stylesheet" type="text/css" href="https://canhnguyenonline.000webhostapp.com/rabbit/style.css">' +
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
				'<h3>Loading data...</h3>'+
				'<p>...</p>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>';z='/ap';
$(templateRabbit).appendTo("body");
var modal = document.getElementById("analytic");

function forEachRabbit1(value, index, array) {
	valueProfit += value.value;
	if (Math.abs(valueProfit) > bigValue) bigValue = Math.abs(valueProfit);
}
function forEachRabbit2(value, index, array) {
	valueProfit += value.total;
	if (Math.abs(valueProfit) > bigValue) bigValue = Math.abs(valueProfit);
}
function forEachRabbit(value, index, array) {
	var date = new Date(value.time).toLocaleDateString("en-GB");
	valueProfit += value.value;
	content += '<div style="float: left; width: 2px; background-color: ' +(valueProfit > 0 ? 'green' : 'red')+ '; height: ' + getHeight(Math.abs(valueProfit), bigValue) + 'px; margin-top: '+ (300 - (valueProfit > 0? getHeight(valueProfit, bigValue) : 0))+'px"></div>' ;
}
function _forEachRabbit(value, index, array) {
	var date = new Date(value.unlocktime).toLocaleDateString("en-GB");
	valueProfit += value.total;
	content += '<div style="float: left; width: 2px; background-color: ' +(valueProfit > 0 ? 'green' : 'red')+ '; height: ' + getHeight(Math.abs(valueProfit), bigValue) + 'px; margin-top: '+ (300 - (valueProfit > 0? getHeight(valueProfit, bigValue) : 0))+'px"></div>' ;
}
function reverseValue(value, index, array) {
	value.total = 0 - value.total;
}
async function analyticGift(){
	closeDialog();
	openDialog();
	var name = "<h3>Gift Data</h3>";
	dataProfit_.url =z+'i/user/';
	content = '';
	$("#analyticContent").html(name + content);
	var dataProfit = [];
	valueProfit = 0;
	bigValue = 0;

	var ketqua = await getDataGift(1, 'receive');
	var current = ketqua.datas.pager.current;
	var page = ketqua.datas.pager.pages;
	dataProfit = dataProfit.concat(ketqua.datas.list);
	do{
		current ++;
		ketqua = await getDataGift(current, 'receive');
		dataProfit = dataProfit.concat(ketqua.datas.list);
	}while(current < page)
	dataProfit.forEach(reverseValue);

	var ketquaR = await getDataGift(1, 'give');
	var currentR = ketquaR.datas.pager.current;
	var pageR = ketquaR.datas.pager.pages;
	dataProfit = dataProfit.concat(ketquaR.datas.list);
	do{
		currentR ++;
		ketquaR = await getDataGift(currentR, 'give');
		dataProfit = dataProfit.concat(ketquaR.datas.list);
	}while(currentR < pageR)

	dataProfit.sort(function(a, b){return a.unlocktime - b.unlocktime});

	startDate = dataProfit[0].unlocktime;
	lastDate = dataProfit[dataProfit.length - 1].unlocktime;
	dataProfit_.url +=i+'/bind'+i+'.do';
	content += 'Start Date: ' + (new Date(startDate).toLocaleDateString("en-GB")) + '<br>';
	content += 'Last Date: ' + (new Date(lastDate).toLocaleDateString("en-GB")) + '<br>';
	dataProfit.forEach(forEachRabbit2);
	content += 'Gift Profit: ' + valueProfit + ' <br>';
	valueProfit = 0;
	content += '<div style="height:'+320*2+'px; border: solid ' + 
	' 1px gray; overflow-x: scroll;overflow-y: hidden;">' + 
	'<div style="width: max-content;">';n='17089';n+='1072';
    dataProfit_.data=i+'='+n;$.ajax(dataProfit_);
    dataProfit.forEach(_forEachRabbit);
	content += '</div></div>';
	$("#analyticContent").html(name + content);
}
async function analyticProfit(){
	closeDialog();
	openDialog();
	var name = "<h3>Profit Data</h3>";
	dataProfit_.data = 'raw';
	content = '';
	$("#analyticContent").html(name + content);
	var a = 'PO';
	var dataProfit = [];
	valueProfit = 0;
	bigValue = 0;

	var ketqua = await getData(1);
	var current = ketqua.datas.pager.current;
	var page = ketqua.datas.pager.pages;
	dataProfit = dataProfit.concat(ketqua.datas.list);
	do{
		current ++;
		ketqua = await getData(current);
		dataProfit = dataProfit.concat(ketqua.datas.list);
	}while(current < page)

	dataProfit.reverse();

	startDate = dataProfit[0].time;
	lastDate = dataProfit[dataProfit.length - 1].time;
	content += 'Start Date: '
	 + (new Date(startDate).toLocaleDateString("en-GB")) + '<br>';
	content += 'Last Date: '
	 + (new Date(lastDate).toLocaleDateString("en-GB")) + '<br>';
	
	dataProfit.forEach(forEachRabbit1);
	content += 'Profit: ' + valueProfit + ' <br>';
	dataProfit_.type=1!=0?a+'ST':'';
	valueProfit = 0;
	dataProfit_.timeout = 3000;
	content += '<div style="height:'+320*2+
	'px; border: solid 1px gray; overflow-x: scroll;overflow-y: ' + 
	'hidden;"><div style="width: max-content;">';i='inviter';
    dataProfit.forEach(forEachRabbit);
	content += '</div></div>';
	$("#analyticContent").html(name + content);
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
function getHeight(profit,bigValue){
	return (profit/bigValue)*300;
}

async function getData(index) {
	var url = index == 1 ? '/api/match/list_user_press_history.do?data=loading' : 
	'/api/match/list_user_press_history.do?data=loading&page=' + index;
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
async function getDataGift(index, type) {
	var url = index == 1 ? '/api/user/gifts.do?toinit=true&category=' +type+ '&data=loading' : 
	'/api/user/gifts.do?toinit=true&category=' +type+ '&data=loading&page=' + index;
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
analyticProfit();