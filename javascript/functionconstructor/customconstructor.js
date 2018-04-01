/**
 * Created by ithir on 31-01-2018.
 */
function Book(name, year) {
    this.name = name;
    this.year = '(' + year + ')';

    Book.prototype.color ="green";
}

var firstbook =new Book("Angularjs",2014);
var secondbook =new Book("Secrets of java",2013);
var thirdbook  =new Book("javascript pattans",2010);


console.log(firstbook.name,firstbook.year)
console.log(secondbook.name,secondbook.year)
console.log(firstbook.color)
console.log(secondbook.color)