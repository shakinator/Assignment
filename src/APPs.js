import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from "react-bootstrap";
import './APPs.css';
const accepted = [];
const rejected = [];
export class APPs extends Component {
  accept = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button onClick={() => {this.onAccept(row);}} className="accept">
        Accept
      </Button>
    );
  };
  reject = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button onClick={() => {this.onReject(row);}} className="reject">
        Reject
      </Button>
    );
  };
  onAccept(row){
    accepted.push(row);
    console.log(accepted);
  }
  onReject(row){
    const rejectedRow = {};
    const {id , mobile , name} = row;
    rejectedRow.id = id;
    rejectedRow.mobile = mobile;
    rejectedRow.name = name;
    const rejectReason = prompt("Enter Reason For Rejection");
    rejectedRow.reason = rejectReason;
    rejected.push(rejectedRow);
    console.log(rejected);
  }
  render() {
    const columns = [{
      dataField: 'id',
      text: 'Earning_id'
    }, {
      dataField: 'name',
      text: 'Earning'
    }, {
      dataField: 'mobile',
      text: 'Mobile Number'
    },
    {
      dataField: 'accept',
      text: 'Accept',
      formatter: this.accept
    },
    {
      dataField: 'reject',
      text: 'Reject',
      formatter: this.reject
    }];
    return (
      <div className="App">
        <p className="Table-header"></p>
         
        <BootstrapTable keyField='id' data={ data } columns={ columns } className="table" />
      </div>
    )
  }
}

export default APPs;

const data = [
  {
    id : 1 ,
    name : 1000,
    mobile : 888888888
  },
  {
    id : 2 ,
     name : 500,
    mobile : 999999999
  },
  {
    id : 3 ,
    name : 200,
    mobile : 1000000000
  },
  {
    id : 4 ,
    name : 500,
    mobile : 1212121212
  },
  {
    id : 5,
    name : 1000,
    mobile : 4534532344
  },  {
    id : 6 ,
    name : 1200,
    mobile : 7777777777
  },  {
    id : 7 ,
    name : 1300,
    mobile : 6666666666
  },  {
    id : 8 ,
    name : 1400,
    mobile : 5555555555
  }
]