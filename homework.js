function getAverage(employees){
    let sum =0;
    employees.forEach(employee => {
        console.log(employee.salary);
        sum = sum + employee.salary*1;
        
    });
    console.info(sum);
    return sum/employees.length ;
}
 var average = getAverage(employees);
 console.info(average);