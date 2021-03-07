import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  MenuItem,
  Select,
  Typography,
  InputLabel,
  FormControl,
  FormHelperText,
  TextField,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import DateFnsUtils from '@date-io/date-fns';
import { yupResolver } from '@hookform/resolvers';
import SignInForm from '../sign/SignInForm';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

type TSearchForm = {
  term: string;
};

const defaultValues: TSearchForm = {
  term: '20',
};

const schema = yup.object().shape({
  term: yup.string().required(),
});

export default function MuiChartCard() {
  const { handleSubmit, control, errors, register } = useForm<TSearchForm>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });
  const submitHandle = () => {
    alert('kkk');
    console.log('submithandle');
  };
  return (
    <Card>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>header title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit(submitHandle)}>
            <TextField
              error={errors.term ? true : false}
              variant="outlined"
              margin="normal"
              fullWidth
              id="term"
              label="User Id"
              name="term"
              inputRef={register}
              helperText={errors.term?.message}
              autoFocus
            />
            <Button type="submit"> submit</Button>
          </form>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <CardContent>
        <Box height={400} position="relative">
          <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </Box>
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
          Detail
        </Button>
      </Box>
    </Card>
  );
}
