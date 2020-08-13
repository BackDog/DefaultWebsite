console.log('Auto Play');

var myItems = [
	{
		id: 1,
		value: 6.08
	},
	{
		id: 2,
		value: 6.08
	},
	{
		id: 3,
		value: 2.23
	},
	{
		id: 4,
		value: 2.23
	},
	{
		id: 5,
		value: 2.23
	},
	{
		id: 6,
		value: 2.23
	},
	{
		id: 7,
		value: 1
	},
	{
		id: 8,
		value: 1
	},
	{
		id: 9,
		value: 1
	},
	{
		id: 10,
		value: 1
	}
];

async function getItemsInBag(){
	var url = 'api/user/bag/570/list.do?rel=user_bag&itemWidth=99&rows=200&data=loading';
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

function getListItemPlay(min, max) {
	var items = [];
	for(var i = 0; i < myItems.length; i++){
		if (myItems[i].value < max){
			min -= myItems[i].value;
			max -= myItems[i].value;
			items.push('ids=' + myItems[i].id + '&');
		}	
	}
	return items;
}

function buyItem(id){
	var url = '';
	var dataRaw = 'num=1&callbackType=no';
}

async function join(id, list){
	var url = 'coinflip/join.do';
	var ids = myItems.join('');
	var dataRaw = ids + 'cid=' + id + '&appid=570';
	url += '?' + dataRaw;

	console.log(url);
}

async function getDataGame(game, page) {
	var url = "api/match/list.do?rel=big_match&mode=waterfall&status=end&game=" + game + "&data=processed&page=" + page;
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


console.log(getListItemPlay(7, 8));