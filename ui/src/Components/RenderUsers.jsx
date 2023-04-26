import React from "react";
import { users } from "./users.json"

export const RenderUsers = () => {
    return (
      <>
        <div className="users-table">
          {users.map((users, key) => {
            return (
              <div key={key}>
                {users.userid +
                  " , " +
                  users.firstname +
                  " ," +
                  users.lastname +
                  ", " +
                  users.emailaddress +
                  ", " +
                  users.phonenumber +
                  ", " +
                  users.status}
              </div>
            );
          })}
        </div>
      </>
    );
  };