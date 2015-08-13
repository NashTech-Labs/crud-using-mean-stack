<div>
    <div style="margin-bottom: 12px;">
        <input type="button" class="btn btn-success" ui-sref="add" value="Add" style="width: 11%;font-size: 15px;">
    </div>


<div class="searchBar">
<label>Search Here: </label>
<input type="text"  ng-model="searchText"/>
</div>
<div style="border:1px solid black; min-height:200px">
        <table >
            <tr>
               <!--  <th>ID</th> -->
                <th>Name</th>
                <th>Occupation</th>
                <th>Gender</th>
                <th>Age</th>
            </tr>
            <tr  class="animate" ng-repeat="employee in record | filter: searchText "> 
           
                <td>{{employee.name}}</td>
                <td>{{employee.occupation}}</td>
                <td>{{employee.gender}}</td>
                <td>{{employee.age}}</td>
                <td>
                    <input class="btn btn-primary" type="button"  ui-sref="edit({'_id':employee._id})" value="edit" />
                </td>
                <td>
                    <input class="btn btn-danger" type="button" ui-sref="deleteEmployee({'_id':employee._id})" value="Delete" />
                </td>
            </tr>
        </table>
    </div>
    </div>