/**
 * Created by ithir on 04-01-2018.
 */
$(document).ready(function () {
    var employeeList = [];
    var updatedIndex;

    $('.update').hide()
    $(".Add").click(function () {
        var employeeData = {
            EmployeeName: $(".Name").val(),
            EmployeeAge: $(".Age").val(),
            EmployeeSalary: $(".Salary").val()

        }

        console.log(employeeList.push(employeeData));
        clearText()
        buildemployeeList(employeeList);

    })

    var tBody = $(".tbody");


    function clearText() {
        $(".Name").val('');
        $(".Age").val('');
        $(".Salary").val('')
    }


    function buildemployeeList(employeeList) {
        tBody.empty()
        $.each(employeeList, function (index, obj) {
            var trdata = $('<tr></tr>');
            trdata.append($('<td></td>').text(index + 1));
            trdata.append($('<td></td>').text(obj.EmployeeName));
            trdata.append($('<td></td>').text(obj.EmployeeAge));
            trdata.append($('<td></td>').text(obj.EmployeeSalary));
            var td = $('<td></td>')
            td.append($('<button>Delete</button>').addClass("delete" +index ))
            td.append($('<button>Edit</button>').addClass("edit" +index))
            trdata.append(td)
            tBody.append(trdata)
            $(".delete" +index).click(onClickDel)
            $(".edit" +index).click(onClickEdit)
        })
    }


    function onClickDel() {
        var paranttr = $(this).parent().parent()
        var totaltd = paranttr.children()
        var deletedata = totaltd[0].innerText
        console.log(index)
        var index = deletedata - 1
        employeeList.splice(index, 1);
        buildemployeeList(employeeList)
    }


    function onClickEdit() {
        var paranttr = $(this).parent().parent()
        var totaltd = paranttr.children()
        var editdata = totaltd[0].innerText
        var index = editdata - 1
        updatedIndex = index
        var editableobj = employeeList[index]
        $('.update').show()
        $('.Add').hide()
        $(".Name").val(editableobj.EmployeeName);
        $(".Age").val(editableobj.EmployeeAge);
        $(".Salary").val(editableobj.EmployeeSalary)


        console.log(editableobj)


    }

    $('.update').click(function () {
        $('.update').hide()
        $('.Add').show()
        var updatedEmpObj = {
                EmployeeName: $(".Name").val(),
                EmployeeAge: $(".Age").val(),
                EmployeeSalary: $(".Salary").val()
            };

        employeeList.splice(updatedIndex,1,updatedEmpObj);
        buildemployeeList(employeeList);
        clearText()
    })


});