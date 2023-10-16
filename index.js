const formattedDate = (d = '') => {
    try {
        const date = (!!d) ? new Date(d) : new Date()
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    } catch (e) {

    }
}

const formattedTime = (d = '') => {
    try {
        const date = (!!d) ? new Date(d) : new Date()
        return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    } catch (e) {

    }
}

const formattedDateTime = (d = '') => {
    try {
        const date = (!!d) ? new Date(d) : new Date()
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    } catch (e) {

    }
}

const addItemFromJson = (json, nameItem, value) => {
    try {
        json[nameItem] = value
        return json
    } catch (e) {
        console.error(e.message)
    }
}

const deleteItemFromJson = (json, nameItem) => {
    try {
        delete json[nameItem]
        return json
    } catch (e) {
        console.error(e.message)
    }
}

const fileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
})

const getAddressFromCep = cep => {
    try {
        return new Promise((resolve, reject) => {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((response) => response.json())
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    } catch (e) {
        console.error(e.message)
    }
}

const randomNumber = (size = 10) => {
    try {
        const date = new Date()
        const a = (Math.pow(date.getMilliseconds(), 4))
        const b = Math.floor(Math.random() * Math.pow(size, size))
        return (a + b).toString().substring(0, size)
    } catch (e) {
        console.error(e.message)
    }
}

const removeAccents = string => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const cleanTextToNumbers = string => string.replace(/[^\d]+/g, '').trim()

const showData = data => {
    try {
        if (data) {
            data = data.split('').reverse().join('')
            data = decodeURIComponent(escape(Buffer.from(data, 'base64').toString('utf-8')))
            data = JSON.parse(data)
            return data
        }
    } catch (e) {
        console.error(e.message)
    }
}

const hideData = data => {
    try {
        if (data) {
            data = JSON.stringify(data)
            data = Buffer.from(unescape(encodeURIComponent(data))).toString('base64')
            data = data.split('').reverse().join('')
            data = data.replaceAll('=', '')
            return data
        }
    } catch (e) {
        console.error(e.message)
    }
}

const isTrue = (value = '') => {
    try {
        if (value !== null)
            value = value.trim()
        return ((!!value) && (value !== 'null') && (value !== 'undefined'))
    } catch (e) {
        console.error(e.message)
    }
    return false
}

const isPassword = password => {
    try {
        let letrasMaiusculas = /[A-Z]/
        let letrasMinusculas = /[a-z]/
        let numeros = /[0-9]/
        let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/
        let auxMaiuscula = 0
        let auxMinuscula = 0
        let auxNumero = 0
        let auxEspecial = 0
        for (let i = 0; i < password.length; i++) {
            if (letrasMaiusculas.test(password[i]))
                auxMaiuscula++
            else if (letrasMinusculas.test(password[i]))
                auxMinuscula++
            else if (numeros.test(password[i]))
                auxNumero++
            else if (caracteresEspeciais.test(password[i]))
                auxEspecial++
        }
        if (auxMaiuscula <= 0) return 'Senha de ter uma letra maiúscula'
        if (auxMinuscula <= 0) return 'Senha de ter uma letra minuscula'
        if (auxEspecial <= 0) return 'Senha de ter um carácter especial'
        if (auxNumero <= 0) return 'Senha de ter um número'
        if (password.length < 8) return 'Menos de 8 digitos'
        return true
    } catch (e) {
        console.error(e.message)
    }
}

const isPhone = (phone) => {
    try {
        if (typeof phone != 'string')
            phone = phone.toString()
        phone = phone.replace(/\D/g, '')
        return phone.match(/^((5{2})?(\d{2})?([987])?(\d{4})(\d{4}))$/)
    } catch (e) {
        console.error(e.message)
    }
}

const isObjectEmpty = object => {
    if (Array.isArray(object))
        return object.length === 0
    else
        return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype
}

const isEmpty = value => {
    try {
        if (typeof value === 'object')
            return isObjectEmpty(value)
        else
            return (value === 'null' || value === null || value === 'undefined' || value === undefined || value === '')
    } catch (e) {
        console.error(e.message)
    }
    return true
}

const isDebug = (port = '3000') => {
    try {
        return (window.location.host === `localhost:${port}`)
    } catch (e) {

    }
    return false
}

const isEmail = email => {
    try {
        if (email === '' || !email.includes('@')) return false
        const user = email.substring(0, email.indexOf('@'))
        const domain = email.substring(email.indexOf('@') + 1, email.length)
        return ((user.length >= 1)
            && (domain.length >= 3)
            && (user.search('@') === -1)
            && (domain.search('@') === -1)
            && (user.search(' ') === -1)
            && (domain.search(' ') === -1)
            && (domain.search('.') !== -1)
            && (domain.indexOf('.') >= 1)
            && (domain.lastIndexOf('.') < domain.length - 1))
    } catch (e) {
        console.error(e.message)
    }
}

const isCPF = cpf => {
    try {
        cpf = cpf.replace(/[^\d]+/g, '')
        if (cpf === '') return false
        if (cpf.length !== 11 ||
            cpf === '00000000000' ||
            cpf === '11111111111' ||
            cpf === '22222222222' ||
            cpf === '33333333333' ||
            cpf === '44444444444' ||
            cpf === '55555555555' ||
            cpf === '66666666666' ||
            cpf === '77777777777' ||
            cpf === '88888888888' ||
            cpf === '99999999999')
            return false
        let add = 0
        let rev
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i)
        rev = 11 - (add % 11)
        if (rev === 10 || rev === 11)
            rev = 0
        if (rev !== parseInt(cpf.charAt(9)))
            return false
        add = 0
        for (let i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i)
        rev = 11 - (add % 11)
        if (rev === 10 || rev === 11)
            rev = 0
        if (rev !== parseInt(cpf.charAt(10)))
            return false
        return true
    } catch (e) {
        console.error(e.message)
    }
}

const isCNPJ = cnpj => {
    try {
        /* eslint-disable */
        cnpj = cnpj.replace(/[^\d]+/g, '')
        if (cnpj === '') return false
        if (cnpj.length !== 14)
            return false
        if (cnpj === '00000000000000' ||
            cnpj === '11111111111111' ||
            cnpj === '22222222222222' ||
            cnpj === '33333333333333' ||
            cnpj === '44444444444444' ||
            cnpj === '55555555555555' ||
            cnpj === '66666666666666' ||
            cnpj === '77777777777777' ||
            cnpj === '88888888888888' ||
            cnpj === '99999999999999')
            return false;
        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0, tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
        /* eslint-enable */
    } catch (e) {
        console.error(e.message)
    }
}

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

const isMobile = () => {
    let check = false;
    ((a) => {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera)
    return check
}

const isNumber = value => typeof value === 'number' && isFinite(value)

const maskPhone = phone => {
    if (phone !== '') {
        phone = phone.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2')
        phone = phone.substring(0, 14)
        return phone
    }
}

const maskDate = data => {
    let v = data.replace(/\D/g, '').slice(0, 10)
    if (v.length >= 5) {
        return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`
    } else if (v.length >= 3) {
        return `${v.slice(0, 2)}/${v.slice(2)}`
    }
    return v
}

const maskCPF = cpf => cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

module.exports = {
    formattedDate,
    formattedTime,
    formattedDateTime,
    addItemFromJson,
    deleteItemFromJson,
    fileToBase64,
    getAddressFromCep,
    randomNumber,
    removeAccents,
    cleanTextToNumbers,
    showData,
    hideData,
    isTrue,
    isPassword,
    isPhone,
    isEmpty,
    isObjectEmpty,
    isDebug,
    isEmail,
    isCPF,
    isCNPJ,
    isIOS,
    isMobile,
    isNumber,
    maskPhone,
    maskDate,
    maskCPF
}
