/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const addUser = gql`
  mutation addUser($name: String!, $lname: String!, $address: String!, $phone: String!) {
    addUser(name: $name, lname: $lname, address: $address, phone: $phone) {
      id
      name
      lname
      address
      phone
      
    }
  }`;

export const Users = gql`
  query {
    users{
      id
      name
      lname
      address
      phone
    }
  }`;

export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      name
      lname
      address
      phone
    }
  }`;

export const updateUser = gql`
  mutation updateUser($id: String!, $name: String!, $lname: String!, $address: String!, $phone:String!) {
    updateUser(id: $id, name: $name, lname: $lname, address: $address, phone: $phone) {
      id
      name
      lname
      address
      phone
    }
  }`;