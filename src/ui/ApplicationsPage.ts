import init from '../domain/admission/admissionstab/AdmissionsTabApp';

export class ApplicationsPage {
  static templateUrl = '/partials/applications.html';
  constructor() {
    init();
  }
}
