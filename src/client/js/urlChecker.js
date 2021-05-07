function checkForUrl(url) {
    console.log("::: Running checkForUrl :::", url);
    let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const reg = new RegExp(expression);
    return url.match(reg);
}

export { checkForUrl };
