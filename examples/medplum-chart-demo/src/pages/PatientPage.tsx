import { Flex, Loader } from '@mantine/core';
import { getReferenceString } from '@medplum/core';
import { Patient } from '@medplum/fhirtypes';
import { useResource } from '@medplum/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { PatientChart } from '../components/PatientChart';
import { SoapNote } from '../components/SoapNote';
import { TaskList } from '../components/TaskList';

export function PatientPage(): JSX.Element {
  const { id } = useParams();
  const patient = useResource<Patient>({ reference: `Patient/${id}` });
  if (!patient) {
    return <Loader />;
  }

  return (
    <React.Fragment key={getReferenceString(patient)}>
      <Flex gap="xs" justify="center" align="flex-start" direction="row">
        <PatientChart />
        <TaskList />
        <SoapNote />
      </Flex>
    </React.Fragment>
  );
}
