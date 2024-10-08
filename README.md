## Funções úteis em React.js
O pacote npm "react-lf-tools" oferece um conjunto de funções utilitárias otimizadas para o desenvolvimento em React.js. Simplifique seu código e economize tempo com essas ferramentas essenciais.

### Funções

-   `formattedDate` - Obtém a data formatada.
-   `formattedTime` - Obtém a hora formatada.
-   `formattedDateTime` - Obtém data e hora formatada.
-   `addItemFromJson` - Adiciona item ao JSON e retorna.
-   `deleteItemFromJson` - Remove item no JSON e retorna.
-   `fileToBase64` - Converte um arquivo em Base64.
-   `getAddressFromCep` - Retorna o endereço pelo Cep passado, o metodo deve ser assíncrono.
-   `randomNumber` - Gera um número aleatório, podendo escolher o tamanho do número.
-   `cleanTextToNumbers` - Remove todos os caracteres que não são números e retorna.
-   `clearText` - Remove todos os caracteres especiais incluindo espaços e retorna tudo em minúsculo.
-   `showData` - Ofusca o valor passado e retorna.
-   `hideData` - Desofusca o valor passado e retorna.
-   `checkUndefined` - Verifica se o valor passado é diferente de undefined ou null, se for retorna ou uma string vazia ou um valor passado.
-   `isTrue` - Verifica se o valor é verdadeiro.
-   `isPassword` - Verifica se é uma senha válida com padrão forte, contendo letras maiúsculas, minúsculas, números e caracteres especiais.
-   `isPhone` - Verifica se é um telefone válido.
-   `isEmpty` - Verifica se valor passado é vazio, podendo ser (Array, Object ou String).
-   `isObjectEmpty` - Verifica se o objeto está vazio.
-   `isDebug` - Verifica se o React está em localhost, por padrão na porta 3000, mas pode ser passada a porta ultilizada.
-   `isEmail` - Verifica se é um e-mail válido.
-   `isCPF` - Verifica se é um CPF válido.
-   `isCNPJ` - Verifica se é um CNPJ válido.
-   `isIOS` - Verifica se o dispositivo é IOS.
-   `isMobile` - Verifica se o dispositivo é um mobile.
-   `isNumber` - Verifica se valor passado é um número.
-   `maskPhone` - Cria uma máscara de telefone.
-   `maskDate` - Cria uma máscara de data.
-   `maskCPF` - Cria uma máscara de CPF.
-   `maskCPF_CNPJ` - Cria uma máscara de CPF e CNPJ.
-   `maskCEP` - Cria uma máscara de CEP.
-   `maskCard` - Cria uma máscara de cartão.
-   `apiRequest` - Faz requisições HTTP.
-   `copy` - Copia para a área de transferência.
-   `hasNinthDigit` - Verifica se tem o digito 9 no número de telefone.
-   `capitalizeFirstLetter` - Capitaliza a primeira letra.
-   `searchEmJSON` - Converte o campo search da url em JSON.
