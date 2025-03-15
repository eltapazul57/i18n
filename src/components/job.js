import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural, useIntl } from "react-intl";

const Job = (props) => {
  const intl = useIntl(); // Obtener el idioma actual

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedNumber 
          value={props.offer.salary} 
          style="decimal" 
          useGrouping={true}
        />
        &nbsp;
        <FormattedPlural 
          value={props.offer.salary} 
          one={intl.formatMessage({ id: "million" })} 
          other={intl.formatMessage({ id: "millions" })}
        />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber 
          value={props.offer.views} 
          style="decimal" 
          useGrouping={true}
        />   
      </td>
    </tr>
  );
};

export default Job;
