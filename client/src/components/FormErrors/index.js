import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export const FormErrors = ({ formErrors }) =>
  <div className="formErrors">

    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        if (formErrors[fieldName].length > 0) {
          return (

            <p key={i}> <FontAwesomeIcon icon={faExclamationCircle} className="text-red" /> {formErrors[fieldName]}</p>
          )
        } else {
          return "";
        }
      }
    })}
  </div>