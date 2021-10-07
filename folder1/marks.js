function validateMarks1(ab)
{
    var mark=document.getElementById(ab);
  
    if (mark.value>1)
    {
        alert("you have entered ," + mark.value +" greater than max marks for student-qno"+ ab);
       
        return false;
    }
    else

    return true;
}

function validateMarks3(xy)
{
    var mark1=document.getElementById(xy);
  
    if (mark1.value>3)
    {
        alert("you have entered ," + mark1.value +" greater than max marks for student-qno "+ xy);
       
        return false;
    }
    else
    return true;

}