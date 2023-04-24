import React from "react";
import { render, screen } from "@testing-library/react";
// import axios from "axios";

import UserTable from "../../../pages/Contractor/Table";
import { BrowserRouter } from "react-router-dom";


// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("User Table", () => {

 //testing data list when data list found
  test("renders data list when data is not null", async () => {
    const dataList = [
      {
        "id": 3,
        "first_name": "Syam",
        "last_name": "Pande",
        "email_id": "sp@tenant1.com",
        "team_name": "Microsoft Bot Team",
        "job_title": "Software developer",
        "manager_id": 1,
        "tenant_id": 1,
        "type": "Contractor",
        "hire_date": "2023-04-19T12:08:06.163",
        "prior_exp_months": 24,
        "service_provider_id": 1,
        "hourly_rate": 20,
        "team_id": 1
    },
    {
        "id": 4,
        "first_name": "Katherine",
        "last_name": "Mcullum",
        "email_id": "km@tenant1.com",
        "team_name": "Microsoft Bot Team",
        "job_title": "QA Analyst",
        "manager_id": 1,
        "tenant_id": 1,
        "type": "Contractor",
        "hire_date": "2022-04-17T18:50:00",
        "prior_exp_months": 8,
        "service_provider_id": 1,
        "hourly_rate": 20,
        "team_id": 1
    }
    ];
    // mockedAxios.get.mockResolvedValue({ data: dataList });
    render(
      <BrowserRouter>
        <UserTable
          data={dataList}
          updateUser={jest.fn()}
          handleDeleteUser={jest.fn()}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Role")).toBeInTheDocument();
    expect(screen.getByText("Team Member")).toBeInTheDocument();
    expect(screen.getByText(dataList[0].email_id)).toBeInTheDocument();
    expect(screen.getByText(dataList[0].job_title)).toBeInTheDocument();
    
  });
});
