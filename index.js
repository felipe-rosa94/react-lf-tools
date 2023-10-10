const test = text => console.log(text)

const isObjectEmpty = object => object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype

const removeAccents = string => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const cleanTextToNumbers = string => string.replace(/[^\d]+/g, '').trim()

module.exports = {
    test,
    isObjectEmpty,
    removeAccents,
    cleanTextToNumbers
}
