
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Grid, Paper, Button} from '@material-ui/core'
import axios from 'axios'

const paperStyle={padding :20, height:'80vh', width:800, margin:"0 auto"}
const columns = [
  { field: 'username', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email Id', width: 300 },
  { field: 'phone', headerName: 'Phone Number', width: 150 },
];

// const rows = [res.data];

export default function DataTable() {
    const [data, setData] = useState([]);
    useEffect(
                async () => {
                const result =  await axios('http://localhost:5000/grid');
                setData(result.data);
                console.log('output',data);
      }, []);
  return (
    <Grid>
      <Paper  style={paperStyle}>
       <Grid align='center'></Grid>
    <div>
    <div style={{ width: 200, }}>
      <input type='text'></input>
    </div>
        <div align='center'>
           <h2>Singup Data List</h2>
        </div>
    
    <div style={{ height: 350, }}>
      <DataGrid 
      rows={ data } 
      columns={columns} 
      pageSize={5} 
      checkboxSelection />
    </div>
    <div align='right'>
    <Button variant="contained"  color="primary" href={"/login"}>
      Back
    </Button>
    </div>
    </div>
    </Paper>
    </Grid>
  );
 
}


// import React, { useState, useEffect, Wrapper } from 'react';
// import { Helmet } from 'react-helmet';
// // import { withStyles } from '@material-ui/core/styles';
// // import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import MuiTable from '../Components/MuiTable';
// // import { DataGrid } from '@material-ui/data-grid';
// import axios from 'axios'

// const Usersigndata = props => {
//   const [rows, setRows] = useState();
//   const [refresh, setRefresh] = useState();

//   useEffect(() => {
//     loadData();
//   }, []);

//   useEffect(
//     () => {
//       loadData();
//     },
//     [refresh],
//   );

//   axios.get('http://localhost:5000/grid')
//   .then(res => {
//   const data=res.data;
//    console.log (data)
//   })
//   .catch(error => {console.log(error)
//   });

// const getLabel = id => (messages[id] ? props.intl.formatMessage(messages[id]) : id);
// const columns = [
//   { name: 'username', title: getLabel('username') },
//   { name: 'email', title: getLabel('email') },
//   { name: 'phone', title: getLabel('phone') }
// ].map(x => ({ ...x, id: x.name, label: x.title }));

// const loadData = () => {
//   axios.get('http://localhost:5000/grid', false).then(({ data }) => {
//     setRows(
//       data.map(item => ({
//         ...item,
//         // rowid: item.facilityrequestuuid,
//         // requestStatus:
//         //   // eslint-disable-next-line no-nested-ternary
//         //   item.facility_status === 'A'
//         //     ? 'Approved'
//         //     : item.facility_status === 'E'
//         //       ? 'Already Exists'
//         //       : 'Pending Approval',
//         // ...buttonControls(item),
//       })),
//     );
//   });
// };

// return (
//   <Wrapper>
//     <Helmet title="User SignUp Data" />
//     <Paper>
//       <MuiTable
//         // searchables={searchables}
//         // exportables={exportables}
//         headCells={columns}
//         rows={rows}
//       />
//       {/* <FlexRowContainer>{backButton}</FlexRowContainer> */}
//     </Paper>
//   </Wrapper>
// );
// };

// Usersigndata.displayname = 'Usersigndata';

// export default Usersigndata;

