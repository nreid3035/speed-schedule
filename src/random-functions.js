

function switchMonthToNumber(month) {
    let result = null
    switch(month) {
        case "Jan": 
          result = 1;
          break;
        case "Feb": 
          result = 2;
          break;
        case "Mar": 
          result = 3;
          break;
        case "Apr": 
          result = 4;
          break;
        case "May": 
          result = 5
          break;
        case "Jun": 
          result = 6;
          break;
        case "Jul": 
          result = 7;
          break;
        case "Aug": 
          result = 8;
          break;
        case "Sep": 
          result = 9;
          break;
        case "Oct": 
          result = 10;
          break;
        case "Nov": 
          result = 11;
          break;
        case "Dec": 
          result = 12;
          break;
        
    }

    return result
}

function switchDayToNumber(day) {
    let result = null
    switch(day) {
      case '1st': 
        result = 1;
        break; 
      case '2nd': 
        result = 2;
        break;
      case '3rd': 
        result = 3;
        break;
      case '4th': 
        result = 4;
        break;
      case '5th': 
        result = 5;
        break;
      case '6th': 
        result = 6;
        break;
      case '7th': 
        result = 7;
        break;
      case '8th': 
        result = 8;
        break;
      case '9th': 
        result = 9;
        break;
      case '10th': 
        result = 10;
        break;
      case '11th': 
        result = 11;
        break;
       case '12th': 
        result = 12;
        break;
      case '13th': 
        result = 13;
        break;
      case '14th': 
        result = 14;
        break;
      case '15th': 
        result = 15;
        break;
      case '16th': 
        result = 16;
        break;
      case '17th': 
        result = 17;
        break;
      case '18th': 
        result = 18;
        break;
      case '19th': 
        result = 19;
        break;
      case '20th': 
        result = 20;
        break;
      case '21st': 
        result = 21;
        break;
      case '22nd': 
        result = 22;
        break;
      case '23rd': 
        result = 23;
        break;
      case '24th': 
        result = 24;
        break;
      case '25th': 
        result = 25;
        break;
      case '26th': 
        result = 26;
        break;
      case '27th': 
        result = 27;
        break;
      case '28th': 
        result = 28;
        break;
      case '29th': 
        result = 29;
        break;
      case '30th': 
        result = 30;
        break;
      case '31st': 
        result = 31;
        break;

    }

    return result
}

export {
    switchMonthToNumber,
    switchDayToNumber
}