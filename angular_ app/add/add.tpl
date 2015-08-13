

<form class="form-horizontal">
  <div class="form-group">
    <label for="name" class="col-sm-2 control-label">Name :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="name" ng-model="employee.name" placeholder="Enter Name" required>
    </div>
  </div>
  <div class="form-group">
    <label for="occupation" class="col-sm-2 control-label">Occupation :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="occupation" ng-model="employee.occupation" placeholder="Enter Occupation" required>
    </div>
  </div>
  <div class="form-group">
    <label for="gender" class="col-sm-2 control-label">Gender :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="gender" ng-model="employee.gender" placeholder="Gender" required>
    </div>
  </div>
  <div class="form-group">
    <label for="age" class="col-sm-2 control-label">Age :</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="age" ng-model="employee.age" placeholder="Enter your age" required>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-5">
      <input type="submit" class="btn btn-default" ng-show="!editMode" ng-click="addEmployee(employee)" value="Add Employee"/>
      <input type="submit" class="btn btn-default" ng-show="editMode" ng-click="updateEmployee(employee)" value="Update Employee"/>
    </div>
  </div>
</form>



<!-- <div>
	 <table>
        <tbody> 
            <tr>
                <td ng-show="editMode">Enter ID:  </td><td>
                <input type="text" ng-show="editMode" ng-model="employee._id"/></td>
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
                <td><input class="btn btn-primary" type="button" ng-show="!editMode"
                ng-click="addEmployee(employee)" value="Add Employee"/></td>

                <td><input class="btn btn-primary" type="button" ng-show='editMode'
                ng-click="updateEmployee(employee)" value="Update Employee"/></td>
            </tr>
        </tbody>
    </table>
</div> -->