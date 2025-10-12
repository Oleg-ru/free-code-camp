function titleCase(str) {
    const result = [];
    str.split(' ').forEach(element => result.push(element[0].toUpperCase() + element.slice(1).toLowerCase()));
    return result.join(' ');
}

//console.log(titleCase("I'm a little tea pot"));