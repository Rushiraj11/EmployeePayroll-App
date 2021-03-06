let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
   empPayrollList=getEmployeeDataFromStorage();
   createInnerHtml();
   document.querySelector(".emp-count").textContent= empPayrollList.length;
   localStorage.removeItem('editEmp');
  });

  const getEmployeeDataFromStorage = () => {
      return localStorage.getItem("EmployeePayrollList") ?
      JSON.parse(localStorage.getItem("EmployeePayrollList")) : [] ;
  }
  
  let createInnerHtml = () => {
   
    let headerHTML="<tr> <th> </th><th>Name</th> <th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHTML = `${headerHTML}`;
  // let employeePayrollList = createEmployeePayrollJSON();
 
    for (const employeePayrollData of empPayrollList) {
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
    <td>${stringifyDate(employeePayrollData._startDate)}</td>
    <td>
        <img id=${employeePayrollData.id} alt="delete" src="../asset/icons/delete-black-18dp.svg" onClick=remove(this)>
        <img id=${employeePayrollData.id} alt="edit" src="../asset/icons/create-black-18dp.svg" onClick=update(this)>
    </td>
</tr> `;
    }
     document.querySelector('#display').innerHTML = innerHTML;
  }

  const getDeptHtml = (deptList) => {
      let deptHtml= '';
      for (const dept of deptList) {
          deptHtml=`${deptHtml} <div class = 'dept-label'>${dept}</div>`
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

 const remove = (data) => {
       let employeeData = empPayrollList.find(empData => empData.id == data.id);
       if (!employeeData)
           return;
       const index = empPayrollList.map(empData => empData.id).indexOf(employeeData.id);
       empPayrollList.splice(index, 1);
       localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
       document.querySelector(".emp-count").textContent = empPayrollList.length;
       createInnerHtml();

}
const update = (data) => {
    let employeePayrollData = empPayrollList.find(empData => empData.id == data.id);
    if (!employeePayrollData)
        return;
    localStorage.setItem('editEmp', JSON.stringify(employeePayrollData));
    window.location.replace(site_Properties.add_empPage);
}


