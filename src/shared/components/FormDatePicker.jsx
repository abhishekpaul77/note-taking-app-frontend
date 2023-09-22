import React from "react";
import { Controller } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
import { useState } from "react";
import { TextField } from "@mui/material";

const FormDatePicker = ({control,name}) => {
  const [dateValue, setDateValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
    control={control}
    name={name}
    defaultValue={dateValue}
      render={({field}) => {
          return (<DatePicker
            label="Completion Date"
            value={dateValue}
            onChange={(SelectedDate) => { field.onChange(SelectedDate); setDateValue(SelectedDate)}}
            renderInput={(params)=>{
                return <TextField {...params}/>
            }}
            {...field.restField}
          />);
        }}
        />
        </LocalizationProvider>
  );
};

export default FormDatePicker;
