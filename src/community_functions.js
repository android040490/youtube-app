export function parseTime(str){
    let list = str.match(/\d+/g);
    let subl = list.slice(1).map( i => (i.length == 2) ? i : '0' + i)
    let newList = [list[0]].concat(subl);
    if (newList.length == 1){
      return `00:${newList[0]}`
    }
    return newList.join(':') 
}

export function trimString(str, num){
    return ( str.length > num ) ? str.substring(0, num) + '...' : str;
  }