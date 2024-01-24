import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { TaskStatusEnum } from "../../generated/graphql";


type StatusSelectProps = {
    initialStatus: TaskStatusEnum;
    onChange: (event: SelectChangeEvent) => void;
};

export const StatusSelect: React.FC<StatusSelectProps> = ({ initialStatus: initialValue, onChange }) => {

  return (
    <FormControl fullWidth>
      <InputLabel id="status-select-label">ステータス</InputLabel>
      <Select
        labelId="status-select-label"
        id="status-select"
        value={initialValue}
        label="ステータス"
        onChange={onChange}
      >
        <MenuItem value="complete">完了</MenuItem>
        <MenuItem value="incomplete">未完了</MenuItem>
      </Select>
    </FormControl>
  );
}
