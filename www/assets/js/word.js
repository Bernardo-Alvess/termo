async function getGameWord(){
    const response = await fetch("/word", {})
    const text = await response.text()
    return text
}

async function setWord(){
    word = await getGameWord();
    return word
}
 