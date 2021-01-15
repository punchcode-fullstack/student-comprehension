function reverseString(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        newStr = str.charAt(i) + newStr
    }
    return newStr
}

function handleForm(e) {
    e.preventDefault()
    const val = document.querySelector('#reverseInput').value
    if (val) {
        const reversed = reverseString(val)
        document.querySelector('#output').innerHTML = reversed
    }
}

document.querySelector('#reverseForm')
.addEventListener('submit', handleForm)

