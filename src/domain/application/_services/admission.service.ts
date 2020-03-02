import {config} from '../../../config';
import {commonFunctions} from '../_utilites/common.functions';

export const admissionService = {
  getLoggedInUser,
  // getCmsTerms,
  // getCmsBatches,
  // getCmsAcademicYears,
  // getCmsSections,
  // getGlobalConfiguration,
  // getCmsSubjects,
  // getCmsTeachers,
  // getFilterAttendanceMasterByDepartment
};

function getLoggedInUser() {
  const requestOptions = commonFunctions.getRequestOptions('GET', {}, {});
  let user = null;
  return fetch(config.LOGGED_IN_USER_URL);
  // .then( response => response.json() )
  // .then((data) => {
  //     user = data.login;
  //     console.log("logged in user. data.login --- ",user);
  // })
}

// function getCmsTerms(ayId: any) {
//     const requestOptions = commonFunctions.getRequestOptions("GET", {});
//     return fetch(config.CMS_TERM_BY_ACYEAR_URL + '?academicYearId=' + ayId, requestOptions)
//         .then(response => response.json());
// }

// function getCmsBatches(departmentId: any) {
//     const requestOptions = commonFunctions.getRequestOptions("GET", {});
//     return fetch(config.CMS_BATCH_BY_DEPARTMENT_URL + departmentId, requestOptions)
//         .then(response => response.json());
// }

// function getCmsAcademicYears(departmentId: any) {
//     const requestOptions = commonFunctions.getRequestOptions("GET", {});
//     return fetch(config.CMS_ACADEMICYEAR_URL + departmentId, requestOptions)
//         .then(response => response.json());
// }

// function getCmsSections(batchId: any) {
//     const requestOptions = commonFunctions.getRequestOptions("GET", {});
//     return fetch(config.CMS_SECTION_BY_BATCH_URL + batchId, requestOptions)
//         .then(response => response.json());
// }

// function getCmsSubjects(departmentId: any) {
//     const requestOptions = commonFunctions.getRequestOptions("GET", {});
//     return fetch(config.CMS_SUBJECT_BY_DEPARTMENT_URL + '?departmentId=' + departmentId, requestOptions)
//         .then(response => response.json());
// }

// function getCmsTeachers(departmentId: any) {
//     const requestOptions = commonFunctions.getRequestOptions("GET", {});
//     return fetch(config.CMS_TEACHER_BY_FILTER_PARAM_URL + '?deptId=' + departmentId, requestOptions)
//         .then(response => response.json());
// }

// function getFilterAttendanceMasterByDepartment(departmentId: any) {
//     const requestOptions = commonFunctions.getRequestOptions("GET", {});
//     return fetch(config.CMS_AM_BY_DEPARTMENT_URL + '?departmentId=' + departmentId, requestOptions)
//         .then(response => response.json());
//   }

// function getGlobalConfiguration(userName: any) {
//     const requestOptions = commonFunctions.getRequestOptions("GET", {});
//     return fetch(config.CMS_GLOBAL_CONFIG_URL + '?userName=' + userName, requestOptions)
//         .then(response => response.json());
// }