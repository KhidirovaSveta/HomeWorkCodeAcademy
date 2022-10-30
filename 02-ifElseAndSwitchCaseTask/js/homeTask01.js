/*1. Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin. 
Alqoritm  Switch Case  vasitəsi ilə hər iki dildə yazılsın. 
Məsələn. month=january dedikdə cavab january has 31 days, month=february dedikdə cavab february has 28 days şəklində olsun.*/


let month = "december"
switch (true) {
    case (month =="january"): console.log("January has 31 days");
    break;
    case (month == "february"): console.log("February has 28 days in a common year and 29 days in leap years");
    break
    case (month == "march"): console.log("March has 31 days");
    break;
    case (month == "april"): console.log("April has 30 days");
    break;
    case (month == "may"): console.log("May has 31 days");
    break;
    case (month == "june"): console.log("June has 30 days");
    break;
    case (month == "july"): console.log("July has 31 days");
    break;
    case (month == "august"): console.log("August has 31 days");
    break;
    case (month == "september"): console.log("September has 30 days");
    break;
    case (month == "october"): console.log("October has 31 days");
    break;
    case (month == "november"): console.log("November has 30 days");
    break;
    case (month == "december"): console.log("December has 31 days");
    break;
    default: 
       console.log("Is Not Found");
    break;
}