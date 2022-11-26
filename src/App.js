import React, { Component } from 'react';
import { CityList } from './components/city-list/city-list.component';
import { Selection } from './components/selection/selection.component';
import { ParcelForm } from './components/parcel-form/parcel-form.component';
import { ActionButton } from './components/action-buttons/action-buttons.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cities: [
        {
          id: 1,
          name: 'Mumbai'
        },
        {
          id: 2,
          name: 'Delhi'
        },
        {
          id: 3,
          name: 'Kolkata'
        }
      ],
      parcels: [
        {
            id: 10,

            name: "PARCEL1",
    
            sequence: 1,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 11,
    
            name: "PARCEL2",
    
            sequence: 2,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 13,
    
            name: "PARCEL3",
    
            sequence: 3,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 19,
    
            name: "PARCEL4",
    
            sequence: 4,
    
            group: "Delhi"
    
        },
    
        {
    
            id: 15,
    
            name: "PARCEL5",
    
            sequence: 5,
    
            group: "Delhi"
    
        },
    
        {
    
            id: 21,
    
            name: "PARCEL6",
    
            sequence: 6,
    
            group: "Kolkata"
    
        },
    
        {
    
            id: 12,
    
            name: "PARCEL7",
    
            sequence: 7,
    
            group: "Kolkata"
    
        },
    
        {
    
            id: 22,
    
            name: "PARCEL8",
    
            sequence: 8,
    
            group: "Kolkata"
    
        },
    
        {
    
            id: 23,
    
            name: "PARCEL9",
    
            sequence: 9,
    
            group: "Kolkata"
    
        },
    
        {
    
            id: 24,
    
            name: "PARCEL10",
    
            sequence: 10,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 25,
    
            name: "PARCEL11",
    
            sequence: 11,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 31,
    
            name: "PARCEL12",
    
            sequence: 12,
    
            group: "Mumbai"
    
        },
        {
    
            id: 35,
    
            name: "PARCEL13",
    
            sequence: 13,
    
            group: "Delhi"
    
        },
    
        {
    
            id: 41,
    
            name: "PARCEL14",
    
            sequence: 14,
    
            group: "Delhi"
    
        },
        {
    
            id: 44,
    
            name: "PARCEL15",
    
            sequence: 15,
    
            group: "Kolkata"
    
        }
      ],
      orgParcels: [
        {
            id: 10,

            name: "PARCEL1",
    
            sequence: 1,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 11,
    
            name: "PARCEL2",
    
            sequence: 2,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 13,
    
            name: "PARCEL3",
    
            sequence: 3,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 19,
    
            name: "PARCEL4",
    
            sequence: 4,
    
            group: "Delhi"
    
        },
    
        {
    
            id: 15,
    
            name: "PARCEL5",
    
            sequence: 5,
    
            group: "Delhi"
    
        },
    
        {
    
            id: 21,
    
            name: "PARCEL6",
    
            sequence: 6,
    
            group: "Kolkata"
    
        },
    
        {
    
            id: 12,
    
            name: "PARCEL7",
    
            sequence: 7,
    
            group: "Kolkata"
    
        },
    
        {
    
            id: 22,
    
            name: "PARCEL8",
    
            sequence: 8,
    
            group: "Kolkata"
    
        },
    
        {
    
            id: 23,
    
            name: "PARCEL9",
    
            sequence: 9,
    
            group: "Kolkata"
    
        },
    
        {
    
            id: 24,
    
            name: "PARCEL10",
    
            sequence: 10,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 25,
    
            name: "PARCEL11",
    
            sequence: 11,
    
            group: "Mumbai"
    
        },
    
        {
    
            id: 31,
    
            name: "PARCEL12",
    
            sequence: 12,
    
            group: "Mumbai"
    
        },
        {
    
            id: 35,
    
            name: "PARCEL13",
    
            sequence: 13,
    
            group: "Delhi"
    
        },
    
        {
    
            id: 41,
    
            name: "PARCEL14",
    
            sequence: 14,
    
            group: "Delhi"
    
        },
        {
    
            id: 44,
    
            name: "PARCEL15",
    
            sequence: 15,
    
            group: "Kolkata"
    
        }
      ],
      selectedParcel: '',
      parcelName: '',
      parcelGroup: 'Mumbai'
    }
  }

  handleClick = e => {
    let {selectedParcel} = this.state;
    if(e.target.value === selectedParcel) {
      this.setState({selectedParcel: ''});
    }
    else {
      this.setState({selectedParcel: e.target.value});
    }
  }

  updateParcelName = e => {
    let {parcelName} = this.state;
    this.setState({parcelName: e.target.value});
  }

  updateParcelGrpup = e => {
    let {parcelGroup} = this.state;
    this.setState({parcelGroup: e.target.value});
  }

  createNewParcel = () => {
    let { selectedParcel, parcelName, parcelGroup } = this.state;
    let newEl;
    if ( parcelName!='' && parcelGroup!='') {
      const parcelId = Math.floor(Math.random() * 1000) + 1;
      const parcelSeq = this.state.parcels.slice(-1)[0].sequence + 1;
      newEl = {
        id: parcelId,
        name: parcelName,
        sequence: parcelSeq,
        group: parcelGroup
      }
    }
    else {
      alert("Enter parcel name and group to proceed!");
    }
    return newEl;
  }

  addAfter = e => {
    if(this.state.selectedParcel=='') {
      alert("You need to select a parcel!");
    }
    else {
      const newEl = this.createNewParcel();
      let { parcels, selectedParcel } = this.state;
      const targetParcel = parcels.findIndex(parcel => parcel.name === selectedParcel);
      parcels.splice(targetParcel+1, 0, newEl);
      console.log(parcels);
      this.setState({parcels: parcels});
    }
  } 

  addBefore = e => {
    if(this.state.selectedParcel=='') {
      alert("You need to select a parcel!");
    }
    else {
      const newEl = this.createNewParcel();
      let { parcels, selectedParcel } = this.state;
      const targetParcel = parcels.findIndex(parcel => parcel.name === selectedParcel);
      parcels.splice(targetParcel, 0, newEl);
      console.log(parcels);
      this.setState({parcels: parcels});
    }
  } 
  
  replaceParcel = () => {
    if(this.state.selectedParcel=='') {
      alert("You need to select a parcel!");
    }
    else {
      let { parcels, selectedParcel, parcelName, parcelGroup } = this.state;
      if ( parcelName!='' && parcelGroup!='') {
        const parcelToBeReplaced = parcels.find(parcel => {
          return parcel.name === selectedParcel;
        });
        if(parcelToBeReplaced) {
          parcelToBeReplaced.name = parcelName;
          parcelToBeReplaced.group = parcelGroup;
        } 
        this.setState(state => ({
          parcels: parcels
        }));
      }
      else {
        alert("Enter parcel name and group to proceed!");
      }
    }
  }

  deleteParcel = () => {
    if(this.state.selectedParcel=='') {
      alert("You need to select a parcel!");
    }
    else {
      let { selectedParcel } = this.state;
      let filteredArray = this.state.parcels.filter(parcel => parcel.name !== selectedParcel)
      this.setState({parcels: filteredArray});
    }
  }

  refreshParcel = () => {
    let { orgParcels } = this.state;
    this.setState({parcels: orgParcels, selectedParcel: ''});
  }

  showFinal = () => {
    let { parcels } = this.state;
    console.log(parcels);
  }

  render() {

    const { cities, parcels, selectedParcel } = this.state;

    return (
      <div className='container'>
        <CityList cities={cities} parcels={parcels} handleClick= {this.handleClick} />
        <Selection value={selectedParcel} />
        <ParcelForm cities={cities} updateParcelName={this.updateParcelName} updateParcelGroup={this.updateParcelGrpup}  />
        <div className='btn-grid'>
          <ActionButton title="Add After" handleClick={this.addAfter} />
          <ActionButton title="Add Before" handleClick={this.addBefore} />
          <ActionButton title="Replace" handleClick={this.replaceParcel} />
          <ActionButton title="Delete" handleClick={this.deleteParcel} />
          <ActionButton title="Refresh" handleClick={this.refreshParcel} />
          <ActionButton title="Show Final" handleClick={this.showFinal} />
        </div>
      </div>
    )
  }

}

export default App;
