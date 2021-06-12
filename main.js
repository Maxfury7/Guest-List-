name_of_array_students = [];
function submit(){
    var display_student_array = [];
    for(var j=1;j<=4;j++){
        var name_of_the_students = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_students);
        name_of_array_students.push(name_of_the_students);
    }
    console.log(name_of_array_students);
    var length_of_students=name_of_array_students.length;
    console.log(length_of_students);

    for(var k=0;k<length_of_students;k++){
        display_student_array.push("<h4>NAME-"+name_of_array_students[k]+"</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML= display_student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_array_students.sort();
    console.log(name_of_array_students);
    var display_student_array_sorting = [];
    var length_of_student=name_of_array_students.length;
    console.log(length_of_student);
    for(var k=0;k<length_of_student;k++){
        display_student_array_sorting.push("<h4>NAME-"+name_of_array_students[k]+"</h4>");
        console.log(display_student_array_sorting);
}
document.getElementById("display_name_without_commas").innerHTML=display_student_array_sorting;
}
function search(){
    var s=document.getElementById("s").value;
    var display_student_array_searching= [];
    var found=0;
    for (j=0; j<name_of_array_students.length; j++)
    {
        if (s==name_of_array_students[j]){
            found=found+1;
        }
    }
    
    document.getElementById("display_name_without_comma").innerHTML=name_of_array_students;
    document.getElementById("name_of_the_student_2").innerHTML="name found" +found+"time/s";
    console.log("name found"+found+"time/s");
}