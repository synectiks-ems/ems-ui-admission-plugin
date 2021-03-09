import * as React from 'react';
import { componentType, Workflow } from '../Workflow';
class AdmissionWorkFlow extends React.Component<any, any> {
  workflowRef: any = null;
  constructor(props: any) {
    super(props);
    this.state = {
      data: 
        
        [{"title":"Personal Information","tabTitle":"Personal Information","subHeading":"Personal Information","content":[{"id":"studentType","name":"studentType","title":"Student Type","isRequired":true,"options":[{"label":"REGULAR","value":"regular"},{"label":"STAFF CONCESSION","value":"staff concession","isEdit":false},{"label":"BENIFITS","value":"benifits","isEdit":false},{"label":"SCHOLARSHIP","value":"scholarship"}],"errorMessage":"Please select student type","notice":"Please select student type","type":"select"},{"id":"studentImage","name":"studentImage","title":"Student Image","isRequired":false,"errorMessage":"This field is required.","notice":"please choose file","type":"file"},{"id":"batchId","name":"batchId","title":"Year","isRequired":false,"options":[],"errorMessage":"please select batch","notice":"please select batch","type":"select"},{"id":"sectionId","name":"sectionId","title":"Section","isRequired":false,"options":[],"errorMessage":"please select section","notice":"please select section","type":"select"},{"id":"studentName","name":"studentName","title":"Student Name","isRequired":true,"placeHolder":"Student Name","errorMessage":"please enter student Name","notice":"please enter student Name","validations":[],"type":"text"},{"id":"studentMiddleName","name":"studentMiddleName","title":"Student Middle Name","isRequired":false,"placeHolder":"Student Middle Name","errorMessage":"This field is required.","notice":"please enter student middle name","validations":[],"type":"text"},{"id":"studentLastName","name":"studentLastName","title":"Student Last Name","isRequired":true,"placeHolder":"student Last Name","errorMessage":"please enter student last name","notice":"please enter student last name","validations":[],"type":"text"},{"id":"fatherMiddleName","name":"fatherMiddleName","title":"Father Middle Name","isRequired":true,"placeHolder":"Father Middle Name","errorMessage":"please enter father middle Name","notice":"please enter father middle Name","validations":[],"type":"text"},{"id":"fatherLastName","name":"fatherLastName","title":"Father Last Name","isRequired":true,"placeHolder":"Father Last Name","errorMessage":"please enter father last name","notice":"please enter father last name","validations":[],"type":"text"},{"id":"motherName","name":"motherName","title":"Mother Name","isRequired":false,"placeHolder":"Mother Name","errorMessage":"This field is required.","notice":"please enter mother name","validations":[],"type":"text"},{"id":"motherMiddleName","name":"motherMiddleName","title":"Mother Middle Name","isRequired":false,"placeHolder":"Mother Middle Name","errorMessage":"This field is required.","notice":"please enter mother middle name","validations":[],"type":"text"},{"id":"motherLastName","name":"motherLastName","title":"Mother Last Name","isRequired":false,"placeHolder":"Mother Last Name","errorMessage":"This field is required.","notice":"please enter mother last name","validations":[],"type":"text"},{"id":"dateOfBirth","name":"dateOfBirth","title":"Date Of Birth","isRequired":true,"errorMessage":"please enter date of birth","notice":"please enter date of birth","type":"date"},{"id":"sex","name":"sex","title":"Gender","isRequired":true,"options":[{"label":"MALE","value":"male"},{"label":"FEMALE","value":"female"},{"label":"OTHER","value":"other"}],"errorMessage":"please select Gender","notice":"please select Gender","type":"select"},{"id":"placeOfBirth","name":"placeOfBirth","title":"Place Of Birth","isRequired":true,"placeHolder":"Place of Birth","errorMessage":"place enter place of birth","notice":"place enter place of birth","validations":[],"type":"text"},{"id":"religion","name":"religion","title":"Religion","isRequired":true,"options":[{"label":"HINDU","value":"hindu"},{"label":"BUDH","value":"budh"},{"label":"CHRISTIAN","value":"christian"},{"label":"MUSLIM","value":"muslim"},{"label":"SIKH","value":"sikh"}],"errorMessage":"Please select Religion","notice":"please select Religion","type":"select"},{"id":"question","name":"question","title":"Caste","isRequired":true,"options":[{"label":"GENERAL","value":"general"},{"label":"SCHEDULED CASTES","value":"scheduledcastes"},{"label":"SCHEDULED TRIBES","value":"scheduled tribes"},{"label":"OTHER BACKWARDS CLASSES","value":"otherbackwardclasses"}],"errorMessage":"Error message","notice":"","type":"select"},{"id":"subCaste","name":"subCaste","title":"Sub Caste","isRequired":false,"placeHolder":"Sub Caste","errorMessage":"This field is required.","notice":"please enter Sub Caste","validations":[],"type":"text"},{"id":"studentLocalAddress","name":"studentLocalAddress","title":"Local Address","isRequired":true,"placeHolder":"Local address","errorMessage":"please enter student local address","notice":"please enter student local address","validations":[],"type":"text"},{"id":"studentPermanentAddress","name":"studentPermanentAddress","title":"Permanent Address","isRequired":true,"placeHolder":"Permanent addree","errorMessage":"please enter student permanent address","notice":"please enter student permanent address","validations":[],"type":"text"},{"id":" pinCode","name":" pinCode","title":"Pin Code","isRequired":false,"placeHolder":"Pin code","errorMessage":"This field is required.","notice":"please enter pin code","validations":[],"type":"text"},{"id":"state","name":"state","title":"State","isRequired":false,"options":[],"errorMessage":"please select state","notice":"please select state","type":"select"},{"id":"city","name":"city","title":"city","isRequired":false,"options":[],"errorMessage":"please select city","notice":"please select city","type":"select"},{"id":"studentPrimaryCellNumber","name":"studentPrimaryCellNumber","title":"Student Primary Cell Number","isRequired":false,"placeHolder":"Student primary Cell Number","errorMessage":"This field is required.","notice":"please enter student primary cell Number","validations":[],"type":"text"},{"id":" studentAlternateCellNumber","name":" studentAlternateCellNumber","title":"Student Alternate Cell Number","isRequired":false,"placeHolder":"Student Alternate Cell Number","errorMessage":"This field is required.","notice":"please enter  student alternate cell number","validations":[],"type":"text"},{"id":"studentLandLinePhoneNumber","name":"studentLandLinePhoneNumber","title":"Land Line Phone Number","isRequired":false,"placeHolder":"Land Line Phone Number","errorMessage":"This field is required.","notice":"please enter student land line number","validations":[],"type":"text"},{"id":" studentPrimaryEmailId","name":" studentPrimaryEmailId","title":"Primary Email Id","isRequired":true,"placeHolder":"Primary Email Id","errorMessage":"please enter primary email id","notice":"please enter primary email id","validations":[],"type":"text"},{"id":"studentAlternateEmailId","name":"studentAlternateEmailId","title":"Alternate Email Id","isRequired":false,"placeHolder":"alternate Email Id","errorMessage":"This field is required.","notice":"please enter alternate email id","validations":[],"type":"text"},{"id":"fatherCellNumber","name":"fatherCellNumber","title":"Father's Cell Number","isRequired":false,"placeHolder":"Father's Cell Number","errorMessage":"This field is required.","notice":"please enter father cell number","validations":[],"type":"text"},{"id":" fatherEmailId","name":" fatherEmailId","title":"Father's Email Id","isRequired":false,"placeHolder":"Father's Email Id","errorMessage":"This field is required.","notice":"please enter father email id","validations":[],"type":"text"},{"id":"motherCellNumber","name":"motherCellNumber","title":"Mother's Cell Number","isRequired":false,"placeHolder":"Mother's Cell Number","errorMessage":"This field is required.","notice":"please enter Mother's Cell Number","validations":[],"type":"text"},{"id":"motherEmailId","name":"motherEmailId","title":"Mother's Email Id","isRequired":false,"placeHolder":"Mother's Email Id","errorMessage":"This field is required.","notice":"please enter Mother's email id","validations":[],"type":"text"},{"id":"emergencyContactName","name":"emergencyContactName","title":"Emergencey contact Person","isRequired":true,"placeHolder":"Emergencey contact Person","errorMessage":"please enter Emergency contact person","notice":"please enter Emergency contact person","validations":[],"type":"text"},{"id":"emergencyContactCellNumber","name":"emergencyContactCellNumber","title":"Emergencey Contact Cell Number","isRequired":true,"placeHolder":"Emergency Contact Cell Number","errorMessage":"please enter emergency contact cell number","notice":"please enter emergency contact cell number","validations":[],"type":"text"},{"id":"emergencyContactEmailId","name":"emergencyContactEmailId","title":"Emergency Contact Email Id","isRequired":false,"placeHolder":"Emergency Contact Email Id","errorMessage":"This field is required.","notice":"please enter emergency contact email id","validations":[],"type":"text"},{"id":"relationWithStudent","name":"relationWithStudent","title":"Emergency Contact Relation With Student","isRequired":true,"options":[{"label":"MOTHER","value":"mother"},{"label":"FATHER","value":"father"},{"label":"GUARDIAN","value":"guardian"}],"errorMessage":"please enter Emergency Contact Relation With Student","notice":"please enter Emergency Contact Relation With Student","type":"select"}]},{"title":"Academic Information","tabTitle":"Academic Information","subHeading":"Academic Information","content":[{"id":"highestQualification","name":"highestQualification","title":"Highest Qualification","isRequired":true,"placeHolder":"Highest Qualification","errorMessage":"please enter highest qualifiaction","notice":"please enter highest qualifiaction","validations":[],"type":"text"},{"id":"yearOfPassing","name":"yearOfPassing","title":"Year Of Passing","isRequired":true,"placeHolder":"Year Of Passing","errorMessage":"please enter year of passing","notice":"please enter year of passing","validations":[],"type":"text"},{"id":"lastQualificationPercentage","name":"lastQualificationPercentage","title":"Percentage Of Last Qualification","isRequired":true,"placeHolder":"Percentage Of Last Qualification","errorMessage":"please enter Percentage of last qualification","notice":"please enter Percentage of last qualification","validations":[],"type":"text"},{"id":" lastCollegeAttended","name":" lastCollegeAttended","title":"Last College Attended","isRequired":true,"placeHolder":"Last College Attended","errorMessage":"please enter last college attended","notice":"please enter last college attended","validations":[],"type":"text"}]}]
    
        };
        this.workflowRef = React.createRef();
  }

  onClickNext = (index: any, tabData: any) => {
    setTimeout(() => {
      this.workflowRef.current.showNextTab();
    }, 3000);
  };

  onFormSubmitted = (step: any, response: any) => {
    // console.log(step, response);
  };

  onChangeComponent = (e: any, type: any, tabIndex: any, componentIndex: any) => {
    // console.log(e, type, tabIndex, componentIndex);
  }

  onChangeTab = (activeTab: any, data: any) => {
    if ( activeTab === this.state.data.length - 1 ) {
      this.props.sendData(data);
    }
     else {
      this.workflowRef.current.showNextTab();
     }
  };

  onSuccessfulCall = () => {
    this.workflowRef.current.onSuccessfulCall();
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Workflow formData={data} onFormSubmitted={this.onFormSubmitted} ref={this.workflowRef} onChangeComponent={this.onChangeComponent} onChangeTab={this.onChangeTab} />
      </div>
    );
  }
}

export default AdmissionWorkFlow;
