import gql from 'graphql-tag';

export const createDoctorMutation = gql`
  mutation(
    $name: String!
    $familyName: String!
    $patronymic: String!
    $speciality: String!
    $email: String!
    $password: String!
  ) {
    createDoctor(
      name: $name
      familyName: $familyName
      patronymic: $patronymic
      speciality: $speciality
      email: $email
      password: $password
    ) {
      id
    }
  }
`;
