<div style="border:1px solid black; min-height:100px">
        <table>
        
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Occupation</th>
                <th>Gender</th>
                <th>Age</th>
            </tr>
            <tr >
               <!--  <td>{{employee._id}}</td>
 -->                <td>{{employee.name}}</td>
                <td>{{employee.occupation}}</td>
                <td>{{employee.gender}}</td>
                <td>{{employee.age}}</td>
               
               <td><input class="btn btn-danger" type="button" ng-click="deleteEmployee(employee._id)" value="Confirm"/></td>
                
            </tr>
        </table>
    </div>