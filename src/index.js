module.exports =function reverse(n) {

    const result = []
    for (let i = 0; i < n.toString().length; i++) {
        if(n.toString()[i]!=='-') result.unshift(n.toString()[i])
    }
return ~~result.join('');
}

