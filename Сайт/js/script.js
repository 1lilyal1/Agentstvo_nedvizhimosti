document.getElementById("ControlStandart").click();

var id = 4;

var Sdelka = [
        [1,3,2,64543.53,103630.59],
        [2,1,3,70655.43,103966.29],
        [3,2,4,99087.06,103630.59]
		];
var Predlosheniya = [
        [1, "Савельев Владислав Агафонович", "Квартира", 3465543],
        [2, "Сергеев Ян Эдуардович", "Земельный участок", 4556614],
        [3, "Воронов Гарри Эдуардович", "Дом", 9999999],
        [4, "Князев Прохор Богданович", "Земельный участок", 3000000],
        [5, "Шубин Федор Макарович", "Дом", 4000000],
        [6, "Гусев Гордий Андреевич", "Квартира", 2000000],
        [7, "Овчинников Власий Александрович", "Земельный участок", 1000000],
        [8, "Жданов Владимир Авксентьевич", "Дом", 7000000],
        [9, "Колесников Юлий Платонович", "Квартира", 10000000],
        [10, "Морозов Касьян Александрович", "Дом", 3000000]
];
var Potrebnosti = [
        [1, "Галкин Лаврентий Львович", "Земельный участок"],
        [2, "Мишин Игорь Семенович", "Дом"],
        [3, "Артемьев Людвиг Матвеевич", "Квартира"],
        [4, "Горбунов Венедикт Куприянович", "Земельный участок"],
        [5, "Ширяев Ипполит Евсеевич", "Квартира"],
        [6, "Кулагин Юстиниан Львович", "Дом"],
        [7, "Степанов Овидий Натанович", "Дом"],
        [8, "Жданов Гордий Улебович", "Дом"],
        [9, "Шилов Дональд Агафонович", "Земельный участок"],
        [10, "Романов Тарас Иринеевич", "Квартира"]
];

var idChange = 0;
var Change = false;
var ButtonSdelka =  document.getElementById('ButtonSdelka');

var ComboBoxPredlosheniya  = document.getElementById('ComboBoxPredlosheniya');
ComboBoxPredlosheniya.addEventListener("change", changeOption);
var ComboBoxPotrebnosti  = document.getElementById('ComboBoxPotrebnosti');

var tableSdelka  = document.getElementById('tableSdelka');
var tablePredlosheniya  = document.getElementById('tablePredlosheniya');
var tablePotrebnosti  = document.getElementById('tablePotrebnosti');

LoadComboBox(1);
LoadComboBox(2);

LoadTable(1);
LoadTable(2);
LoadTable(3);
changeOption();
// LoadTableSdelka(Sdelka, tableSdelka,Predlosheniya,Potrebnosti);
// LoadTablePredlosheniya(Predlosheniya, tablePredlosheniya);
// LoadTablePotrebnosti(Potrebnosti, tablePotrebnosti);


function LoadComboBox(ComboBox) {
	if(ComboBox == 1)
    for (let i = 0; i < window.Predlosheniya.length; i++)
    {
 	    window.ComboBoxPredlosheniya.innerHTML += "<option value='"+window.Predlosheniya[i][0]+"'>" + window.Predlosheniya[i][2] + " ценой " + window.Predlosheniya[i][3] + " (Риелтор: "+ window.Predlosheniya[i][1]+") </option>";
    }
	else
	for (let i = 0; i < window.Potrebnosti.length; i++)
    {
 	    window.ComboBoxPotrebnosti.innerHTML += "<option value='" + window.Potrebnosti[i][0] + "'>" + window.Potrebnosti[i][1] + " хочет " + window.Potrebnosti[i][2] + "</option>";
    }
}

//Показ таблица в браузере
function LoadTable(Table) {
	if (Table == 1)
	{
		window.tableSdelka.innerHTML = "";
		window.tableSdelka.innerHTML += "<tr><td>Предложения</td></td><td>Риэлтор клиента</td><td>Комиссии для клиента-продавц</td><td>Комиссии для клиента-покупателя</td></tr>";
		for (let i = 0; i < window.Sdelka.length; i++)
		{
			window.tableSdelka.innerHTML += "<tr class='" + window.Sdelka[i][0] + "'><td>" + 
			IdToStr(window.Sdelka[i][1], window.Predlosheniya)[2] + " ценой " + IdToStr(window.Sdelka[i][1], window.Predlosheniya)[3] + " (Риэлтор:" + IdToStr(window.Sdelka[i][1], window.Predlosheniya)[1] + ")"
			+ "</td><td>" + 
			IdToStr(window.Sdelka[i][2], window.Potrebnosti)[1]
			+ "</td><td>" + 
			window.Sdelka[i][3]
			+ "</td><td>" + 
			window.Sdelka[i][4]
			+ "</td><td>"
			+ "<button onclick='ButtonChange(event, 1)' style='margin-right: 5px;'>Редактировать</button>" 
			+ "<button onclick='ButtonDelete(event, 1)'>Удалить</button></td></tr>";
		}
	}
	else if (Table == 2) {
		window.tablePredlosheniya.innerHTML = "";
		window.tablePredlosheniya.innerHTML += "<tr><td>Риэлтор</td></td><td>Объект недвижимости</td><td>Цена</td></tr>";
		for (let i = 0; i <window.Predlosheniya.length; i++)
		{
			window.tablePredlosheniya.innerHTML += "<tr class='" + window.Predlosheniya[i][0] + "'><td>" +window.Predlosheniya[i][1] + "</td><td>" +window.Predlosheniya[i][2] + "</td><td>" +window.Predlosheniya[i][3] + "</td></tr>";
		}
	} else {
		window.tablePotrebnosti.innerHTML = "";
		window.tablePotrebnosti.innerHTML += "<tr><td>Клиент</td></td><td>Потребность</td></tr>";
		for (let i = 0; i < window.Potrebnosti.length; i++)
		{
			window.tablePotrebnosti.innerHTML += "<tr class='" + window.Potrebnosti[i][0] + "'><td>" + window.Potrebnosti[i][1] + "</td><td>" + window.Potrebnosti[i][2] + "</td></tr>";
		}
	}
}

function IdToStr(Id, Table) {
 	for(let i = 0; i < Table.length; i++){
		if(Table[i][0] == Id){
			return Table[i];
		}
	}
}



function ButtonAddClick(evt, Funcsss) {
	if(window.Change == true) return;
	if(Funcsss == 1){
		var val = window.ComboBoxPredlosheniya.options[window.ComboBoxPredlosheniya.selectedIndex].value;
		var val2 = window.ComboBoxPotrebnosti.options[window.ComboBoxPotrebnosti.selectedIndex].value;
		let StringPredlosheniya = IdToStr(val, window.Predlosheniya);
		let StringPotrebnosti = IdToStr(val2, window.Potrebnosti);
		
		if(StringPredlosheniya[2] != StringPotrebnosti[2])
		{
			alert("Клиенту нужна другая потребность - " + StringPotrebnosti[2]);
			return;
		}
		
		for(let i = 0; i < window.Sdelka.length; i++){
			if(window.Sdelka[i][1] == val){
				alert("Это предложение уже занято");
				return;			
			}
		}
		
		for(let i = 0; i < window.Sdelka.length; i++){
			if(window.Sdelka[i][2] == val2){
				alert("Эта потребность удовлетворена");
				return;			
			}
		}
		
		window.id++;
		Sdelka.push([window.id,val,val2,ProcentKlientProdavec(StringPredlosheniya),Procents(StringPredlosheniya[3],3)]);
		LoadTable(1);
	}
}
function ProcentKlientProdavec(Potrebnosti) {
	switch (Potrebnosti[2]) {
  case "Квартира":
		return 36000 + Procents(Potrebnosti[3],1);
    break;
  case "Земельный участок":
		return 30000 + Procents(Potrebnosti[3],2);
    break;
  case "Дом":
		return 30000 + Procents(Potrebnosti[3],1);
    break;
	}
}
function Procents(Summ, Procent) {
	return (Summ * Procent) / 100;
}

function ButtonChange(event, Funcsss) {
	if(Funcsss == 1){
		let id = event.target.parentElement.parentElement.className;
		window.idChange = id;
		window.ButtonSdelka.innerHTML = "Сохранить"
		window.ButtonSdelka.setAttribute('onclick', 'ButtonSave(this, 1)');
		
		window.Change = true;
		for(let i=0; i < window.Sdelka.length; i++){
			if(window.Sdelka[i][0] == id)
			{
				window.ComboBoxPredlosheniya.selectedIndex = StringToComboBox(window.Sdelka[i][1], 1);
				window.ComboBoxPotrebnosti.selectedIndex = StringToComboBox(window.Sdelka[i][2], 2);
				return;
			}
		}
	}
}

//Сохранение отредактированной инфы
function ButtonSave(event, Funcsss) {
	if(Funcsss == 1){
		for(let i = 0; i<window.Sdelka.length; i++){
			if(window.Sdelka[i][0] == window.idChange){
				var val = window.ComboBoxPredlosheniya.options[window.ComboBoxPredlosheniya.selectedIndex].value;
				var val2 = window.ComboBoxPotrebnosti.options[window.ComboBoxPotrebnosti.selectedIndex].value;
				let StringPredlosheniya = IdToStr(val, window.Predlosheniya);
				let StringPotrebnosti = IdToStr(val2, window.Potrebnosti);
				if(StringPredlosheniya[2] != StringPotrebnosti[2])
				{
					alert("Клиенту нужна другая потребность - " + StringPotrebnosti[2]);
					return;
				}
				if(window.Sdelka[i][1] == val && window.Sdelka[i][2] == val2)
				{
					
					
					
				}else 
				{
					for(let i = 0; i < window.Sdelka.length; i++){
						if(window.Sdelka[i][1] == val){
							alert("Это предложение уже занято");
							return;			
						}
					}
					
					for(let i = 0; i < window.Sdelka.length; i++){
						if(window.Sdelka[i][2] == val2){
							alert("Эта потребность удовлетворена");
							return;			
						}
					}
				}
				Sdelka[i][1] = val;
				Sdelka[i][2] = val2;
				Sdelka[i][3] = ProcentKlientProdavec(StringPredlosheniya);
				Sdelka[i][4] = Procents(StringPredlosheniya[3],3);
					LoadTable(1);
					window.Change = false;
					window.ButtonSdelka.innerHTML = "Добавить"
					window.ButtonSdelka.setAttribute('onclick', 'ButtonAddClick(this, 1)');
					return;
			}
		}
	} 
	else
	{

	}
	
}
function StringToComboBox(Id, Funcsss) {
	if(Funcsss == 1){
		for(let i=0; i < window.ComboBoxPredlosheniya.length; i++)
			if(window.ComboBoxPredlosheniya.options[i].value == Id)
			{
				return i;
			}
	} 
	else
	{
		for(let i=0; i < window.ComboBoxPotrebnosti.options.length; i++)
			if(window.ComboBoxPotrebnosti.options[i].value == Id)
			{
				return i;
			}
	}
}

function ButtonDelete(event, Funcsss) {
	if(window.Change == true) return;
	if(Funcsss == 1){
		if(confirm("Удалить сделку?")){
			let id = event.target.parentElement.parentElement.className;
			for(let i=0; i < window.Sdelka.length; i++){
				if(id == window.Sdelka[i][0])
				{
					window.Sdelka.splice(i,1);
					LoadTable(1);
					return;
				}
			}
		}
	}
}

//Подсчёт циферок
function changeOption(){
    var val = window.ComboBoxPredlosheniya.options[window.ComboBoxPredlosheniya.selectedIndex].value;
	let StringPredlosheniya = IdToStr(val, window.Predlosheniya);
	
	document.getElementById('DIV1').innerHTML = "Cтоимость услуг для клиента-продавца: " + ProcentKlientProdavec(StringPredlosheniya);
	document.getElementById('DIV2').innerHTML = "Стоимость услуг для клиента-покупателя: " + Procents(StringPredlosheniya[3],3);
	document.getElementById('DIV5').innerHTML = "Размер отчислений компании: " + (ProcentKlientProdavec(StringPredlosheniya) + Procents(StringPredlosheniya[3],3));
}

//Смена вкладки
function openControl(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}