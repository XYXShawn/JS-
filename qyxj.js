/*
qingyanxiangji

Surge 4.0 :
[Script]
http-response ^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/ requires-body=1,max-size=0,script-path=script/qyxj.js
~~~~~~~~~~~~~~~~
Surge MITM = commerce-api.faceu.mobi


*/


let obj = JSON.parse($response.body);
obj ={
"ret":"0",
"errmsg":"Success",
"systime":"",
"data":{
"flag":true,
"start_time":1579094492,
"end_time":3725012184,
"is_first_subscribe":false,
"is_cancel_subscribe":false,
"uid":"4089778978429341",
"subscribe_uid":"70851259049"
}
};
$done({body: JSON.stringify(obj)});