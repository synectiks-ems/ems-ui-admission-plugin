import gql from 'graphql-tag';

export const ADD_ADM_APPLICATION = gql`
  mutation addAdmissionApplication($input: AddAdmissionApplicationInput!) {
    addAdmissionApplication(input: $input) {
      admissionApplication {
        id
        admissionStatus
        studentName
        studentMiddleName
        studentLastName
        fatherName
        fatherMiddleName
        fatherLastName
        motherName
        motherMiddleName
        motherLastName
        contactNumber
        alternateMobileNumber
        dateOfBirth
        email
        sex
        comments
        applicationId
        course
        admissionDate
        admissionEnquiry {
          id
        }
        academicHistory {
          id
        }
        documents {
          id
        }
        branch {
          id
        }
        batch {
          id
        }
        state {
          id
        }
        city {
          id
        }
        country {
          id
        }
        department {
          id
        }
        academicyear {
          id
        }
      }
    }
  }
`;
