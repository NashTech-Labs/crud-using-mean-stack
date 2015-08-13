<div style="border:1px solid black; min-height:200px">
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Occupation</th>
                <th>Gender</th>
                <th>Age</th>
            </tr>
            <tr ng-repeat="employee in record">
                <td>{{employee._id}}</td>
                <td>{{employee.name}}</td>
                <td>{{employee.occupation}}</td>
                <td>{{employee.gender}}</td>
                <td>{{employee.age}}</td>
                <td>
                    <input type="button" ui-sref="edit({'index':$index})" value="edit" />
                </td>
                <td>
                    <input type="button" ng-click="del(record.indexOf(employee))" value="Delete" />
                </td>
            </tr>
        </table>
    </div>