const LIST = { 
    "1111111111" : "6기 - 김형우", "jon1004kkqwe" : "6기 - 김성민", "ghgh1028" : "6기 - 심기준", "flrmdhqmwnsgk0062" : "6기 - 장준하", "bdw3649" : "6기 - 백동우",
    "vita0927": "5기 - 김태은", "amsminn": "5기 - 김채완", "erolf0123": "5기 - 남승원", "third1234": "5기 - 심민성", "jwpassion1": "5기 - 유재원", "dldbcks": "5기 - 이유찬", "myyh1234": "5기 - 조찬우", 
    "wesley2003": "4기 - 심준", "j07801": "4기 - 김종민", "junseo": "4기 - 김준서", "clone_of_teacher": "4기 - 김준서", "hahorse": "4기 - 서윤하", "lkm06042": "4기 - 이경민", "lkyeon328": "4기 - 이기연", "cho5160": "4기 - 조성욱", "hibye1217": "4기 - 이성현", "kimho0304": "4기 - 김호", "prarie": "4기 - 박세훈", 
    "swote": "3기 - 권노현", "jhnah917": "3기 - 나정휘", "liasly": "3기 - 윤승재", "solsam10": "3기 - 이든솔", "aura02": "3기 - 조강준", "junjun0926": "3기 - 조강준", "hnsk2109": "3기 - 채하늘", "bomin5957": "3기 - 최보민", "hyoseung6030": "3기 - 최효승", "uvelo": "3기 - 김기현", "leewj1025": "3기 - 이원재", "jtg0221": "3기 - 정태규", "wtd315": "3기 - 장시연", 
    "godong10208": "2기 - 고동현", "kwonarseus": "2기 - 권민성", "qkrehddus01": "2기 - 박동연", "coxie": "2기 - 이승재", "klimmek55": "2기 - 이재호", "jimin": "2기 - 이지민", "jaemin8852": "2기 - 임재민", "wkd1685": "2기 - 장한", 
    "hsmin920": "1기 - 황상민", "proqk": "1기 - 이유진", "lemonade31": "1기 - 장세한", "jeong000307": "1기 - 정규용", "chongin12": "1기 - 정종인", 
    "skyoun97": "0기 - 전현성", "wookje": "0기 - 권욱제", "wo_okje": "0기 - 권욱제", "healgaren": "0기 - 최예찬", 
    "tyg03485": "강사 - 김정래", "tonyjjw": "강사 - 지정우" 
};

let list = document.getElementsByTagName("a");
for(let i=0; i<list.length; i++){
    let txt = list[i].innerText.toLowerCase();
    if(LIST[txt]) list[i].innerHTML += "<br><span style='color:gray;font-size:x-small'>(" + LIST[txt] + ")</span>";
}