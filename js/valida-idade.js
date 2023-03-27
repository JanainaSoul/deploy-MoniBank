export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value); //new Date vai receber a data do htm
    // console.log(dataNascimento);
    // validaIdade(dataNascimento);

    // console.log(validaIdade(dataNascimento));
    if(!validaIdade(dataNascimento)){
    campo.setCustomValidity('O usuário não é maior de idade');
}

}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= dataMais18;
}