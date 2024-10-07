let name = "alex"
let money = 10000
let account = 7777

let name2 = prompt("Как вас зовут?")
if(name == name2.toLowerCase()) {
    let number = prompt("номер счёта") 
    if(number == account){
        let cashOut = +prompt("сколько обналичить?")
        if(cashOut == money || cashOut < money){
            alert("всё отлично!")
            alert(`Кол-во снятых денег ${cashOut}`);
            alert(`Текущий баланс ${money - cashOut}`);
        } else {
            alert("недостаточно средств!")
            }
     } else {
        alert("пользователь не найден, досвидули")
        }
        
 } else {
    let bye = alert("пользователь не найден, досвидули")
    }