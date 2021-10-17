window.addEventListener('DOMContentLoaded', (event) => {
   createInnerHtml();
   document.querySelector(".emp-count").textContent= createEmployeePayrollJSON().length;
  });
  
  let createInnerHtml = () => {
   
    let headerHTML="<tr> <th> </th><th>Name</th> <th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHTML = `${headerHTML}`;
    let employeePayrollList = createEmployeePayrollJSON();
 
    for (const employeePayrollData of employeePayrollList) {
     innerHTML = `${innerHTML}
   
<tr><td>
    <img class="profile" src="${employeePayrollData._profilePic}">
    </td>
    <td>${employeePayrollData._name}</td>
    <td>${employeePayrollData._gender}</td>
    <td>
        ${getDeptHtml(employeePayrollData._department)}

    </td>
    <td>${employeePayrollData._salary}</td>
    <td>${employeePayrollData._startDate}</td>
    <td>
        <img alt="delete" src="../asset/icons/delete-black-18dp.svg">
        <img alt="edit" src="../asset/icons/create-black-18dp.svg">
    </td>
</tr>`;
    }
     document.querySelector("#display").innerHTML = innerHTML;
  }

  const getDeptHtml =(deptList) =>{
      let deptHtml= '';
      for(const dept of deptList){
          deptHtml=`${deptHtml} <div class='dept-label'>${dept}</div>`
      }
     return deptHtml;
  }



  const createEmployeePayrollJSON = () => {
    let empPayrollDB = [

        {
            "_id": 1,
            "_name": "Tony",
            "_gender": "male",
            "_department": [
                "Finance","sales"
            ],
            "_salary": "500000",
            "_startDate": "10 Oct 2021",
            "_note": "All In One",
            "_profilePic": "../asset/profile-images/Ellipse -2.png"
        },
        {
            "_id": 4,
            "_name": "Ria",
            "_gender": "female",
            "_department": [
                "HR",
                "Other"
            ],
            "_salary": "450000",
            "_startDate": "2 Oct 2020",
            "_note": "",
            "_profilePic": "../asset/profile-images/Ellipse -1.png",
            
        }

    ];
    return empPayrollDB;
  }