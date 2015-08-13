<div>
	 <table>
        <tbody> <!-- This table is to enter data-->
            <tr>
                <td>Enter ID: {{occupation}} </td><td>
                <input type="text" ng-model="employee.id"/></td>
            </tr>
            <tr>
                <td>Enter Name: </td><td>
                <input type="text" ng-model="employee.name"/></td>
            </tr>
            <tr>
                <td>Enter Occupation: </td><td>
                <input type="text" ng-model="employee.occupation"/></td>
            </tr>
            <tr>
                <td>Enter Gender: </td><td>
                <input type="text" ng-model="employee.gender"/></td>
            </tr>
            <tr>
                <td>Enter Age: </td><td>
                <input type="text" ng-model="employee.age"/></td>
            </tr>
            <tr> 
                <td><input type="button" ng-show="!editMode"
                ng-click="addEmployee(employee)" value="Add Employee"/></td>

                <td><input type="button" ng-show='editMode'
                ng-click="updateEmployee(employee)" value="Add Employee"/></td>
            </tr>
        </tbody>
    </table>
</div>