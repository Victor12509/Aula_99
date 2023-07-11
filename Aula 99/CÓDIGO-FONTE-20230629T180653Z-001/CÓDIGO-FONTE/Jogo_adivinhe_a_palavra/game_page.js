function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("palavra em letras minúsculas - " + word);

    charAt1 = word.charAt (1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);

    lenght_minus_1 = word.lenght - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-infor' onclick='check()'>Verificar</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}